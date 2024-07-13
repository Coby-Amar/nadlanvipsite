import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { PropertyCard, SearchBar } from '@components'

import { useSearchForm } from "@hooks";
import { TransactionType } from "@models/enums.model";
import { propertiesService } from "@services/properties.service";
import { FOR_RENT, FOR_SALE, RAMAT_HAHAYAL } from "@utils/consts.utils";

export default function Properties() {
    const { propertiesForRent, propertiesForSale } = propertiesService
    const { searchFilterProperties } = useSearchForm();
    const { transactionType } = useParams();
    const isRent = transactionType === TransactionType.RENT
    const properties = isRent ? propertiesForRent : propertiesForSale
    return (
        <>
            <h2 className="text-center my-4">משרדים {isRent ? FOR_RENT : FOR_SALE} ב{RAMAT_HAHAYAL}</h2>
            <Container fluid className="row-gap-3 mb-4">
                <SearchBar />
                <Row xs={1} sm={2} md={3} lg={5} className="row-gap-3">
                    {properties.filter(searchFilterProperties).map(property =>
                        <Col key={property.id} >
                            <PropertyCard{...property} />
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    )
}
