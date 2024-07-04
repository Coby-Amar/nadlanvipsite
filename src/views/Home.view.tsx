import { useNavigate } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

import { TransactionType } from '@models/enums.model'
import PropertyCard from 'property_card/PropertyCard'
import { useProperties } from 'hooks/useProperties.hook'

export default function Home() {
    const { propertiesForRent, propertiesForSale } = useProperties()
    const filteredPropertiesForRent = propertiesForRent.filter(property => property.files.length > 0).slice(0, 3)
    const filteredPropertiesForSale = propertiesForSale.filter(property => property.files.length > 0).slice(0, 3)
    return (
        <>
            <HomeProperties title="משרדים להשכרה ברמת החייל" properties={filteredPropertiesForRent} type={TransactionType.RENT} />
            <HomeProperties title="משרדים למכירה ברמת החייל" properties={filteredPropertiesForSale} type={TransactionType.SELL} />
        </>
    )
}

export function HomeProperties({ title, properties, type }: { title: string, properties: PropertyInterface[], type: TransactionType }) {
    const navigate = useNavigate()
    return (
        <Container>
            <h3 className="text-center">{title}</h3>
            <Container className="d-flex">
                {properties.length > 0 ? properties.map(property =>
                    <PropertyCard key={property.id} {...property} />
                ) : 'אין נכסים למכירה אם תמונות'}
            </Container>
            <Container className='d-flex justify-content-center'>
                <Button type="button" className="btn btn-dark" onClick={() => navigate(`/properties/${type.toLowerCase()}`)} >
                    הראה לי עוד נכסים
                </Button>
            </Container>
        </Container>
    )

}
