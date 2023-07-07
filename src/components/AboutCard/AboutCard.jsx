import { useState } from 'react'
import './AboutCard.scss'
import { FiArrowRight } from 'react-icons/fi'

const AboutCard = ({
    h1Value,
    pValue,
    icon
}) => {
    const [hover, setHover] = useState(false)
    return (
        <div className='aboutCard'>
            {icon}
            <h1 className='aboutCardH1'>{h1Value}</h1>
            <p className='aboutCardP'>{pValue}</p>
            <button
                style={{
                    color: hover ? "#ffc300" : "white"
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className='aboutCardButton'>
                Learn More <FiArrowRight style={{
                    transform: `rotate(${hover ? "-45" : "0"}deg)`,
                    color: hover ? "#ffc300" : "white"
                }}
                    className='aboutCardIcon'
                    size={22}
                    color='white' />
            </button>
        </div>
    )
}

export default AboutCard