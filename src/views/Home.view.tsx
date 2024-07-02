import { useNavigate } from 'react-router-dom'

import { TransactionType } from '@models/enums.model'
import { propertiesService } from '@services/properties.service'
import PropertyCard from 'property_card/PropertyCard'

export default function Home() {
    const propertiesForRent = propertiesService.propertiesForRent.slice(0, 3)
    const propertiesForSale = propertiesService.propertiesForSale.slice(0, 3)
    return (
        <>
            <HomeProperties title="משרדים להשכרה ברמת החייל" properties={propertiesForRent} type={TransactionType.RENT} />
            <HomeProperties title="משרדים למכירה ברמת החייל" properties={propertiesForSale} type={TransactionType.SELL} />
        </>
    )
}

export function HomeProperties({ title, properties, type }: { title: string, properties: PropertyInterface[], type: TransactionType }) {
    const navigate = useNavigate()
    return (
        <div className="container">
            <h3 className="text-center">{title}</h3>
            <div className="container d-flex">
                {properties.map(property =>
                    <PropertyCard key={property.id} {...property} />
                )}
            </div>
            <div className='container d-flex justify-content-center'>
                <button type="button" className="btn btn-dark" onClick={() => navigate(`/properties/${type.toLowerCase()}`)} >
                    הראה לי עוד נכסים
                </button>
            </div>
        </div>
    )

}
