import './Home.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import Animate from '../Animate';
import { useEffect, useState } from 'react';
import Logo from '../Logo/index';

const Home=()=>{
    const[letterClass,setLetterClass]=useState('text-animate');
    const nameArray=['h','u','s','i','l',' ','P ','a','n','g','d','h','a','k'];
    const jobArray=['F','r','o','n','t','e','n','d',' ', 'W','e','b',' ','D','e','v','e','l','o','p','e','r'];
    const iArray=['R','e','a','c','t','.','j','s', ' ','&',' ','Redux'];
    useEffect(()=>{
         setTimeout(()=>{
            setLetterClass('text-animate-hover');
    },4000)},[]);
    return(
        <div className='containner home-page'>
            <div className='text-zone'>
                <h1>Hi , <br/>I'm &nbsp;
                <img src={LogoTitle} alt='developer' />
                <Animate letterClass={letterClass} strArray={nameArray} idx={15}/><br/>
                </h1>
                <h2><Animate letterClass={letterClass} strArray={jobArray} idx={22}/></h2>
                <h2><Animate letterClass={letterClass} strArray={iArray} idx={22}/></h2>
                <Link to='/contact' className='button'>Contact Me</Link>
            </div>
            <Logo/>
        </div>
    );
}
export default Home;