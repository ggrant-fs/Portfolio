import React from 'react';
// import styles from  './Header.module.css';
import '../../../index.css';
import {Fragment} from 'react';

function Header(props){
    const renderNav =props.renderNav;
    

    return (
      <Fragment>
        <div className={"headerContainer"}>
          <button className={"menuButton"}>
            <div className={"menuBar" } onClick={renderNav}></div>
            <div className={"menuBar"} onClick={renderNav}></div>
            <div className={"menuBar"} onClick={renderNav}></div>
          </button>
        </div>
      </Fragment>
    )
}

export default Header