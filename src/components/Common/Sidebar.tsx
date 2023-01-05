import { NavLink } from 'react-router-dom';
import styles from './Common.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';

const theme = createTheme();

export default function Sidebar() {
    return (
        <ThemeProvider theme={theme}>
            <NavLink
                to="/admin/dashboard"
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
            </NavLink>
            <NavLink
                to="/admin/students"
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Students" />
                </ListItemButton>
            </NavLink>
        </ThemeProvider>
    );
}
