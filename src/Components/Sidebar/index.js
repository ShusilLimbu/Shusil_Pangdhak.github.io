import './index.scss'
import { faUser,faHome,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink,Link } from 'react-router-dom';
import logoS from '../../assets/images/logo-s.png';
// import logoSubtitle from '../../assets/images/logo_sub.png';
import { faGithub, faLinkedin, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Sidebar=()=>{
    return<>
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logoS} alt='logo'/>
            {/* <img className='sub-logo'  src={logoSubtitle} alt='sloban'/> */}
        </Link>
        <nav>
            <NavLink exact='true' className='first-child' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' className='about-link' activeclassname='active' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' className='contact-link' activeclassname='active' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/bangre-sisnu-45842b256/?fbclid=IwAR0lu6gT2-HxteulBYkATOek5c2-7_0b9FruElhKO0Qy662KD6P9QB-_rHk'
                ><FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/></a>
            </li>
            <li>
                <a 
                target='_blank'
                rel='noreferrer'
                href='https://github.com/ShusilLimbu'
                ><FontAwesomeIcon icon={faGithub} color='#4d4d4e'/></a>
            </li>
            <li>
                <a 
                target='_blank'
                rel='noreferrer'
                href='tel:9842903170'
                ><FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e'/></a>
            </li>
            <li>
                <a 
                target='_blank'
                rel='noreferrer'
                href='https://www.facebook.com/shusillimbu.pangdhak/'
                ><FontAwesomeIcon icon={faFacebook} color='#4d4d4e'/></a>
            </li>
        </ul>

    </div>
    </>
}
export default Sidebar;