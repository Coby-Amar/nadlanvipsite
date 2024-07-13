import { NavLink } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import './Navigation.style.scss'
import { RAMAT_HAHAYAL } from '@utils/consts.utils';

export default function Navigation() {
    return (
        <Navbar sticky='top' className="primary-bg">
            <Nav variant="underline" className="primary-bg">
                <Nav.Item>
                    <NavLink
                        to='/home'
                        className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                    >
                        בית
                    </NavLink>
                </Nav.Item>
                <NavDropdown title={`${RAMAT_HAHAYAL} להשכרה`}>
                    <NavDropdown.Header>משרדים</NavDropdown.Header>
                    <NavDropdown.Item>עד 50</NavDropdown.Item>
                    <NavDropdown.Item>50-100</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Header>קליניקות</NavDropdown.Header>
                    <NavDropdown.Item>עד 50</NavDropdown.Item>
                    <NavDropdown.Item>50-100</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={`${RAMAT_HAHAYAL} למכירה`}>
                    <NavDropdown.Header>משרדים</NavDropdown.Header>
                    <NavDropdown.Item>עד 50</NavDropdown.Item>
                    <NavDropdown.Item>50-100</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Header>קליניקות</NavDropdown.Header>
                    <NavDropdown.Item>עד 50</NavDropdown.Item>
                    <NavDropdown.Item>50-100</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                    <NavLink
                        to='/about'
                        className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                    >
                        אודותינו
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                    >
                        צור קשר
                    </NavLink>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}
