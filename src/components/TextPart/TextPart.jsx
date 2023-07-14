import './TextPart.scss'

const TextPart = ({
    h1Value,
    pValue,
    h1ColorValue,
    pColorValue,
    h1FontSizeValue,
    pFontSizeValue,
    textPartBackgroundColor,
    pDisplay1,
    pDisplay2,
    borderRadiusValue,
    imageValue
}) => {
    return (
        <div
            className='textPart'
            style={{
                backgroundColor: `${textPartBackgroundColor}`,
                borderRadius: `${borderRadiusValue}`,
                backgroundImage: `url(${imageValue})`
            }}
        >
            <p
                className='textPartP'
                style={{
                    display: `${pDisplay1}`,
                    color: `${pColorValue}`,
                    fontSize: { pFontSizeValue }
                }}
            >{pValue}</p>
            <h1
                className='textPartH1'
                style={{
                    color: `${h1ColorValue}`,
                    fontSize: { h1FontSizeValue }
                }}
            >{h1Value}</h1>
            <p
                className='textPartP'
                style={{
                    display: `${pDisplay2}`,
                    color: `${pColorValue}`,
                    fontSize: { pFontSizeValue }
                }}
            >{pValue}</p>
        </div>
    )
}

export default TextPart