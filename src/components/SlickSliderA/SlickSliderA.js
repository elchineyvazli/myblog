import './SlickSliderA.scss'
import Slider from "react-slick";
import { createContext, useContext } from 'react';
import { ScreenContext } from './../../ContextFolder/UseScreenContext';

const SlickSliderA = () => {
    let { widthValue } = useContext(ScreenContext)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: widthValue > 1 && 3,
        slidesToScroll: 1
    };

    console.log(widthValue);

    return (
        <div className='slickSliderA'>
            <Slider {...settings}>
                <div className='slickSliderItem slickSliderItem1'>
                    <div className="sliderSliderSubItem">
                        <h1 className="subItemH1">FRIENDS</h1>
                        <p className="subItemP">I am software developer</p>
                    </div>
                </div>
                <div className='slickSliderItem slickSliderItem2'>
                    <div className="sliderSliderSubItem">
                        <h1 className="subItemH1">JOB</h1>
                        <p className="subItemP">I am software developer</p>
                    </div>
                </div>
                <div className='slickSliderItem slickSliderItem3'>
                    <div className="sliderSliderSubItem">
                        <h1 className="subItemH1">ME</h1>
                        <p className="subItemP">I am software developer</p>
                    </div>
                </div>
                <div className='slickSliderItem slickSliderItem4'>
                    <div className="sliderSliderSubItem">
                        <h1 className="subItemH1">FAMILY</h1>
                        <p className="subItemP">I am software developer</p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default SlickSliderA
