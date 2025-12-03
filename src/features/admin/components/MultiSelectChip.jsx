import React from 'react';
import { TextField, MenuItem, Box, Chip } from '@mui/material';

export const MultiSelectChip = ({
    label = 'Seleccionar',
    value = [],
    onChange,
    options = [],
    getOptionLabel = (option) => option.name,
    getOptionValue = (option) => option,
    getOptionColor = (option) => option.color,
    required = false,
    disabled = false
}) => {
    const handleChange = (e) => {
        const newValue = e.target.value;
        // Evitar duplicados comparando por el label
        const uniqueValues = newValue.filter((item, index, self) =>
            index === self.findIndex(i => getOptionLabel(i) === getOptionLabel(item))
        );
        onChange(uniqueValues);
    };

    const handleDelete = (itemToDelete) => (e) => {
        e.stopPropagation();
        onChange(value.filter(item => getOptionLabel(item) !== getOptionLabel(itemToDelete)));
    };

    return (
        <TextField
            fullWidth
            select
            label={label}
            value={value}
            onChange={handleChange}
            required={required}
            disabled={disabled}
            SelectProps={{
                multiple: true,
                renderValue: (selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((item) => (
                            <Chip
                                key={getOptionLabel(item)}
                                label={getOptionLabel(item)}
                                size="small"
                                sx={{
                                    backgroundColor: getOptionColor(item) || '#1976d2',
                                    color: 'white'
                                }}
                                onMouseDown={(e) => e.stopPropagation()}
                                onDelete={handleDelete(item)}
                            />
                        ))}
                    </Box>
                )
            }}
        >
            {options.map((option, index) => (
                <MenuItem key={index} value={getOptionValue(option)}>
                    {getOptionLabel(option)}
                </MenuItem>
            ))}
        </TextField>
    );
};
