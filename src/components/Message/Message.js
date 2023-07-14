import { useContext, useState, useRef } from 'react'
import './Message.scss'
import { FaRegPaperPlane } from 'react-icons/fa'
import { LiaRobotSolid } from 'react-icons/lia'
import { BiCheckDouble } from 'react-icons/bi'
import { PiChatCenteredDotsDuotone } from 'react-icons/pi'
import { MessageContext } from './../../ContextFolder/UseMessageContext'

const Message = ({
    heightValue,
    widthValue
}) => {
    let { messageFunc, forHeight } = useContext(MessageContext)
    let msgInputRef = useRef(null)
    let [msgArr, setMsgArr] = useState([])

    // let [maxWidthValue, setMaxWidthValue] = useState(250)

    const msgFunc = () => {
        let inputValue = msgInputRef.current.value;
        setMsgArr(arr => [...arr, inputValue])
        console.log(msgArr);
        // console.log(inputValue);
    }

    return (
        <div
            className='message'
            style={{
                width: `${widthValue}px`,
                height: `${heightValue}px`
            }}
        >
            {
                // !forHeight &&
                <button
                    onClick={() => messageFunc()}
                    className="default">
                    Click to
                    {!forHeight ?
                        " contact"
                        :
                        " close"
                    }
                    <PiChatCenteredDotsDuotone
                        size={20}
                        color="white" />
                </button>
            }
            <div
                style={{
                    display: forHeight ? "flex" : "none",
                    flexDirection: "column",
                    opacity: forHeight ? 1 : 0
                }}
                className="messageInside">

                <div className="bottom">
                    <label className="forRobot">
                        <div className="robotContainer">
                            <div className="robotGreeting">
                                Welcome, how can we help you?
                            </div>
                            <LiaRobotSolid color='white' size={30} />
                        </div>
                    </label>

                    <div className="customerContainer">
                        <div className="customerMessagesContainer">
                            {msgArr.map(card => (
                                <div className="customerMessages">
                                    <div
                                        // style={{
                                        //     maxWidth: `${maxWidthValue}px`
                                        // }}
                                        className='customerMessage'>
                                        {card}
                                    </div>
                                    <BiCheckDouble
                                        size={28}
                                        color="white" />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                <div className="forCustomer">
                    <div className="forCustomerContainer">
                        <input type="text" className='personInput' ref={msgInputRef} />
                        <button onClick={() => msgFunc()}><FaRegPaperPlane className='enterIcon' color="white" size={20} /></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Message