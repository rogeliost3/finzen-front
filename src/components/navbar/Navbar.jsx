import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import RouteContext from '../../context/RouteContext.jsx';
import { AuthContext } from '../../context/AuthContext.jsx';
import './Navbar.css';

function Navbar() {
    const { route, onRouteChange } = useContext(RouteContext);
    const { onLogout } = useContext(AuthContext);
    return (
        <nav>
            <ul className="nav-list">
                <li className={"nav-item "} >
                    <NavLink to="/">Home</NavLink>
                </li>
                {/* <li >
                    <NavLink to="/budget">Budgets</NavLink>
                </li>
                <li >
                    <NavLink to="/goal">Goals</NavLink>
                </li> */}
                <li >
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li className={"nav-item "}>
                    {/* <NavLink to="/logout">Logout</NavLink> */}
                    <button onClick={onLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;