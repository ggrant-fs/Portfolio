import React from 'react';
import { Fragment ,useState } from 'react';
import styles from './Hero.module.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import backgroundVideo from '../../../videos/inkinwater.mp4';

function Hero(props){
  const [showNav, setShowNav] =useState(false);

  const displayNav = event =>{
    event.preventDefault();
    if(showNav === false){
      return setShowNav(true);
    }else {
      return setShowNav(false)
    }
    
  }


    return(
        <Fragment>
          <Header renderNav={displayNav}/>
          {showNav && <Nav navState={showNav}/>}
          <div className={styles.videoContainer}>
           <video autoPlay muted loop>
             <source className={styles.source} src={backgroundVideo} type='video/mp4'/>
           </video>
          </div>
       </Fragment>
    )
}

export default Hero;

