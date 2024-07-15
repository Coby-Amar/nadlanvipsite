import { useParams } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";

import failedToLoadImageAlt from '@assets/failedToLoadImageAlt.png'
import { propertiesService } from "@services/properties.service";

export default function Property() {
    const { allProperties } = propertiesService
    const { id } = useParams();
    const property = allProperties.find(property => property.id === id)
    return (
        <>
            <Carousel data-bs-theme="dark" className="border rounded" style={{ maxHeight: '50vh' }}>
                {property?.files.map(({ name = '', path = '' }) =>
                    <Carousel.Item>
                        <Image
                            src={`/files/property/${property.id}/${path}`}
                            alt={name}
                        />
                    </Carousel.Item>
                )
                }
                <Carousel.Item>
                    <Image
                        src={failedToLoadImageAlt}
                        style={{ maxHeight: '50vh' }}
                        className="d-block object-fit-contain"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src={failedToLoadImageAlt}
                        style={{ maxHeight: '50vh' }}
                        className="d-block object-fit-contain"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src={failedToLoadImageAlt}
                        style={{ maxHeight: '50vh' }}
                        className="d-block vh-50 object-fit-contain"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}
