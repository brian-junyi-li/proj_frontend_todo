import { Outlet,Navigate} from 'react-router-dom';
import { useAuth } from './components/Auth_context';

const ProtectedRoutes = () => {
    const { IsAuthenticated } = useAuth();
    if (!IsAuthenticated) {
        return <Navigate to="/" />
    }
    return (
        <>
            <Outlet />
        </>

    )

}

export default ProtectedRoutes