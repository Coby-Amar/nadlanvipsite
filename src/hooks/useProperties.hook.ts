import { useEffect, useState } from 'react'
import { propertiesService } from '@services/properties.service'
import { TransactionType } from '@models/enums.model'

interface InitStateInterface {
    allProperties: PropertyInterface[]
    propertiesForRent: PropertyInterface[]
    propertiesForSale: PropertyInterface[]
    subPropertyTypesForRent: string[]
    subPropertyTypesForSale: string[]

}

const initState: InitStateInterface  = {
    allProperties: [],
    propertiesForRent: [],
    propertiesForSale: [],
    subPropertyTypesForRent: [],
    subPropertyTypesForSale: [],
}

export function useProperties(){
    const [properties, setProperties] = useState(initState)
    
    useEffect(() => {
        if (propertiesService.allProperties.length < 1) {
            propertiesService.fetchProperties().then((properties) => {
                const propertiesForRent = properties.filter(property => property.transaction_type.includes(TransactionType.RENT))
                const propertiesForSale = properties.filter(property => property.transaction_type.includes(TransactionType.SELL))
                const subPropertyTypesForRent = [...new Set(propertiesForRent.flatMap(property => property.sub_type))]
                const subPropertyTypesForSale = [...new Set(propertiesForSale.flatMap(property => property.sub_type))]
                setProperties({
                allProperties: properties,
                propertiesForRent,
                propertiesForSale,
                subPropertyTypesForRent,
                subPropertyTypesForSale,
            })
        })
        }
    }, [])
    return properties
}