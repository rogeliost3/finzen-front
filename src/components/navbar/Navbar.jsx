import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import RouteContext from '../../context/RouteContext.jsx';
import { AuthContext } from '../../context/AuthContext.jsx';
import './Navbar.css';

function Navbar() {
    const { route, onRouteChange } = useContext(RouteContext);
    const { onLogout, userData } = useContext(AuthContext);

    return (  //TODO: Hacer menu hamburguesa
        <nav className="navigation-bar">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                {userData !== null ? (
                    <>
                        <li>
                            <NavLink to="/transaction">Transactions</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/goal">Goals</NavLink>
                        </li> */}
                        <li>
                            <NavLink to="/budget/report">Budgets</NavLink>
                        </li>
                        <li className="submenu">
                            <span><i className={"fa-solid fa-user-tie"}></i>{" "+userData.name.split(' ')[0]}</span>
                            <ul className="submenu-items">
                                
                                <li>
                                    <NavLink to="/user/edit">Edit profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/user/remove">Delete account</NavLink>
                                </li> 
                                <li>
                                    <button onClick={onLogout}>Logout</button>
                                </li>
                                
                            </ul>
                        </li>
                    </>
                ) : ( // Si no hay userData, mostramos Login y Register
                    <>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}


export default Navbar;