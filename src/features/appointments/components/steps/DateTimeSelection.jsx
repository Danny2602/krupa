import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button, Box, TextField, IconButton, Paper, Divider, Dialog, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'motion/react';
import { KSkeleton } from '@/components/ui/KSkeleton';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import CloseIcon from '@mui/icons-material/Close';
import EditNoteIcon from '@mui/icons-material/EditNote';

dayjs.locale('es');

// --- MOCK API SERVICE ---
const fetchAvailableSlots = async (date) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 600));

    // Mock logic: Generate different slots based on the day of the week
    const dayOfWeek = dayjs(date).day(); // 0 (Sunday) to 6 (Saturday)

    let allSlots = [];

    if (dayOfWeek === 6) { // Saturday: Only morning slots
        allSlots = ['09:00', '10:00', '11:00', '12:00'];
    } else { // Weekdays
        allSlots = [
            '08:00', '09:00', '10:00', '11:00', '12:00',
            '14:00', '15:00', '16:00', '17:00', '18:00'
        ];
    }

    // Simulate reserved slots dynamically based on date string
    // This makes it look like different days have different availability
    const dateNum = parseInt(date.replace(/-/g, ''));
    const reserved = [];

    allSlots.forEach((slot, index) => {
        // Simple pseudo-random logic to reserve some slots
        if ((dateNum + index) % 5 === 0) {
            reserved.push(slot);
        }
    });

    return {
        slots: allSlots,
        reserved: reserved
    };
};

