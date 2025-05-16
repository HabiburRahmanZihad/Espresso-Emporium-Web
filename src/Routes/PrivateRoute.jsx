import  { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';


const PrivateRoute = ({ children }) => {

    const location = useLocation();

    const { user, loading } = use(AuthContext);


    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            <progress className="progress w-56"></progress>
        </div>;
    }

    if (!user) {
        return <Navigate state={location?.pathname} to="/" />;
    }

    return children;
};

export default PrivateRoute;