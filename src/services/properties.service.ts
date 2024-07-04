import { Property } from '@models/property.model'

enum TransactionType {
	BUY = "Buy",
	SELL = "Sell",
	RENT = "Rent",
}

class PropertiesService {
    allProperties: Property[] = []
    propertiesForRent: Property[] = []
    propertiesForSale: Property[] = []
    subPropertyTypes: string[] = []
    
    constructor() {
        this.loadProperties()
    }

    async loadProperties() {
        const result = await fetch('api/public/properties')
        const jsonResult:PropertyInterface[] = await result.json()
        const subtypes: Dict = {}
        this.allProperties = jsonResult.map(property => {
            if (!subtypes[property.sub_type]) { 
                subtypes[property.sub_type] = true
            }
            return Property.fromJson(property)
        })
        this.subPropertyTypes = Object.keys(subtypes)
        this.propertiesForSale = this.allProperties.filter(property => property.transaction_type.includes(TransactionType.SELL))
        this.propertiesForRent = this.allProperties.filter(property => property.transaction_type.includes(TransactionType.RENT))
    }
}

export const propertiesService = new PropertiesService()