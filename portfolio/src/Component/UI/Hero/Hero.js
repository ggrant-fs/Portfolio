import { Fragment } from 'react';
import styles from './Hero.module.css';
import backgroundVideo from '../../../videos/inkinwater.mp4';


function Hero(props){
    return(
        <Fragment>
         <video className={styles.video} autoPlay muted loop>
          <source src={backgroundVideo} type='video/mp4'/>
         </video>
       </Fragment>
    )
}

export default Hero;

