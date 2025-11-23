import React from 'react';
import { Container, Box } from '@mui/material';
import ProfileForm from '../components/ProfileForm';

const UserProfilePage = () => {
    return (
        <Container maxWidth="md">
            <Box py={4}>
                <ProfileForm />
            </Box>
        </Container>
    );
};

export default UserProfilePage;
