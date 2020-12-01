import React from 'react'
import './Affiliatum.scss'

const Webinar = (props) => {
    const {width} = props;

    const calculateWidth = () => {

        let finalWidth = 0;

        if (width <= 1920) {
            finalWidth = width / 2

        }
        if (width <= 1024 && width <= 768) {
            finalWidth = width / 4

        }
        if (width <= 768 && width >= 425) {
            finalWidth = width / 2
        }
        if (width < 425) {
            finalWidth = width
        }
        return finalWidth;
    }
    return (
        <div className='container-fluid'>
            <div className='webinar'>
            <iframe src="https://player.vimeo.com/video/323502432" width={calculateWidth()} height="360" frameBorder="0" allowFullScreen></iframe>
            </div>
                <div class="cta-holder text-center">
					<p>Activar el Audio del Video 🔈 - Espera una Sorpresa Muy Especial 🎁 al Final de la Presentación</p>
				</div>
        </div>
    )
    }

export default Webinar
