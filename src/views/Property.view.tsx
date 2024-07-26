import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { APIProvider, useMapsLibrary } from "@vis.gl/react-google-maps";

// import failedToLoadImageAlt from '@assets/failedToLoadImageAlt.png'
import { useProperties } from "@hooks";

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
            <Carousel data-bs-theme="dark">
                {files.map(({ name = '', path = '' }) =>
                    <Carousel.Item key={path} >
                        <Image
                            className="mh-img object-fit-contain"
                            src={`${import.meta.env.VITE_BASE_URL}/files/property/${id}/${path}`}
                            alt={name}
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
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
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
            style={{ width: '50vw', height: '50vh' }}
        />
    )

}