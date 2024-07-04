import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Container, Image, Row } from 'react-bootstrap'

import placeholderSvg from '@assets/placeholder.svg'
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
    const [showSvg, setShowSvg] = useState(true)
    const hadleClick = useCallback(() => {
        navigate('/property/' + id)
    }, [id, navigate])
    const defaultFile = files[0]
    const fileSrc = defaultFile ? `/files/property/${id}/${defaultFile.path}` : ''
    return (
        <Container onClick={hadleClick}>
            <Row>
                <Col className='d-flex justify-content-center'>
                    {showSvg && <Image
                        src={placeholderSvg}
                        height="150px"
                    />}
                    <Image
                        style={{ display: showSvg ? 'none' : 'block' }}
                        src={fileSrc}
                        alt={defaultFile?.name ?? ''}
                        height="150px"
                        onLoad={() => {
                            setShowSvg(false)
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <address className="text-center">
                        {
                            address.street + ' ' + address.city
                        }
                    </address>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-center">{size} מט"ר</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-center">{MathUtils.convertNumberToCurrency(price)} ש"ח</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-center">{description}</p>
                </Col>
            </Row>
        </Container>
    )
}
