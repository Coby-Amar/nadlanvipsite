import { Property } from '@models/property.model'
import {v4 as uuid} from 'uuid'
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

    // constructor() {
    //     this.__init()
    // }

    async loadProperties() {
        const result = await fetch('https://app.nadlanvip.com/api/public/properties', {
            mode: 'cors',
        })
        const jsonResult:PropertyInterface[] = await result.json()
        const subtypes: Dict = {}
        this.allProperties = jsonResult.map(property => {
            if (!subtypes[property.sub_type]) {
                subtypes[property.sub_type] = true
            }
            return Property.fromJson({...property, id: uuid()})
        })
        this.subPropertyTypes = Object.keys(subtypes)
        this.propertiesForSale = this.allProperties.filter(property => property.transaction_type.includes(TransactionType.SELL))
        this.propertiesForRent = this.allProperties.filter(property => property.transaction_type.includes(TransactionType.RENT))
    }
    
    private async __init()  {
        const result = await fetch('https://app.nadlanvip.com/api/public/properties', {
            mode: 'cors',
        })
        const jsonResult:PropertyInterface[] = await result.json()
        const subtypes: Dict = {}
        this.allProperties = jsonResult.map(property => {
            if (!subtypes[property.sub_type]) {
                subtypes[property.sub_type] = true
            }
            return Property.fromJson({...property, id: uuid()})
        })
        this.subPropertyTypes = Object.keys(subtypes)
        this.propertiesForSale = this.allProperties.filter(property => property.transaction_type.includes(TransactionType.SELL))
        this.propertiesForRent = this.allProperties.filter(property => property.transaction_type.includes(TransactionType.RENT))
    }
}

export const propertiesService = new PropertiesService()