const CalendarView = ({ currentMonth, onPrevMonth, onNextMonth, onDateClick, selectedDate, isDateDisabled }) => {
    const daysInMonth = currentMonth.daysInMonth();
    const firstDayOfMonth = currentMonth.startOf('month').day(); // 0 = Sunday
    const today = dayjs();

    return (
        <Box>
            {/* Month Navigation */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <IconButton onClick={onPrevMonth} disabled={currentMonth.isBefore(today, 'month')}>
                    <ChevronLeftIcon />
                </IconButton>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ textTransform: 'capitalize' }}>
                    {currentMonth.format('MMMM YYYY')}
                </Typography>
                <IconButton onClick={onNextMonth}>
                    <ChevronRightIcon />
                </IconButton>
            </Box>

            {/* Days Header */}
            <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" mb={1}>
                {['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'].map(day => (
                    <Typography key={day} variant="caption" align="center" color="text.secondary" fontWeight="bold">
                        {day}
                    </Typography>
                ))}
            </Box>

            {/* Calendar Grid */}
            <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap={1}>
                {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                    <Box key={`empty-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const isDisabled = isDateDisabled(day);
                    const dateStr = currentMonth.date(day).format('YYYY-MM-DD');
                    const isSelected = selectedDate === dateStr;

                    return (
                        <Button
                            key={day}
                            onClick={() => !isDisabled && onDateClick(day)}
                            disabled={isDisabled}
                            variant={isSelected ? "contained" : "text"}
                            sx={{
                                minWidth: 0,
                                height: 36,
                                borderRadius: '50%',
                                p: 0,
                                fontWeight: isSelected ? 'bold' : 'normal',
                                bgcolor: isSelected ? 'primary.main' : 'transparent',
                                color: isSelected ? 'white' : (isDisabled ? 'text.disabled' : 'text.primary'),
                                '&:hover': {
                                    bgcolor: isSelected ? 'primary.dark' : 'action.hover',
                                }
                            }}
                        >
                            {day}
                        </Button>
                    );
                })}
            </Box>
        </Box>
    );
};

const DateTimeSelection = ({ selectedDate, selectedTime, onSelectDate, onSelectTime, notes, onNotesChange }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [currentMonth, setCurrentMonth] = useState(dayjs());
    const [loading, setLoading] = useState(false);
    const [availableSlots, setAvailableSlots] = useState([]);
    const [reservedSlots, setReservedSlots] = useState([]);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    // Fetch slots when date changes
    useEffect(() => {
        const loadSlots = async () => {
            if (selectedDate) {
                setLoading(true);
                try {
                    const data = await fetchAvailableSlots(selectedDate);
                    setAvailableSlots(data.slots);
                    setReservedSlots(data.reserved);
                } catch (error) {
                    console.error("Failed to fetch slots", error);
                } finally {
                    setLoading(false);
                }
            } else {
                setAvailableSlots([]);
                setReservedSlots([]);
            }
        };
        loadSlots();
    }, [selectedDate]);

    const handlePrevMonth = () => setCurrentMonth(currentMonth.subtract(1, 'month'));
    const handleNextMonth = () => setCurrentMonth(currentMonth.add(1, 'month'));

    const isDateDisabled = (day) => {
        const date = currentMonth.date(day);
        const today = dayjs();
        return date.isBefore(today, 'day') || date.day() === 0;
    };

    const handleDateClick = (day) => {
        const date = currentMonth.date(day).format('YYYY-MM-DD');
        onSelectDate(date);
        onSelectTime(null);
        if (isMobile) setIsCalendarOpen(false);
    };

    // Time grouping
    const morningSlots = availableSlots.filter(time => parseInt(time.split(':')[0]) < 12);
    const afternoonSlots = availableSlots.filter(time => parseInt(time.split(':')[0]) >= 12);

    const renderTimeSlots = (slots, icon, label) => (
        <Box mb={3}>
            <Box display="flex" alignItems="center" mb={2} gap={1} color="text.secondary">
                {icon}
                <Typography variant="subtitle2" fontWeight="bold">
                    {label}
                </Typography>
            </Box>
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={1.5}>
                {slots.map((time) => {
                    const isReserved = reservedSlots.includes(time);
                    const isSelected = selectedTime === time;

                    return (
                        <motion.div
                            key={time}
                            whileHover={!isReserved ? { scale: 1.05 } : {}}
                            whileTap={!isReserved ? { scale: 0.95 } : {}}
                        >
                            <Button
                                variant={isSelected ? "contained" : "outlined"}
                                onClick={() => !isReserved && onSelectTime(time)}
                                fullWidth
                                disabled={isReserved}
                                size="small"
                                sx={{
                                    borderRadius: 2,
                                    py: 1,
                                    borderColor: isSelected ? 'primary.main' : 'divider',
                                    bgcolor: isSelected ? 'primary.main' : 'transparent',
                                    color: isSelected ? 'white' : 'text.primary',
                                    opacity: isReserved ? 0.5 : 1,
                                    '&:hover': {
                                        bgcolor: isSelected ? 'primary.dark' : 'action.hover',
                                        borderColor: isSelected ? 'primary.dark' : 'primary.light',
                                    }
                                }}
                            >
                                {time}
                            </Button>
                        </motion.div>
                    );
                })}
            </Box>
        </Box>
    );

    return (
        <Box className="h-full flex flex-col">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Typography variant="h5" className="font-bold text-center mb-1" sx={{ color: '#667eea' }}>
                    Agenda tu Cita
                </Typography>
                <Typography variant="body2" className="text-gray-600 text-center mb-6">
                    Selecciona el día y la hora que mejor te convenga
                </Typography>
            </motion.div>

            <Grid container spacing={3} sx={{ flex: 1, overflow: { xs: 'auto', lg: 'hidden' } }}>
                {/* Columna Izquierda: Botón de Calendario + Horarios */}
                <Grid item size={{ xs: 12, lg: 7 }} sx={{ display: 'flex', flexDirection: 'column', height: { xs: 'auto', lg: '100%' } }}>
                    <Button

                        variant="contained"
                        startIcon={<CalendarMonthIcon />}
                        onClick={() => setIsCalendarOpen(true)}
                        fullWidth
                        sx={{ mb: 2, py: 1.5, borderRadius: 2, borderColor: 'divider', color: 'white', bgcolor: '#012558' }}
                    >
                        {selectedDate ? dayjs(selectedDate).format('DD [de] MMMM, YYYY') : 'Seleccionar Fecha'}
                    </Button>

                    <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider', flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minHeight: { xs: '300px', lg: 0 } }}>
                        <Box display="flex" alignItems="center" mb={3} flexShrink={0}>
                            <AccessTimeIcon color="primary" sx={{ mr: 1 }} />
                            <Typography variant="h6" fontWeight="bold">
                                Horarios Disponibles
                            </Typography>
                            {selectedDate && (
                                <Typography variant="body2" color="text.secondary" sx={{ ml: 'auto', display: { xs: 'none', sm: 'block' } }}>
                                    {dayjs(selectedDate).format('dddd, DD [de] MMMM')}
                                </Typography>
                            )}
                        </Box>

                        <Box sx={{ flex: 1, overflowY: 'auto', pr: 1 }}>
                            {!selectedDate ? (
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%" color="text.secondary" minHeight="200px">
                                    <CalendarMonthIcon sx={{ fontSize: 48, mb: 2, opacity: 0.5 }} />
                                    <Typography variant="body2">
                                        {isMobile ? "Toca 'Seleccionar Fecha' para comenzar" : "Selecciona una fecha para ver los horarios"}
                                    </Typography>
                                </Box>
                            ) : loading ? (
                                <Box>
                                    <Box mb={3}>
                                        <KSkeleton variant="text" width={100} height={24} sx={{ mb: 2 }} />
                                        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={1.5}>
                                            {[1, 2, 3, 4, 5, 6].map(i => (
                                                <KSkeleton key={i} variant="rectangular" height={36} sx={{ borderRadius: 2 }} />
                                            ))}
                                        </Box>
                                    </Box>
                                    <Box>
                                        <KSkeleton variant="text" width={100} height={24} sx={{ mb: 2 }} />
                                        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={1.5}>
                                            {[1, 2, 3, 4, 5, 6].map(i => (
                                                <KSkeleton key={i} variant="rectangular" height={36} sx={{ borderRadius: 2 }} />
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {renderTimeSlots(morningSlots, <WbSunnyIcon fontSize="small" />, "Mañana")}
                                    <Divider sx={{ my: 3 }} />
                                    {renderTimeSlots(afternoonSlots, <WbTwilightIcon fontSize="small" />, "Tarde")}
                                </motion.div>
                            )}
                        </Box>
                    </Paper>
                </Grid>

                {/* Columna Derecha: Notas/Síntomas */}
                <Grid item size={{ xs: 12, lg: 5 }} sx={{ display: 'flex', flexDirection: 'column', height: { xs: 'auto', lg: '100%' } }}>
                    <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider', height: { xs: '300px', lg: '100%' }, display: 'flex', flexDirection: 'column' }}>
                        <Box display="flex" alignItems="center" mb={2} gap={1} color="text.secondary" flexShrink={0}>
                            <EditNoteIcon />
                            <Typography variant="subtitle2" fontWeight="bold">
                                Notas o Síntomas (Opcional)
                            </Typography>
                        </Box>
                        <TextField
                            fullWidth
                            multiline
                            placeholder="Describe brevemente tus síntomas o motivo de consulta..."
                            value={notes}
                            onChange={(e) => onNotesChange(e.target.value)}
                            variant="outlined"
                            sx={{
                                flex: 1,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 2,
                                    height: '100%',
                                    alignItems: 'flex-start',
                                    '& textarea': {
                                        height: '100% !important',
                                        overflow: 'auto !important'
                                    }
                                }
                            }}
                        />
                    </Paper>
                </Grid>
            </Grid>

            {/* Mobile Calendar Modal */}
            <Dialog
                open={isCalendarOpen}
                onClose={() => setIsCalendarOpen(false)}
                fullWidth
                maxWidth="xs"
                PaperProps={{
                    sx: { borderRadius: 3, p: 2 }
                }}
            >
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h6" fontWeight="bold">
                        Seleccionar Fecha
                    </Typography>
                    <IconButton onClick={() => setIsCalendarOpen(false)} size="small">
                        <CloseIcon />
                    </IconButton>
                </Box>
                <CalendarView
                    currentMonth={currentMonth}
                    onPrevMonth={handlePrevMonth}
                    onNextMonth={handleNextMonth}
                    onDateClick={handleDateClick}
                    selectedDate={selectedDate}
                    isDateDisabled={isDateDisabled}
                />
            </Dialog>
        </Box >
    );
};

export default DateTimeSelection;
