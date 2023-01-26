import { Fragment } from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Nav.module.css';

function Nav (props) {
   return(
     <Fragment>
        <div className={styles.fullpageNav}>
            <ul>
                <li><NavLink>Featured Work</NavLink></li>
                <li><NavLink>Portfolio</NavLink></li>
                <li><NavLink>About Me</NavLink></li>
            </ul>
        </div>
     </Fragment>
   )
}

export default Nav;