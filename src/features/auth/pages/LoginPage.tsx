import { Box, Button, Paper, Typography } from '@mui/material';
import styles from './LoginPage.module.css';

export default function LoginPage() {
    return (
        <div className={styles.root}>
            <Paper elevation={1} className={styles.box}>
                <Typography variant="h5" component="h1">
                    Student Management
                </Typography>

                <Box mt={4}>
                    <Button fullWidth variant="contained" color="primary">
                        Fake Login
                    </Button>
                </Box>
            </Paper>
        </div>
    );
}
