import React from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';
import styles from './Nav.module.css';

const Nav=(props)=> {

   return(
     <Fragment>
        <div className={`${styles.fullpageNav} ${styles.openNav}`}>
            <ul className={styles.navlist}>
                <li className={styles.navItem}><Link activeClassName={styles.active}><h4>Featured Work</h4></Link></li>
                <li className={styles.navItem}><Link activeClassName={styles.active}><h4>Portfolio</h4></Link></li>
                <li className={styles.navItem}><Link activeClassName={styles.active}><h4>About Me</h4> </Link></li>
            </ul>
            <div className={styles.socialLinks}>
              <ul>
                <li><Link>test link</Link></li>
              </ul>
            </div>
        </div>
     </Fragment>
   )
}

export default Nav;