import './index.scss';
import Animate from '../Animate/index';
import {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGithubAlt, faHtml5, faNodeJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { Loader } from 'react-loaders';
const About=()=>{
    const [letterClass ,setLetterClass]=useState('text-animate');
    const strArray=['A','b','o','u','t',' ','M','e'];
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4)

    },[]);
    return(
        <>
        <div className='containner about-page'>
            <div className='text-zone'>
                <h1>
                    <Animate letterClass={letterClass} strArray={strArray} idx={15}/>
                </h1>
                <p>
                    I'm very ambitious front-end developer looking for a role in
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>
                <p>
                    I'm quietly confident , naturally curious, and perpetually working
                    on improving my chops one design problems at a time.
                </p>
                <p>
                   I'm very humble.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#DD0031'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faNodeJs} color='#5ED4F4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faSass} color='#EFD81D'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithubAlt} color='#EC428'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )

}
export default About;