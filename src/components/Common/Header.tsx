import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import styles from './Common.module.css';
import * as React from 'react';
import { useAppDispatch } from 'app/hooks';
import { logout } from 'features/auth/authSlice';

export default function Header() {
    const dispatch = useAppDispatch();

    const handleLogoutClick = () => {
        dispatch(logout());
    };

    return (
        <AppBar position="static">
            <Toolbar className={styles.header}>
                <Typography variant="h6" className={styles.title}>
                    Student Management
                </Typography>

                <Button color="inherit" onClick={handleLogoutClick}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
}
