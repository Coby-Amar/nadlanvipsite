import { useEffect, useState } from 'react'
import { propertiesService } from '@services/properties.service'

export function useProperties(){
    const [, setProperties] = useState<PropertyInterface[]>([])
    useEffect(() => {
        if (propertiesService.allProperties.length < 1) {
            propertiesService.loadProperties().then(() => setProperties(propertiesService.allProperties))
        }
    }, [])
    return {
        allProperties: propertiesService.allProperties,
        propertiesForRent: propertiesService.propertiesForRent,
        propertiesForSale: propertiesService.propertiesForSale,
        subPropertyTypes: propertiesService.subPropertyTypes,
    }
}