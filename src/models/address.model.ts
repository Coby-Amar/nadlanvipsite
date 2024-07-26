export class Address implements AddressInterface {
    street_number: number
    street: string
    neighborhood: string
    city: string
    state: string
    zip_code: number
	lat: number
	lng: number
    constructor(
        street_number = -1,
        street = '',
        neighborhood = '',
        city = '',
        state = '',
        zip_code = -1,
        lat = -1,
        lng = -1,
    ) {
        this.street_number = street_number          
        this.street = street          
        this.neighborhood = neighborhood  
        this.city = city          
        this.state = state          
        this.zip_code = zip_code  
        this.lat = +lat
        this.lng = +lng
    }
    static fromJson(address: AddressInterface) {
        return new Address(
            address.street_number,
            address.street,      
            address.neighborhood,  
            address.city,          
            address.state,          
            address.zip_code,
            address.lat,
            address.lng,
        )
    }
	get toDisplay() {
		const { street, street_number, neighborhood, city, state, zip_code } = this
		return `${street} ${street_number}${neighborhood ? `, ${neighborhood}` : ''}\n ${city}\n ${state}${zip_code ? `, ${zip_code}` : ''}`
	}
}