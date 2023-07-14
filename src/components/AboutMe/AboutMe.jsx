import './AboutMe.scss'
import TextPart from './../TextPart/TextPart';
import AboutMeContainer from './../AboutMeContainer/AboutMeContainer';

const AboutMe = () => {
    return (
        <div className="aboutPart">
            <div className="aboutMe">
                <TextPart
                    pDisplay2="none"
                    h1Value="Haqqımda"
                    pValue="Buradan baxa bilərsiniz"
                    pColorValue="white"
                    h1ColorValue="white"
                    textPartBackgroundColor="transparent"
                    borderRadiusValue="40px"
                />
                <AboutMeContainer />
            </div>
        </div>
    )
}

export default AboutMe