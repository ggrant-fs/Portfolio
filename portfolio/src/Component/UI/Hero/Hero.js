import React from 'react';
import { Fragment ,useState } from 'react';
import '../../../index.css';
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
          {/* this is where the animation that displays the name goes */}
          <div className={"intro-container"}>
            <div className={"first-name-enter-left"}>
              <h1>Gary</h1>
            </div>
            <div className={"last-name-enter-right"}>
              <h1>Grant</h1>
            </div>
            {/* <div className={"caption"}></div> */}
          </div>
          <div className={"video-container"}>
           <video autoPlay muted loop>
             <source className={"source"} src={backgroundVideo} type='video/mp4'/>
           </video>
          </div>
       </Fragment>
    )
}

export default Hero;

