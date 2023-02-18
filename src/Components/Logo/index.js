import './index.scss';
import logoS from '../../assets/images/logo-s.png';
import { useEffect, useRef } from 'react';

const Logo=()=>{
    const bgRef=useRef();
    const solidLogoRef=useRef();
    return(
    <div className='logo-containner' ref={bgRef}>
        <img className='solid-log' src={logoS} alt='s' ref={solidLogoRef}/>
    </div>
    );
}

export default Logo;
