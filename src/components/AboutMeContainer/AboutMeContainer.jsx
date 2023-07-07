import AboutCard from '../AboutCard/AboutCard'
import './AboutMeContainer.scss'
import { PiMaskHappyThin } from 'react-icons/pi'
import { IoMdSchool } from 'react-icons/io'
import { BsFillRocketTakeoffFill } from 'react-icons/bs'

const AboutMeContainer = () => {
    return (
        <div className='aboutMeContainer'>
            <AboutCard icon={<PiMaskHappyThin size={50} color='#ffc300' />} pValue="Mənim haqqımda" h1Value="Haqqımda" />
            <AboutCard icon={<IoMdSchool size={50} color='#ffc300' />} pValue="Mənim haqqımda" h1Value="Haqqımda" />
            <AboutCard icon={<BsFillRocketTakeoffFill size={40} color='#ffc300' />} pValue="Mənim haqqımda" h1Value="Haqqımda" />
        </div>
    )
}

export default AboutMeContainer