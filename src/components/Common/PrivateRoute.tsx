import * as React from 'react';
import { Navigate } from 'react-router-dom';

export interface PrivateRouteProps {
    children: React.ReactNode;
}

export default function PrivateRoute(props: PrivateRouteProps) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return <>{props.children}</>;
}
