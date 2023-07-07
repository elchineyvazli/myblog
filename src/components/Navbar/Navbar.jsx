import './Navbar.scss'
import { Link } from 'react-router-dom'
import { SlBasketLoaded } from 'react-icons/sl'
import { PiGooglePodcastsLogoBold } from 'react-icons/pi'
import { MdOutlineDarkMode } from 'react-icons/md'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/" className="logoPart">
                <h1>ELÇİN</h1>
                <PiGooglePodcastsLogoBold size={30} color='white' />
                <h1>EYVAZLI</h1>
            </Link>
            <div className="navLinks">
                <Link to="/" className="link">Landings</Link>
                <Link to="/" className="link">Portfolio</Link>
                <Link to="/" className="link">Blog</Link>
                <Link to="/" className="link">Pages</Link>
                <Link to="/" className="link">Components</Link>
                <Link to="/" className="link">Features</Link>
                <Link to="/" className="link">Demos</Link>
            </div>
            <div className="others">

                <div className="basketPart">
                    <button className="basket"><SlBasketLoaded size={38} color="white" /></button>
                    <div className="countCircle">0</div>
                </div>

                <button className="darkMode">
                    <MdOutlineDarkMode size='38px' color='white' />
                </button>

                <button className="hMenu">
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                </button>

            </div>
        </nav>
    )
}

export default Navbar