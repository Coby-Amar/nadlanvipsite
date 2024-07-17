import { Col, Container, Row } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router-dom";

import { PropertyCard, SearchBar } from '@components'

import { useProperties } from "@hooks";
import { TransactionType } from "@models/enums.model";
import { FOR_RENT, FOR_SALE, RAMAT_HAHAYAL, SEARCH_FIELDS } from "@utils/consts.utils";
import { useCallback } from "react";

export default function Properties() {
    const { propertiesForRent, propertiesForSale } = useProperties()
    const { transactionType } = useParams();
    const isRent = transactionType === TransactionType.RENT.toLowerCase()
    const properties = isRent ? propertiesForRent : propertiesForSale
    const [searchParams] = useSearchParams();
    const propertySubType = searchParams.get(SEARCH_FIELDS.PROPERTY_SUB_TYPE)
    const maxPrice = parseInt(searchParams.get(SEARCH_FIELDS.MAX_PRICE) ?? '')
    const minPrice = parseInt(searchParams.get(SEARCH_FIELDS.MIN_PRICE) ?? '')
    const maxSize = parseInt(searchParams.get(SEARCH_FIELDS.MAX_SIZE) ?? '')
    const minSize = parseInt(searchParams.get(SEARCH_FIELDS.MIN_SIZE) ?? '')
    const searchFilterProperties = useCallback(({ sub_types, price, size }: PropertyInterface) => {
        if (propertySubType && !sub_types.includes(propertySubType)) {
            return false
        }
        if (minPrice > price || maxPrice > -1 && maxPrice < price) {
            return false
        }
        if (minSize > size || maxSize < size) {
            return false
        }
        return true
    }, [maxPrice, maxSize, minPrice, minSize, propertySubType])
    return (
        <>
            <h2 className="text-center my-4">{RAMAT_HAHAYAL} {isRent ? FOR_RENT : FOR_SALE}</h2>
            <h4 className="text-center my-4">
                {propertySubType && <span className="px-1">{propertySubType}</span>}
                {maxSize ? <span className="px-1">{maxSize}</span> : null}
                {minSize && maxSize ? <span className="px-1">-</span> : null}
                {minSize ? <span className="px-1">{minSize}</span> : null}
                {minSize || maxSize ? <span className="px-1">מט”ר</span> : null}
                {maxPrice ? <span className="px-1">{maxPrice}</span> : null}
                {minPrice && maxPrice ? <span className="px-1">-</span> : null}
                {minPrice ? <span className="px-1">{minPrice}</span> : null}
                {minPrice || maxPrice ? <span className="px-1">ש"ח</span> : null}
            </h4>
            <Container fluid className="row-gap-3 mb-4">
                <SearchBar />
                <Row xs={1} sm={2} md={3} lg={5} className="row-gap-3">
                    {properties.filter(searchFilterProperties).map(property =>
                        <Col key={property.id} >
                            <PropertyCard {...property} />
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    )
}
