import AboutMe from '../../components/AboutMe/AboutMe'
import HeaderSlider from '../../components/HeaderSlider/HeaderSlider'
import SlickSliderA from '../../components/SlickSliderA/SlickSliderA'
import './HomePage.scss'


const HomePage = () => {
    return (
        <div className='homePage'>
            <HeaderSlider />
            <AboutMe />
            <SlickSliderA />
        </div>
    )
}

export default HomePage