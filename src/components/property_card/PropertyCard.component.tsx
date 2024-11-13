import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import { LogoImage } from '@components/logo_image/LogoImage.component'
import { MathUtils } from '@utils/math.utils'

import './PropertyCard.style.scss'

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
    const fileSrc = defaultFile ? `${import.meta.env.VITE_BASE_URL}/files/property/${id}/${defaultFile.path}` : ''
    return (
        <Card onClick={hadleClick} className='hover-shadow'>
            {showSvg && <LogoImage />}
            <Card.Img
                variant="top"
                src={fileSrc}
                alt={defaultFile?.name ?? ''}
                onLoad={() => {
                    setShowSvg(false)
                }}
            />
            <Card.Body>
                <Card.Title>
                    <address className="text-center">
                        {
                            address.street + ' ' + address.city
                        }
                    </address>

                </Card.Title>
                <Card.Text className="text-center">
                    גודל: {size} מט"ר
                </Card.Text>
                <Card.Text className="text-center">
                    מחיר: {MathUtils.convertNumberToCurrency(price)} ש"ח
                </Card.Text>
                <Card.Text className="text-center text-truncate">
                    {description}
                </Card.Text>
            </Card.Body>
        </Card >
    )
}
