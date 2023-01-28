import styles from  './Header.module.css';
import {Fragment} from 'react';

function Header(props){
    const renderNav =props.renderNav;
    

    return (
      <Fragment>
        <div className={styles.headerContainer}>
          <button className={styles.menuButton}>
            <div className={styles.menuBar } onClick={renderNav}></div>
            <div className={styles.menuBar} onClick={renderNav}></div>
            <div className={styles.menuBar} onClick={renderNav}></div>
          </button>
        </div>
      </Fragment>
    )
}

export default Header