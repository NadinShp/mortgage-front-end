import { NavLink } from "react-router-dom";
import routes from '../../routes';
import s from './Navigation.module.css';

function Navigation() {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink exact
                        to={routes.managment}
                        className={s.navLink}
                        activeClassName={s.activeNavLink}>Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={routes.canculator}
                        className={s.navLink}
                        activeClassName={s.activeNavLink}>Calculator
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;