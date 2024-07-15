import { Property } from '@models/property.model'

class PropertiesService {
    
    async fetchProperties(): Promise<Property[]> {
        const result = await fetch('/public/properties')
        const jsonResult:PropertyInterface[] = await result.json()
        return jsonResult.map(Property.fromJson)
    }
}

export const propertiesService = new PropertiesService()