import { Container, Row, Col, Form, Dropdown, InputGroup } from 'react-bootstrap'

import './SearchBar.style.scss'

import { useProperties } from '@hooks'
import { useParams, useSearchParams } from 'react-router-dom';
import { TransactionType } from '@models/enums.model';
import { SEARCH_FIELDS } from '@utils/consts.utils';
import { useCallback } from 'react';

export default function SearchBar() {
    const { transactionType } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const propertySubType = searchParams.get(SEARCH_FIELDS.PROPERTY_SUB_TYPE)
    const { subPropertyTypesForRent, subPropertyTypesForSale } = useProperties()
    const subPropTypes = transactionType === TransactionType.RENT.toLocaleLowerCase() ? subPropertyTypesForRent : subPropertyTypesForSale
    const setParam = useCallback((field: string, value: string) => {
        const containsLetters = /[a-zA-Z]+/.test(value)
        if (!containsLetters && (parseInt(value) ?? -1) > 0) {
            searchParams.set(field, value)
        } else {
            searchParams.delete(field)
        }
        setSearchParams(searchParams)

    }, [searchParams, setSearchParams])
    const maxSize = searchParams.get(SEARCH_FIELDS.MAX_SIZE) ?? ''
    const minSize = searchParams.get(SEARCH_FIELDS.MIN_SIZE) ?? ''
    const maxPrice = searchParams.get(SEARCH_FIELDS.MAX_PRICE) ?? ''
    const minPrice = searchParams.get(SEARCH_FIELDS.MIN_PRICE) ?? ''
    return (
        <Container fluid className='my-4 py-4 primary-bg rounded'>
            <Row className='justify-content-center column-gap-3 row-gap-3'>
                <Col md='auto' className='bg-body rounded p-3'>
                    <Form.Group>
                        <Form.Label>סוג נכס</Form.Label>
                        <Dropdown>
                            <Dropdown.Toggle variant='light'>{propertySubType ?? 'בחר סוג נכס'}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    as="button"
                                    onClick={() => { searchParams.delete(SEARCH_FIELDS.PROPERTY_SUB_TYPE), setSearchParams(searchParams) }}
                                >
                                    נקה
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                {subPropTypes.map(subType =>
                                    <Dropdown.Item
                                        key={subType}
                                        as="button"
                                        active={propertySubType === subType}
                                        onClick={() => {
                                            if (propertySubType !== subType) {
                                                searchParams.set(SEARCH_FIELDS.PROPERTY_SUB_TYPE, subType)
                                                setSearchParams(searchParams)
                                            }
                                        }}
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
                                value={minSize}
                                placeholder="מ-"
                                onChange={(e) => setParam(SEARCH_FIELDS.MIN_SIZE, e.target.value)}
                            />
                            <Form.Control
                                value={maxSize}
                                placeholder="עד-"
                                onChange={(e) => setParam(SEARCH_FIELDS.MAX_SIZE, e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>
                </Col>
                <Col md='auto' className='bg-body rounded p-3'>
                    <Form.Group>
                        <Form.Label>מחיר</Form.Label>
                        <InputGroup>
                            <Form.Control
                                value={minPrice}
                                placeholder="מ-"
                                onChange={(e) => setParam(SEARCH_FIELDS.MIN_PRICE, e.target.value)}
                            />
                            <Form.Control
                                value={maxPrice}
                                placeholder="עד-"
                                onChange={(e) => setParam(SEARCH_FIELDS.MAX_PRICE, e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    )
}