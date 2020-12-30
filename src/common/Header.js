import {NavLink} from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <header className="mdl-layout__header mdl-layout__header--waterfall header">
            <div className="mdl-layout__header-row logo-row">
                <span className="mdl-layout__title">
                    <div className="logo"></div>
                </span>
            </div>
            <div className="mdl-layout__header-row navigation-row mdl-layout--large-screen-only">
                <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
                    <NavLink exact to="/" className="mdl-navigation__link" activeClassName="is-active">Home</NavLink>
                    <NavLink exact to="/about" className="mdl-navigation__link" activeClassName="is-active">About</NavLink>
                    <NavLink exact to="/pillars" className="mdl-navigation__link" activeClassName="is-active">Pillars</NavLink>
                    <NavLink exact to="/contact" className="mdl-navigation__link" activeClassName="is-active">Contact Us</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;