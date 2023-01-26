import { Fragment } from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Nav.module.css';

function Nav (props) {
   return(
     <Fragment>
        <div className={styles.fullpageNav}>
            <ul className={styles.navlist}>
                <li className={styles.navItem}><NavLink >Featured Work</NavLink></li>
                <li className={styles.navItem}><NavLink >Portfolio</NavLink></li>
                <li className={styles.navItem}><NavLink >About Me</NavLink></li>
            </ul>
        </div>
     </Fragment>
   )
}

export default Nav;