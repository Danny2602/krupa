import React from 'react';
import { Skeleton } from '@mui/material';

/**
 * KSkeleton component for loading states.
 * Wraps MUI Skeleton to provide a consistent loading UI across the app.
 * 
 * @param {string} variant - 'text' | 'rectangular' | 'rounded' | 'circular'
 * @param {number|string} width - Width of the skeleton
 * @param {number|string} height - Height of the skeleton
 * @param {object} sx - Additional styles
 */
export const KSkeleton = ({ variant = 'rectangular', width, height, sx, ...props }) => {
    return (
        <Skeleton
            variant={variant}
            width={width}
            height={height}
            animation="wave"
            sx={{
                borderRadius: variant === 'rectangular' ? 1 : undefined,
                ...sx
            }}
            {...props}
        />
    );
};
