import React from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';
import styles from './Nav.module.css';

const Nav=(props)=> {
   const renderNav = props.renderNav;
   const openNav = !renderNav ?'': '.open';
   return(
     <Fragment>
        <div className={styles.fullpageNav}>
            <ul className={styles.navlist}>
                <li className={styles.navItem}>
                  <Link to="#" activeClassName={styles.active}>
                    <h4>Featured Work</h4>
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/projects" activeClassName={styles.active}>
                    <h4>Portfolio</h4>
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/about" activeClassName={styles.active}>
                    <h4>About Me</h4>
                  </Link>
                </li>
            </ul>
            <div className={styles.socialLinksContainer}>
              <ul className={styles.socalLinks}>
                <li className={styles.socalLink}>
                  <Link to={{pathname:"/https://github.com/ggrant-fs"}} target="_blank">
                  <span>LinkedIn</span>
                  </Link>
                </li>
                <li className={styles.socalLink}>
                  <Link to={{pathname:"/https://github.com/ggrant-fs"}} target="_blank">
                    <snan>GitHub</snan>
                 </Link>
                </li>
              </ul>
            </div>
        </div>
     </Fragment>
   )
}

export default Nav;