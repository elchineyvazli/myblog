import { createContext, useState } from "react";

export const MessageContext = createContext()

export const MessageProvider = ({ children }) => {
    let [messageHeight, setMessageHeight] = useState(60)
    let [messageWidth, setMessageWidth] = useState(200)
    let [forHeight, setForHeight] = useState(false)

    function messageFunc() {
        if (messageHeight === 60) {
            setMessageHeight(prev => prev + 300)
            setForHeight(true)
            setMessageWidth(e => e + 200)
        } else {
            setMessageHeight(prev => prev - 300)
            setForHeight(false)
            setMessageWidth(e => e - 200)
        }
    }
    return (
        <MessageContext.Provider value={{
            messageHeight,
            messageFunc,
            forHeight,
            messageWidth
        }}>
            {children}
        </MessageContext.Provider>
    )
}