import styles from '../styles/Sidebar.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { MdClear } from "react-icons/md";

const Sidebar = ({ width, clickHandler }) => {
    return (
        <div id="mySidenav" className={styles.sidenav} style={{ width: width }}>
            <a onClick={clickHandler} className={styles.closeIcon}><MdClear /></a>
        </div>
    )
}

export default Sidebar;