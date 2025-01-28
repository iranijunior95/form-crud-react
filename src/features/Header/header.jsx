import { NavLink } from "react-router-dom";
import styled from "styled-components";

const DivNav = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 767px) {
        justify-content: center;
    }
`;

function Header() {
    return (
        <header>
            <nav className="main-header navbar navbar-expand-md navbar-dark navbar-info">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">
                        <span className="brand-text font-weight">Form CRUD</span>
                    </NavLink>

                    <button className="navbar-toggler order-3" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <DivNav className="collapse navbar-collapse order-3" id="navbarCollapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link font-weight">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/listar" className="nav-link font-weight">Listar</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/novo" className="nav-link font-weight">Novo</NavLink>
                            </li>
                        </ul>
                    </DivNav>
                </div>
            </nav>
        </header>

    );
}

export default Header;