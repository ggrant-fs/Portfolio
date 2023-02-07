import React from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';
import '../../../index.css';
// import styles from './Nav.module.css';

const Nav=(props)=> {
   return(
     <Fragment>
        <div className={"fullpageNav"}>
            <ul className={"navlist"}>
                <li className={"navItem"}>
                  <Link to="#" activeClassName={"active"}>
                    <h4>Featured Work</h4>
                  </Link>
                </li>
                <li className={"navItem"}>
                  <Link to="/projects" activeClassName={"active"}>
                    <h4>Portfolio</h4>
                  </Link>
                </li>
                <li className={"navItem"}>
                  <Link to="/about" activeClassName={"active"}>
                    <h4>About Me</h4>
                  </Link>
                </li>
            </ul>
            <div className={"socialLinksContainer"}>
              <ul className={"socalLinks"}>
                <li className={"socalLink"}>
                  <Link to={{pathname:"/https://github.com/ggrant-fs"}} target="_blank">
                  <span>LinkedIn</span>
                  </Link>
                </li>
                <li className={"socalLink"}>
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