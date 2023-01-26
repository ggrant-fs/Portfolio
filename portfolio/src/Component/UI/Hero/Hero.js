import { Fragment } from 'react';
import styles from './Hero.module.css';
import Header from '../Header/Header';
import backgroundVideo from '../../../videos/inkinwater.mp4';

function Hero(props){
    return(
        <Fragment>
          <Header/>
          <div className={styles.videoContainer}>
           <video autoPlay muted loop>
             <source className={styles.source} src={backgroundVideo} type='video/mp4'/>
           </video>
          </div>
       </Fragment>
    )
}

export default Hero;

