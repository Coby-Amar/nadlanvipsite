import { Image } from 'react-bootstrap'

import banner from '@assets/banner.jpg'
import bannerLogo from '@assets/bannerLogo.png'

import './Banner.style.scss'

export default function Banner() {
    return (

        <header className='bg-body-tertiary banner' style={{ backgroundImage: `url(${banner})` }}>
            <Image
                roundedCircle
                className='bannerLogo'
                src={bannerLogo}
            />
        </header>
    )
}
