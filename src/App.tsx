import { Routes, Route } from 'react-router-dom';
import LoginPage from 'features/auth/pages/LoginPage';
import { AdminLayout } from 'components/Layout';
import { NotFound, PrivateRoute } from 'components/Common';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
                path="/admin"
                element={
                    <PrivateRoute>
                        <AdminLayout />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
