import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { APIProvider, useMapsLibrary } from "@vis.gl/react-google-maps";

import { useProperties } from "@hooks";
import { LogoImage } from "@components/logo_image/LogoImage.component";

export default function Property() {
    const { allProperties } = useProperties()
    const { id } = useParams();
    const [property, setProperty] = useState(allProperties.find(property => property.id === id))
    useEffect(() => {
        if (!property) {
            setProperty(allProperties.find(property => property.id === id))
        }
    }, [allProperties, id, property])
    if (!property) {
        return <></>
    }
    const {
        address,
        price,
        size,
        description,
        floor,
        number_of_floors,
        sub_types,
        price_per_size,
        files,
    } = property
    return (
        <>
            <Carousel data-bs-theme="dark" interval={1000 * 2}>
                {files.length > 0 ?
                    files.map(({ name = '', path = '' }) =>
                        <Carousel.Item key={path} >
                            <Image
                                className="mh-img object-fit-contain"
                                src={`${import.meta.env.VITE_BASE_URL}/files/property/${id}/${path}`}
                                alt={name}
                            />
                        </Carousel.Item>
                    )
                    : <Carousel.Item>
                        <LogoImage />
                    </Carousel.Item>
                }
            </Carousel>
            <Container className="propertyDetails">
                <Row>
                    <Col>
                        <Container>
                            <dl>
                                <dd className="fw-semibold pstreet fs-3">{address.street}</dd>
                                <dd>{sub_types.join()} {address.city}</dd>
                                <dd>{size} מ"ר</dd>
                                <dd>{price} <span className="pps">(ש"ח לפי מ"ר {price_per_size})</span></dd>
                                {(number_of_floors ?? false) && (floor ?? false) ? <dd>{number_of_floors}/{floor} קומה</dd> : null}
                            </dl>
                            <hr></hr>
                            <p>{description}</p>

                        </Container>
                    </Col>
                    <Col md={5}>
                        <APIProvider apiKey={import.meta.env.VITE_GME_AK}>
                            <GoogleMap address={address} />
                        </APIProvider>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

function GoogleMap({ address: { lat, lng } }: { address: AddressInterface }) {
    const mapsLibrary = useMapsLibrary('maps');
    useEffect(() => {
        if (!mapsLibrary) return
        console.log('map')
        const map = new google.maps.Map(
            document.getElementById("property_map") as HTMLElement,
            {
                zoom: 18,
                center: {
                    lat,
                    lng
                },
                disableDefaultUI: true,
                gestureHandling: 'none',
                clickableIcons: false,
            }
        );
        new mapsLibrary.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.5,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.10,
            center: {
                lat,
                lng
            },
            radius: 70,
            map,
            clickable: false
        })
    }, [lat, lng, mapsLibrary])

    return (
        <div
            id="property_map"
            style={{ height: '50vh' }}
        />
    )

}