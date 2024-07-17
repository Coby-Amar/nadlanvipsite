import { Address } from "./address.model";
import { PropertyType } from "./enums.model";

export class AppFile implements AppFileInterface{
    name: string;
    path: string;
    type: AppFileTypes;
    constructor(
        name = '',
        path = '',
        type = AppFileTypes.JPEG,
        ) {
            this.name = name
            this.path = path
            this.type = type
    }
    

}
export class Property implements PropertyInterface {
    id: string
    files: AppFile[]
    transaction_types: TransactionType[]
    address: AddressInterface
    type: PropertyType
    sub_types: string[]
    size: number
    price: number
	floor: number
	number_of_floors: number
    description: string
    constructor(
        id = '',
        files: AppFile[] = [],
        transaction_type:TransactionType[] = [],
        address = new Address(),
        type = PropertyType.COMMERCIAL,
        sub_type: string[] = [],
        size = 0,
        price = 0,
        description = '',
        floor = 0,
        number_of_floors = 0,
    ) {
        this.id = id
        this.files = files
        this.transaction_types = transaction_type
        this.address = address
        this.type = type
        this.sub_types = sub_type
        this.size = size
        this.price = price
        this.description = description
        this.floor = floor
        this.number_of_floors = number_of_floors
    }
    static fromJson(property: PropertyInterface) {
        return new Property(
            property.id,
            property.files,
            property.transaction_types,
            property.address,
            property.type,
            property.sub_types,
            property.size,
            property.price,
            property.description,
            property.floor,
            property.number_of_floors,
        )
    }

}