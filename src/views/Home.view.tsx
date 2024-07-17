import { useNavigate } from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap'

import { TransactionType } from '@models/enums.model'
import { PropertyCard } from '@components'
import { FOR_RENT, FOR_SALE, RAMAT_HAHAYAL } from '@utils/consts.utils'
import { useProperties } from '@hooks'

export default function Home() {
    const { propertiesForRent, propertiesForSale } = useProperties()
    const filteredPropertiesForRent = propertiesForRent.slice(0, 4)
    const filteredPropertiesForSale = propertiesForSale.slice(0, 4)
    return (
        <>
            <HomeProperties title={`${RAMAT_HAHAYAL} ${FOR_RENT}`} properties={filteredPropertiesForRent} type={TransactionType.RENT} />
            <HomeProperties title={`${RAMAT_HAHAYAL} ${FOR_SALE}`} properties={filteredPropertiesForSale} type={TransactionType.SELL} />
        </>
    )
}

export function HomeProperties({ title, properties, type }: { title: string, properties: PropertyInterface[], type: TransactionType }) {
    const navigate = useNavigate()
    return (
        <Container>
            <h3 className="text-center my-4">{title}</h3>
            <Container fluid>
                <Row>
                    {properties.length > 0 ? properties.map(property =>
                        <Col sm={3} key={property.id}>
                            <PropertyCard {...property} />
                        </Col>
                    ) : 'אין נכסים למכירה אם תמונות'}
                </Row>
            </Container>
            <Container className='d-flex justify-content-center'>
                <Button className="primary-bg my-4" onClick={() => navigate(`/properties/${type.toLowerCase()}`)} >
                    הראה לי עוד נכסים
                </Button>
            </Container>
        </Container>
    )

}
