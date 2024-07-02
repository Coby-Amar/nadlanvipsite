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
                <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={BNavLink}>רמת החייל להשכרה</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Header>משרדים</Dropdown.Header>
                        <Dropdown.Item>עד 50</Dropdown.Item>
                        <Dropdown.Item>50-100</Dropdown.Item>
                        <Dropdown.Header>קליניקות</Dropdown.Header>
                        <Dropdown.Item>עד 50</Dropdown.Item>
                        <Dropdown.Item>50-100</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={BNavLink}>רמת החייל למכירה</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Header>משרדים</Dropdown.Header>
                        <Dropdown.Item>עד 50</Dropdown.Item>
                        <Dropdown.Item>50-100</Dropdown.Item>
                        <Dropdown.Header>קליניקות</Dropdown.Header>
                        <Dropdown.Item>עד 50</Dropdown.Item>
                        <Dropdown.Item>50-100</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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
        </nav >
    )
}
