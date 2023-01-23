import styles from  './Header.module.css';

function Header(props){
    return (
        <div className={styles.headerContainer}>
            <div className={styles.header}></div>        
        </div>
    )
}

export default Header