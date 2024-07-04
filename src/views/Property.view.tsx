import { useProperties } from "hooks/useProperties.hook";
import { useParams } from "react-router-dom";

export default function Property() {
    const { allProperties } = useProperties()
    const { id } = useParams();
    const property = allProperties.find(property => property.id === id)
    return (
        <>
            {property?.address.street}
        </>
    )
}
