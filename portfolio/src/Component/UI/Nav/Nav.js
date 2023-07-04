import React from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';
import '../../../index.css';

const Nav=(props)=> {
   return(
     <Fragment>
        <div className={"fullpage-nav"}>
            <ul className={"nav__list"}>
                {/* <li className={"nav__item"}>
                  <Link to="#" activeClassName={"active"}>
                    <h4>Featured Work</h4>
                  </Link>
                </li> */}
                <li className={"nav__item"}>
                  <Link to="/projects" activeClassName={"active"}>
                    <h4>Portfolio</h4>
                  </Link>
                </li>
                <li className={"nav__item"}>
                  <Link to="/about" activeClassName={"active"}>
                    <h4>About Me</h4>
                  </Link>
                </li>
            </ul>
            <div className={"social-links-container"}>
              <ul className={"socal__links"}>
                <li className={"socal__link"}>
                  <Link to={{pathname:"https://www.linkedin.com/in/gary-grant-dev"}} target="_blank">
                  <span>LinkedIn</span>
                  </Link>
                </li>
                <li className={"socal__link"}>
                  <Link to={{pathname:"https://github.com/ggrant-fs"}} target="_blank">
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