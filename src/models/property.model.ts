import { Address } from "./address.model";


export class Property implements PropertyInterface {
    id: string;
    files: AppFileInterface[];
    transaction_type: TransactionType[];
    address: AddressInterface;
    type: PropertyType;
    sub_type: string;
    size: number;
    price: number;
    description: string;
    constructor(
        id = '',
        files: AppFileInterface[] = [],
        transaction_type:TransactionType[] = [],
        address = new Address(),
        type = PropertyType.COMMERCIAL,
        sub_type = '',
        size = 0,
        price = 0,
        description = '',
    ) {
        this.id = id
        this.files = files
        this.transaction_type = transaction_type
        this.address = address
        this.type = type
        this.sub_type = sub_type
        this.size = size
        this.price = price
        this.description = description
    }
    static fromJson(property: PropertyInterface) {
        return new Property(
            property.id,
            property.files,
            property.transaction_type,
            property.address,
            property.type,
            property.sub_type,
            property.size,
            property.price,
            property.description,
        )
    }

}