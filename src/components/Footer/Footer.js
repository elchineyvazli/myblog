import './Footer.scss'
import { Link } from 'react-router-dom'
import { BsHeartFill, BsInstagram, BsExclamationLg, BsSend, BsTelephone } from 'react-icons/bs'
import { LiaTelegramPlane } from 'react-icons/lia'
import { HiOutlineDocument } from 'react-icons/hi2'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

const Footer = () => {
  return (
    <footer>
      <div className="footerTop">
        <div className="footerSectionGroup footerSectionGroup1">
          <div className="footerSection aboutFooter">
            <div className="iconContainer">
              <div className="circle">
                <BsExclamationLg size={24} color='#ED6ADB' />
              </div>
              ABOUT
            </div>
            <div className="aboutGroupContainer">
              <div className="aboutGroup location">
                <GoLocation size={20} color='white' />
                <Link className='footerLink' to="/location">Khatai station</Link>
              </div>
              <div className="aboutGroup phone">
                <BsTelephone size={20} color='white' />
                <Link className='footerLink' to="/phone">+994 55 690 22 96</Link>
              </div>
              <div className="aboutGroup gmail">
                <AiOutlineMail size={20} color='white' />
                <Link className='footerLink' to="/gmail">elchineyvazli51@gmail.com</Link>
              </div>
              <div className="inputContainer">
                <input className='aboutInput' type="text" placeholder='Enter email address' />
                <button className='aboutButton'><BsSend size={14} color='white' /></button>
              </div>
            </div>
          </div>
          <div className="footerSection informationFooter">
            <div className="iconContainer">
              <div className="circle">
                <HiOutlineDocument size={24} color='#ED6ADB' />
              </div>
              INFORMATION
            </div>
            <ul className='infoLinks'>
              <li><Link className='infoLink' to="/about">About</Link></li>
              <li><Link className='infoLink' to="/products">Products</Link></li>
              <li><Link className='infoLink' to="/blog">Blog</Link></li>
              <li><Link className='infoLink' to="/contact">Contact</Link></li>
              <li><Link className='infoLink' to="/help">Help & Support</Link></li>
            </ul>
          </div>
        </div>
        <div className="footerSectionGroup footerSectionGroup2">
          <div className="footerSection telegramFooter">
            <div className="iconContainer">
              <div className="circle">
                <LiaTelegramPlane size={24} color="#ED6ADB" />
              </div>
              TELEGRAM
            </div>
            <div className="telegramCards">
              <div className="telegramCard1 telegramCard"></div>
              <div className="telegramCard2 telegramCard"></div>
              <div className="telegramCard3 telegramCard"></div>
              <div className="telegramCard4 telegramCard"></div>
              <div className="telegramCard5 telegramCard"></div>
              <div className="telegramCard6 telegramCard"></div>
            </div>
          </div>
          <div className="footerSection instagramFooter">
            <div className="iconContainer">
              <div className="circle">
                <BsInstagram size={24} color='#ED6ADB' />
              </div>
              INSTAGRAM
            </div>
            <div className="instagramCards">
              <div className="instagramCard1 instagramCard"></div>
              <div className="instagramCard2 instagramCard"></div>
              <div className="instagramCard3 instagramCard"></div>
              <div className="instagramCard4 instagramCard"></div>
              <div className="instagramCard5 instagramCard"></div>
              <div className="instagramCard6 instagramCard"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>Copyright @2021 All rights reserved</p>
        <p>
          This template is made with <BsHeartFill size={13} /> of prophet by
          <span> Elchin Eyvazli</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer