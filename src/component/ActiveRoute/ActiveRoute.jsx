import { NavLink } from "react-router-dom";
import './ActiveRoute.css'

const ActiveRoute = ({to ,children}) => {
    return (
        <div>
            <NavLink to={to} className={({ isActive }) => isActive ? "active" : ""} > {children} </NavLink>
        </div>
    );
};

export default ActiveRoute;