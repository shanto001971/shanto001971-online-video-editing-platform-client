import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Loader from '../Components/Loader/Loader';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    
  console.log("user:", user);
  console.log("loading:", loading);

    if(loading){
        return  <Loader></Loader>
        // <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }

    if(loading){
        return  <Loader/>
        // <progress className="progress w-56"></progress>
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;