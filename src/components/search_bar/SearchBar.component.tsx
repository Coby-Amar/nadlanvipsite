import { Container, Row, Col, Form, Dropdown, InputGroup } from 'react-bootstrap'

import './SearchBar.style.scss'

import { useProperties, useSearchForm } from '@hooks'
import { useParams } from 'react-router-dom';
import { TransactionType } from '@models/enums.model';

export default function SearchBar() {
    const { transactionType } = useParams();
    const { subPropertyTypesForRent, subPropertyTypesForSale } = useProperties()
    const subPropTypes = transactionType === TransactionType.RENT ? subPropertyTypesForRent : subPropertyTypesForSale
    const {
        propSubType,
        setPropSubType,
        setMinSize,
        setMaxSize,
        setMinPrice,
        setMaxPrice,
    } = useSearchForm()
    return (
        <Container fluid className='my-4 py-4 primary-bg rounded'>
            <Row className='justify-content-center column-gap-3 row-gap-3'>
                <Col md='auto' className='bg-body rounded p-3'>
                    <Form.Group>
                        <Form.Label>סוג נכס</Form.Label>
                        <Dropdown >
                            <Dropdown.Toggle variant='light'>{propSubType.length === 0 ? 'בחר סוג נכס' : propSubType}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    as="button"
                                    onClick={() => setPropSubType('')}
                                >
                                    נקה
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                {subPropTypes.map(subType =>
                                    <Dropdown.Item
                                        key={subType}
                                        as="button"
                                        active={propSubType === subType}
                                        onClick={() => propSubType !== subType && setPropSubType(subType)}
                                    >
                                        {subType}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown >
                    </Form.Group>
                </Col>
                <Col md='auto' className='bg-body rounded p-3'>
                    <Form.Group>
                        <Form.Label>גודל דירה במט"ר</Form.Label>
                        <InputGroup>
                            <Form.Control
                                placeholder="מ-"
                                onChange={(val) => setMinSize(parseInt(val.target.value) ?? -1)}
                            />
                            <Form.Control
                                placeholder="עד-"
                                onChange={(val) => setMaxSize(parseInt(val.target.value ?? '') ?? -1)}
                            />
                        </InputGroup>
                    </Form.Group>
                </Col>
                <Col md='auto' className='bg-body rounded p-3'>
                    <Form.Group>
                        <Form.Label>מחיר</Form.Label>
                        <InputGroup>
                            <Form.Control
                                placeholder="מ-"
                                onChange={(val) => setMinPrice(parseInt(val.target.value) ?? -1)}
                            />
                            <Form.Control
                                placeholder="עד-"
                                onChange={(val) => setMaxPrice(parseInt(val.target.value ?? '') ?? -1)}
                            />
                        </InputGroup>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    )
}