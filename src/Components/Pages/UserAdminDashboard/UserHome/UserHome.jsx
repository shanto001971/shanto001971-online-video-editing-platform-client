import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";


const UserHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div className="text-2xl">Welcome back {user.displayName}</div>
        </div>
    );
};

export default UserHome;