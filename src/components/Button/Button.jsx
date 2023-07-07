import './Button.scss'

const Button =
    ({
        nameValue,
        onClickValue,
        colorValue,
        widthValue,
        heightValue,
        borderRadiusValue,
        backgroundColorValue,
        positionValue,
        zIndexValue,
        classNameValue,
        onMouseEnterValue,
        onMouseLeaveValue
    }) => {
        return (
            <button className={classNameValue}
                style={{
                    color: `${colorValue}`,
                    width: `${widthValue}`,
                    height: `${heightValue}`,
                    borderRadius: `${borderRadiusValue}`,
                    backgroundColor: `${backgroundColorValue}`,
                    position: `${positionValue}`,
                    zIndex: { zIndexValue }
                }}
                onClick={onClickValue}
                onMouseEnter={onMouseEnterValue}
                onMouseLeave={onMouseLeaveValue}
            >{nameValue}</button>
        )
    }

export default Button