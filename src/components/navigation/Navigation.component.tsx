import { NavLink, useNavigate } from 'react-router-dom'
import { Accordion, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import './Navigation.style.scss'
import { FOR_RENT, FOR_SALE, RAMAT_HAHAYAL } from '@utils/consts.utils';
import { useProperties } from '@hooks';

const sizes = [
    {
        max: 50,
        text: 'עד- 50'
    },
    {
        max: 100,
        min: 50,
        text: '50 - 100'
    },
    {
        max: 200,
        min: 100,
        text: '100 - 200'
    },
    {
        max: 500,
        min: 200,
        text: '200 - 500'
    },
    {
        min: 500,
        text: 'מ- 500'
    },
]

export default function Navigation() {
    const { subPropertyTypesForRent, subPropertyTypesForSale } = useProperties()
    const navigate = useNavigate()
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
                <NavDropdown title={`${RAMAT_HAHAYAL} ${FOR_RENT}`}>
                    <Accordion>
                        {subPropertyTypesForRent.map((val, index) =>
                            <Accordion.Item eventKey={'' + index} key={val + index} className='border-0'>
                                <Accordion.Header>
                                    <NavDropdown.Header className='text-dark fs-5'>{val}</NavDropdown.Header>
                                </Accordion.Header>
                                <Accordion.Body>
                                    {sizes.map(({ min, max, text }) =>
                                        <>
                                            <NavDropdown.Item
                                                onClick={() => navigate(`/properties/rent?${max ? 'max_size=' + max : ''}${min ? '&min_size=' + min : ''}&property_sub_type=${val}`)}
                                            >
                                                {text} מ”ר
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                        </>
                                    )}
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Accordion>
                </NavDropdown>
                <NavDropdown title={`${RAMAT_HAHAYAL} ${FOR_SALE}`}>
                    <Accordion>
                        {subPropertyTypesForSale.map((val, index) =>
                            <Accordion.Item eventKey={'' + index} key={val + index} className='border-0'>
                                <Accordion.Header>
                                    <NavDropdown.Header className='text-dark fs-5'>{val}</NavDropdown.Header>
                                </Accordion.Header>
                                <Accordion.Body>
                                    {sizes.map(({ min, max, text }) =>
                                        <>
                                            <NavDropdown.Item
                                                onClick={() => navigate(`/properties/rent?${max ? 'max_size=' + max : ''}${min ? '&min_size=' + min : ''}&property_sub_type=${val}`)}
                                            >
                                                {text} מ”ר
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                        </>
                                    )}
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Accordion>
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
        </Navbar >
    )
}
