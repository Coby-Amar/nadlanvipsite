import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'

import { MathUtils } from '@utils/math.utils'

import './PropertyCard.scss'

interface PropertyCardInterface {
    id: string
    address: AddressInterface
    description: string
    files: AppFileInterface[]
    price: number
    size: number
}

export default function PropertyCard({ id, address, description, files, price, size }: PropertyCardInterface) {
    const navigate = useNavigate()
    const hadleClick = useCallback(() => {
        navigate('/property/' + id)
    }, [id, navigate])
    return (
        <Container onClick={hadleClick}>
            <Image src={files[0]?.path ?? ''} />
            <address className="text-center">
                {
                    address.street + ' ' + address.city
                }
            </address>
            <p className="text-center">{size} מט"ר</p>
            <p className="text-center">{MathUtils.convertNumberToCurrency(price)} ש"ח</p>
            <p className="text-center">{description}</p>
        </Container>
    )
}
