import './Navbar.scss'
import { Link } from 'react-router-dom'
import { SlBasketLoaded } from 'react-icons/sl'
import { PiGooglePodcastsLogoBold } from 'react-icons/pi'
import { MdOutlineDarkMode } from 'react-icons/md'
import { useState, useRef, useContext } from 'react'
import { ScreenContext } from './../../ContextFolder/UseScreenContext';

const Navbar = () => {
    let { widthValue, hMenu, hMenuFunc } = useContext(ScreenContext)

    let [hMenu1, setHMenu1] = useState(false)

    let heightValue;

    let navLinksRef = useRef(null)

    return (
        <nav className='navbar'>
            <Link to="/" className="logoPart">
                <h1>ELÇİN</h1>
                <PiGooglePodcastsLogoBold size={30} color='white' />
                <h1>EYVAZLI</h1>
            </Link>

            < div
                className="navLinks"
                style={{
                    transform: (widthValue < 1100) ?
                        `translateX(${hMenu ? 0 : 100}%)` :
                        `translateX(0)`,
                    height: `${heightValue}px`
                }}
                ref={navLinksRef}
            >
                <Link to="/landing" className="link">Landings</Link>
                <Link to="/portfolio" className="link">Portfolio</Link>
                <Link to="/blog" className="link">Blog</Link>
                <Link to="/pages" className="link">Pages</Link>
                <Link to="/components" className="link">Components</Link>
                <Link to="/features" className="link">Features</Link>
                <Link to="/demos" className="link">Demos</Link>
            </div>

            <div className="others">

                <div className="basketPart">
                    <button className="basket"><SlBasketLoaded size={38} color="white" /></button>
                    <div className="countCircle">0</div>
                </div>

                <button className="darkMode">
                    <MdOutlineDarkMode size='38px' color='white' />
                </button>

                <button className="hMenu" onClick={() => hMenuFunc()}>
                    <div
                        className="line line1"
                        style={{
                            transform: hMenu ? `rotate(-45deg)` : `rotate(0)`,
                            top: hMenu ? `5px` : "0",
                            width: hMenu ? "141%" : "100%"
                        }}
                    ></div>
                    <div
                        className="line line2"
                        style={{
                            display: hMenu ? "none" : "flex"
                        }}
                    ></div>
                    <div
                        className="line line3"
                        style={{
                            transform: hMenu ? `rotate(45deg)` : `rotate(0)`,
                            bottom: hMenu ? `5px` : "0",
                            width: hMenu ? "141%" : "100%"
                        }}
                    ></div>
                </button>

            </div>
        </nav >
    )
}

export default Navbar