import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Box,
    TablePagination,
    IconButton,
    Tooltip
} from '@mui/material';
import { Search, Edit, Delete, Visibility } from '@mui/icons-material';
import { motion } from 'motion/react';

export const AdminTable = ({
    columns = [],
    data = [],
    onEdit,
    onDelete,
    onView,
    searchPlaceholder = 'Buscar...'
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Filtrado simple por término de búsqueda (placeholder)
    const filteredData = data.filter(row =>
        Object.values(row).some(value =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const paginatedData = filteredData.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    return (
        <Box>
            {/* Barra de búsqueda */}
            <Box className="mb-4">
                <TextField
                    fullWidth
                    placeholder={searchPlaceholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                        startAdornment: <Search className="mr-2 text-gray-400" />
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            backgroundColor: 'white'
                        }
                    }}
                />
            </Box>

            {/* Tabla */}
            <TableContainer
                component={Paper}
                sx={{
                    borderRadius: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
            >
                <Table>
                    <TableHead sx={{ backgroundColor: '#f3f4f6' }}>
                        <TableRow>
                            {columns.map((column, index) => (
                                <TableCell
                                    key={index}
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#374151',
                                        fontSize: '0.875rem'
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            <TableCell
                                align="right"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#374151',
                                    fontSize: '0.875rem'
                                }}
                            >
                                Acciones
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedData.map((row, rowIndex) => (
                            <motion.tr
                                key={rowIndex}
                                component={TableRow}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: rowIndex * 0.05 }}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: '#f9fafb'
                                    }
                                }}
                            >
                                {columns.map((column, colIndex) => (
                                    <TableCell key={colIndex}>
                                        {column.render ? column.render(row, page * rowsPerPage + rowIndex) : row[column.field]}
                                    </TableCell>
                                ))}
                                <TableCell align="right">
                                    <Box className="flex gap-1 justify-end">
                                        {onView && (
                                            <Tooltip title="Ver">
                                                <IconButton
                                                    size="small"
                                                    onClick={() => onView(row)}
                                                    sx={{ color: '#667eea' }}
                                                >
                                                    <Visibility fontSize="small" />
                                                </IconButton>
                                            </Tooltip>
                                        )}
                                        {onEdit && (
                                            <Tooltip title="Editar">
                                                <IconButton
                                                    size="small"
                                                    onClick={() => onEdit(row)}
                                                    sx={{ color: '#f59e0b' }}
                                                >
                                                    <Edit fontSize="small" />
                                                </IconButton>
                                            </Tooltip>
                                        )}
                                        {onDelete && (
                                            <Tooltip title="Eliminar">
                                                <IconButton
                                                    size="small"
                                                    onClick={() => onDelete(row)}
                                                    sx={{ color: '#ef4444' }}
                                                >
                                                    <Delete fontSize="small" />
                                                </IconButton>
                                            </Tooltip>
                                        )}
                                    </Box>
                                </TableCell>
                            </motion.tr>
                        ))}
                    </TableBody>
                </Table>

                {/* Paginación */}
                <TablePagination
                    component="div"
                    count={filteredData.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage="Filas por página:"
                    labelDisplayedRows={({ from, to, count }) =>
                        `${from}-${to} de ${count}`
                    }
                />
            </TableContainer>
        </Box>
    );
};
