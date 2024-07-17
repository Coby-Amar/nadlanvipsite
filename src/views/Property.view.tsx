import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";

import failedToLoadImageAlt from '@assets/failedToLoadImageAlt.png'
import { useProperties } from "@hooks";
import { Property as PropertyModel } from "@models/property.model";

export default function Property() {
    const { allProperties } = useProperties()
    const { id } = useParams();
    const navigate = useNavigate();
    const property = allProperties.find(property => property.id === id)
    const [files, setFiles] = useState(property?.files.map(file => ({ ...file, showSvg: true })) ?? [])
    useEffect(() => {
        if (!property) {
            navigate('/home')
        }
    }, [navigate, property])
    const {
        address,
        price,
        size,
        description,
        floor,
        number_of_floors,
        sub_types,
        price_per_size,
    } = property ?? new PropertyModel()
    return (
        <>
            <Carousel data-bs-theme="dark">
                {files.map(({ name = '', path = '', showSvg }, index) =>
                    <Carousel.Item >
                        {showSvg && <Image
                            className="mh-img object-fit-contain"
                            src={failedToLoadImageAlt}
                        />}
                        <Image
                            className="mh-img object-fit-contain"
                            src={`https://nadlanvip.com/files/property/${id}/${path}`}
                            alt={name}
                            onLoad={() => {
                                files[index].showSvg = false
                                setFiles([...files])
                            }}
                        />
                    </Carousel.Item>
                )
                }
            </Carousel>
            <Container>
                <Row>
                    <Col>
                        <Container>
                            <dl>
                                <dd className="fw-semibold">{address.street}</dd>
                                <dd>{sub_types.join()} {address.city}</dd>
                                <dd>{size} מט"ר</dd>
                                <dd>{price} ש"ח לפי מט"ר {price_per_size}</dd>
                                {(number_of_floors ?? false) && (floor ?? false) ? <dd>{number_of_floors}/{floor} קומה</dd> : null}
                            </dl>
                            <p>{description}</p>

                        </Container>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
