import styles from './Hero.module.css';
import backgroundVideo from '../../../videos/inkInWater.mp4';


function Hero(props){
    return(
       <video className={styles.video} autoPlay muted loop>
        <source src={backgroundVideo} type='video/mp4'/>
       </video>
    )
}

export default Hero;

