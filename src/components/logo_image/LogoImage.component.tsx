import { Card } from 'react-bootstrap'

import failedToLoadImageAlt from '@assets/failedToLoadImageAlt.png'

import './LogoImage.style.scss'

export function LogoImage() {
    return (
        <Card.Img
            variant="top"
            className='Card_Img_logo_image'
            src={failedToLoadImageAlt}
        />
    )
}
