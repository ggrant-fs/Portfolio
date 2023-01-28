import { Fragment } from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Nav.module.css';

function Nav (props) {

   return(
     <Fragment>
        <div className={`${styles.fullpageNav} ${styles.openNav}`}>
            <ul className={styles.navlist}>
                <li className={styles.navItem}><NavLink activeClassName={styles.active}>Featured Work</NavLink></li>
                <li className={styles.navItem}><NavLink activeClassName={styles.active}>Portfolio</NavLink></li>
                <li className={styles.navItem}><NavLink activeClassName={styles.active}>About Me</NavLink></li>
            </ul>
        </div>
     </Fragment>
   )
}

export default Nav;