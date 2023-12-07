import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Wesley Lima</h1>
            <hr />
            <div className="links">
                <NavLink to="/" className="link" activeClassName="active" exact>
                    Lista
                </NavLink>
                <NavLink to="/add" className="link" activeClassName="active">
                    Sobre mim
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
