import React from 'react';
import '../../../index.css';
import {Fragment} from 'react';

function Header(props){
    const renderNav =props.renderNav;
    

    return (
      <Fragment>
        <div className={"header-container"}>
          <button className={"menu__button"}>
            <div className={"menu__bar" } onClick={renderNav}></div>
            <div className={"menu__bar"} onClick={renderNav}></div>
            <div className={"menu__bar"} onClick={renderNav}></div>
          </button>
        </div>
      </Fragment>
    )
}

export default Header