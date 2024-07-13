import { TransactionType } from '@models/enums.model'
import { Property } from '@models/property.model'

class PropertiesService {
    allProperties: Property[] = []
    subPropertyTypesForRent: string[] = []
    subPropertyTypesForSale: string[] = []
    propertiesForRent: Property[] = []
    propertiesForSale: Property[] = []
    
    async fetchProperties(): Promise<Property[]> {
        const result = await fetch('https://nadlanvip.com/api/public/properties',{mode: 'cors'})
        const jsonResult:PropertyInterface[] = await result.json()
        return jsonResult.map(Property.fromJson)
    }


    async loadProperties() {
        const result = await fetch('https://nadlanvip.com/api/public/properties',{mode: 'cors'})
        const jsonResult:PropertyInterface[] = await result.json()
        this.allProperties = jsonResult.map(Property.fromJson)
        this.propertiesForRent = propertiesService.allProperties.filter(property => property.transaction_type.includes(TransactionType.SELL))
        this.propertiesForSale = propertiesService.allProperties.filter(property => property.transaction_type.includes(TransactionType.RENT))
        this.subPropertyTypesForRent = this.propertiesForRent.flatMap(property => property.sub_type)
        this.subPropertyTypesForRent = [...new Set(this.subPropertyTypesForRent)]
        this.subPropertyTypesForSale = this.propertiesForSale.flatMap(property => property.sub_type)
        this.subPropertyTypesForSale = [...new Set(this.subPropertyTypesForSale)]
    }
}

export const propertiesService = new PropertiesService()