import { Box, Button, Paper, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { login, selectLogging } from '../authSlice';
import styles from './LoginPage.module.css';

export default function LoginPage() {
    const dispatch = useAppDispatch();
    const isLogging = useAppSelector(selectLogging);

    const handleLogin = () => {
        dispatch(
            login({
                username: 'tam',
                password: '12345',
            })
        );
    };

    return (
        <div className={styles.root}>
            <Paper elevation={1} className={styles.box}>
                <Typography variant="h5" component="h1">
                    Student Management
                </Typography>

                <Box mt={4}>
                    <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>
                        {isLogging && <CircularProgress size={20} color="secondary" />} Fake Login
                    </Button>
                </Box>
            </Paper>
        </div>
    );
}
