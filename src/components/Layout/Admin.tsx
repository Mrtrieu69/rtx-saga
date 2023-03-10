import Box from '@mui/material/Box/Box';
import { Header, Sidebar } from 'components/Common';
import { Outlet } from 'react-router-dom';
import styles from './Admin.module.css';

export interface AdminLayoutProps {}

export default function AdminLayout(props: AdminLayoutProps) {
    return (
        <Box className={styles.root}>
            <Box className={styles.header}>
                <Header />
            </Box>

            <Box className={styles.container}>
                <Box className={styles.sidebar}>
                    <Sidebar />
                </Box>

                <Box className={styles.main}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}
