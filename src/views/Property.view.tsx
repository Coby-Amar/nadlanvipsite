import { propertiesService } from "@services/properties.service";
import { useParams } from "react-router-dom";

export default function Property() {
    const { id } = useParams();
    const property = propertiesService.allProperties.find(property => property.id === id)
    return (
        <>
            {property?.address.street}
        </>
    )
}
