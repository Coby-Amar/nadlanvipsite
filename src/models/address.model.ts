export class Address implements AddressInterface {
    street: string
    neighborhood: string | null
    city: string
    state: string
    zip_code: number | null
    constructor(
        street = '',
        neighborhood = null,
        city = '',
        state = '',
        zip_code = null
    ) {
        this.street = street          
        this.neighborhood = neighborhood  
        this.city = city          
        this.state = state          
        this.zip_code = zip_code  
    }
}