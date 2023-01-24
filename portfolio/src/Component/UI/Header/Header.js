import styles from  './Header.module.css';
import {Fragment} from 'react';
function Header(props){
    return (
      <Fragment>
        <div className={styles.headerContainer}>
          <button className={styles.menuButton}>
            <div className={styles.menuBar}></div>
            <div className={styles.menuBar}></div>
            <div className={styles.menuBar}></div>
          </button>
        </div>
      </Fragment>
    )
}

export default Header