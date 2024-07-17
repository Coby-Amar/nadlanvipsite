declare type Dict = {[key: string]: unknown}

declare enum PropertyType {
	COMMERCIAL = 'Commercial', 
	RESIDENTIAL = 'Residential', 
	INDUSTRIAL = 'Industrial', 
	OTHERS = 'Others',
}

declare interface AddressInterface {
	street: string
	neighborhood: string | null
	city: string
	state: string
	zip_code: number | null
}

declare enum AppFileTypes {
	PNG = "image/png",
    JPEG = "image/jpeg",
    PDF = "application/pdf",
	UNKNOWN = 'Not Supported'
}

declare enum TransactionType {
	BUY = "Buy",
	SELL = "Sell",
	RENT = "Rent",
}

declare interface AppFileInterface {
	name: string
	path: string 
	type: AppFileTypes
}

declare interface PropertyInterface {
	id: string
	files: AppFileInterface[]
	transaction_types: TransactionType[]
	address: AddressInterface
	type: PropertyType
	sub_types: string[]
	size: number
	price: number
	price_per_size: number
	floor: number
	number_of_floors: number
	description: string
}