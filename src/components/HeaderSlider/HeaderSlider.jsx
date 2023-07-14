import './HeaderSlider.scss'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { useState } from 'react';
import HeaderSliderItem from './../HeaderSliderItem/HeaderSliderItem';

//! IMAGES
import image1 from '../../images/HeaderSliderImages/image1.jpg'
import image2 from '../../images/HeaderSliderImages/image2.jpg'
import image3 from '../../images/HeaderSliderImages/image1.jpg'

const HeaderSlider = () => {
    const [clickLeft, setClickLeft] = useState(false)
    const [clickRight, setClickRight] = useState(false)

    const [clickSlider, setClickSlider] = useState(false)
    const [showButtons, setShowButtons] = useState(false)
    const slider = [
        image1,
        image2,
        image3
    ]

    let [counter, setCounter] = useState(0)

    // setTimeout(() => {
    //     if (counter < slider.length) {
    //         setCounter(prev => prev + 1)

    //     } else {
    //         setCounter(prev => prev = 1)
    //     }
    // }, 4000)

    function clickRightFunction() {

        setClickRight(true)

        if (counter < slider.length - 1) {
            setClickSlider(!clickSlider)
            setCounter(prev => prev + 1)
        } else {
            setClickSlider(true)
            setCounter(prev => prev = 0)
        }
        console.log(clickSlider);
    }

    function clickLeftFunction() {
        setClickLeft(true)
        setClickSlider(!clickSlider)

        if (counter > 0) {
            setCounter(prev => prev - 1)
        } else {
            setCounter(prev => prev = slider.length - 1)
        }
        setClickSlider(!clickSlider)
    }

    return (
        <div
            className='headerSlider'
            onMouseOver={() => setShowButtons(true)}
            onMouseOut={() => setShowButtons(false)}
        >
            <button
                onClick={() => clickLeftFunction()}
                className='backButton'
                style={{
                    opacity: showButtons ? "1" : "0"
                }}
            >
                <BiLeftArrow size={50} color='white' />
            </button>
            <div className="whiteBackground"></div>
            <div
                className='headerSliderInside'
                style={{
                    width: "100%",
                    transform: clickRight ? `translateX(-${counter * 1510}px )` : clickLeft && `translateX(${counter * 1510}px )`
                }}
            >
                <HeaderSliderItem
                    h1Value="Item 1"
                    imgValue={image1}
                    bottomValue={clickSlider ? "290px" : "10px"}
                    // scaleValue={clickSlider ? "1.5" : "1"}
                    opacityValue={clickSlider ? "1" : "0"}
                />

                <HeaderSliderItem
                    h1Value="Item 2"
                    imgValue={image2}
                    bottomValue={!clickSlider ? "290px" : "10px"}
                    // scaleValue={clickSlider ? "1.5" : "1"}
                    opacityValue={!clickSlider ? "1" : "0"}
                />

                <HeaderSliderItem
                    h1Value="Item 3"
                    imgValue={image3}
                    bottomValue={clickSlider ? "290px" : "10px"}
                    // scaleValue={clickSlider ? "1.5" : "1"}
                    opacityValue={clickSlider ? "1" : "0"}
                />

            </div >
            <button
                onClick={() => clickRightFunction()}
                className='undoButton'
                style={{
                    opacity: showButtons ? "1" : "0"
                }}
            >
                <BiRightArrow size={50} color='white' />
            </button>
        </div >
    )
}

export default HeaderSlider