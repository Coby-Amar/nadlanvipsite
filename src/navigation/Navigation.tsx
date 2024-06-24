import { NavLink } from 'react-router-dom'
import { Nav, Dropdown, NavItem, NavLink as BNavLink } from 'react-bootstrap';

import './Navigation.scss'

export default function Navigation() {
    return (
        <nav>
            <Nav variant="pills" >
                <Nav.Item>
                    <NavLink
                        to='/home'
                        className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                    >
                        בית
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink
                        to='/about'
                        className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                    >
                        אודות
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
                <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={BNavLink}>להזקאה</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Hello there!</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </nav >
    )
}
