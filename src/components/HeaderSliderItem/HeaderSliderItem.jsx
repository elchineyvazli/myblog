import './HeaderSliderItem.scss'
import Button from './../Button/Button';
import { useState } from 'react';

const HeaderSliderItem = ({
    imgValue,
    h1Value,
    bottomValue,
    scaleValue,
    opacityValue
}) => {

    let [hover, setHover] = useState(false)

    function mouseEnterFunc() {
        setHover(true)
    }

    function mouseLeaveFunc() {
        setHover(false)
    }

    return (
        <div className='headerSliderItem'
            style={{
                backgroundImage: `url(${imgValue})`,
            }}>
            <div
                className="itemContainer"
                style={{
                    bottom: `${bottomValue}`,
                    transform: `scale(${scaleValue})`,
                    opacity: `${opacityValue}`
                }}
            >
                <h1 className='headerSliderH1'>{h1Value}</h1>

                <Button
                    widthValue="140px"
                    heightValue="50px"
                    borderRadiusValue="15px"
                    colorValue="white"
                    backgroundColorValue={hover ? "#2d1887" : "#4728D9"}
                    nameValue="Get Started"
                    positionValue='static'
                    zIndexValue={9}
                    classNameValue={"getStartedButton"}
                    onMouseEnterValue={() => mouseEnterFunc()}
                    onMouseLeaveValue={() => mouseLeaveFunc()}
                />
            </div>
        </div>
    )
}

export default HeaderSliderItem;