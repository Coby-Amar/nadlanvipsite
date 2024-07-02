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
	transaction_type: TransactionType[]
	address: AddressInterface
	type: PropertyType
	sub_type: string
	size: number
	price: number
	description: string
}