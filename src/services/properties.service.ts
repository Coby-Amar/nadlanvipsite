import { Property } from '@models/property.model'
import { TransactionType } from '@models/enums.model'

// import demoData from './demo.json'
class PropertiesService {
    allProperties: Property[] = []
    propertiesForRent: Property[] = []
    propertiesForSale: Property[] = []
    subPropertyTypesForRent:string[] = []
    subPropertyTypesForSale:string[] = []
    
    async loadProperties(): Promise<void> {
        const result = await fetch('/api/public/properties')
        const jsonResult:PropertyInterface[] = await result.json()
        const properties = jsonResult.map(Property.fromJson)
        const propertiesForRent = properties.filter(property => property.transaction_types.includes(TransactionType.RENT))
        const propertiesForSale = properties.filter(property => property.transaction_types.includes(TransactionType.SELL))
        this.allProperties = properties
        this.propertiesForRent = propertiesForRent
        this.propertiesForSale = propertiesForSale
        this.subPropertyTypesForRent = [...new Set(propertiesForRent.flatMap(property => property.sub_types))]
        this.subPropertyTypesForSale = [...new Set(propertiesForSale.flatMap(property => property.sub_types))]
    }
}

export const propertiesService = new PropertiesService()