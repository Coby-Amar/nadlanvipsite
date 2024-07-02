import { useState } from "react";
import { Col, Container, Dropdown, Form, InputGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
``
import { propertiesService } from "@services/properties.service";
import PropertyCard from "property_card/PropertyCard";

export default function Properties() {
    const { transactionType } = useParams();
    const isRent = transactionType === 'rent'
    const properties = isRent ? propertiesService.propertiesForRent : propertiesService.propertiesForSale
    const [form, setForm] = useState({
        propSubType: '',
        size: {
            min: -1,
            max: -1,
        },
        price: {
            min: -1,
            max: -1,
        },
    })
    return (
        <>
            <h2 className="text-center">משרדים {isRent ? 'להשכרה' : 'למכירה'} ברמת החייל</h2>
            <Container fluid>
                <Row className="d-flex justify-content-center">
                    <Col md="auto">
                        <Form.Group>
                            <Form.Label>סוג נכס</Form.Label>
                            <Dropdown>
                                <Dropdown.Toggle>{form.propSubType.length === 0 ? 'בחר סוג נכס' : form.propSubType}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        as="button"
                                        onClick={() => setForm(prev => ({ ...prev, propSubType: '' }))}
                                    >
                                        נקה
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    {propertiesService.subPropertyTypes.map(subType =>
                                        <Dropdown.Item
                                            as="button"
                                            active={form.propSubType === subType}
                                            onClick={() => form.propSubType !== subType && setForm(prev => ({ ...prev, propSubType: subType }))}
                                        >
                                            {subType}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown >
                        </Form.Group>
                    </Col>
                    <Col md="auto">
                        <Form.Group>
                            <Form.Label>גודל דירה במט"ר</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    placeholder="מ-"
                                    onChange={(val) => setForm(prev => ({
                                        ...prev,
                                        size: {
                                            ...prev.size,
                                            min: parseInt(val.target.value) ?? -1,
                                        }
                                    }))}
                                />
                                <Form.Control
                                    placeholder="עד-"
                                    onChange={(val) => setForm(prev => ({
                                        ...prev,
                                        size: {
                                            ...prev.size,
                                            max: parseInt(val.target.value ?? '') ?? -1,
                                        }
                                    }))}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col md="auto">
                        <Form.Group>
                            <Form.Label>מחיר</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    placeholder="מ-"
                                    onChange={(val) => setForm(prev => ({
                                        ...prev,
                                        price: {
                                            ...prev.size,
                                            min: parseInt(val.target.value) ?? -1,
                                        }
                                    }))}
                                />
                                <Form.Control
                                    placeholder="עד-"
                                    onChange={(val) => setForm(prev => ({
                                        ...prev,
                                        price: {
                                            ...prev.size,
                                            max: parseInt(val.target.value ?? '') ?? -1,
                                        }
                                    }))}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    {properties.filter(({ sub_type, price, size }) => {
                        const formPrice = form.price
                        const subType = form.propSubType
                        if (subType.length > 0 && subType !== sub_type) {
                            return false
                        }
                        if (formPrice.min > price || formPrice.max > -1 && formPrice.max < price) {
                            return false
                        }
                        const formSize = form.size
                        if (formSize.min > size || formSize.max > -1 && formSize.max < size) {
                            return false
                        }
                        return true
                    }).map(property =>
                        <Col>
                            <PropertyCard key={property.id} {...property} />
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    )
}
