import { useMemo, useState } from 'react'
import { propertiesService } from '@services/properties.service'



export function useProperties(){
    const [properties, setProperties] = useState({
        allProperties: propertiesService.allProperties,
        propertiesForRent: propertiesService.propertiesForRent,
        propertiesForSale: propertiesService.propertiesForSale,
        subPropertyTypesForRent: propertiesService.subPropertyTypesForRent,
        subPropertyTypesForSale: propertiesService.subPropertyTypesForSale,    
    })
    useMemo(async () => {
        if (propertiesService.allProperties.length < 1) {
            await propertiesService.loadProperties()
            setProperties({
                allProperties: propertiesService.allProperties,
                propertiesForRent: propertiesService.propertiesForRent,
                propertiesForSale: propertiesService.propertiesForSale,
                subPropertyTypesForRent: propertiesService.subPropertyTypesForRent,
                subPropertyTypesForSale: propertiesService.subPropertyTypesForSale,  
            })
        }
    }, [])
    return properties
}