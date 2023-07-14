import { createContext, useEffect, useState } from "react";

export const ScreenContext = createContext()

export const ScreenProvider = ({ children }) => {
    let widthValue;
    let [hMenu, setHMenu] = useState(false)

    function hMenuFunc() {
        setHMenu(!hMenu)
    }
    useEffect(() => {
        widthValue = window.screen.width;
        console.log(widthValue);
        // heightValue = window.innerHeight
    }, [hMenu])
    return (
        <ScreenContext.Provider value={{
            widthValue,
            hMenu,
            setHMenu,
            hMenuFunc
        }}>
            {children}
        </ScreenContext.Provider>
    )
}