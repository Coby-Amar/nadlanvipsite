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
        const result = await fetch(`${import.meta.env.VITE_BASE_URL}/api/public/properties`, {mode: import.meta.env.VITE_CORS})
        const jsonResult:string[] = await result.json()
        
        const properties = jsonResult.map(propString => Property.fromJson(JSON.parse(atob(propString))))
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