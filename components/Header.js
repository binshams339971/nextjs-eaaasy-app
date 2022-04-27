import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { FaBars, FaEquals } from "react-icons/fa";
import { BsList, BsFillChatLeftTextFill } from "react-icons/bs";
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleMenuBar = () => {
        setShow(!show);
    }

    return (
        <>
            <div className={`${styles.headerTop}`}>
                <Link href="/">
                    <a><Image src='/eaaasy.png' width={150} height={70} style={{ cursor: "pointer" }} /></a>
                </Link>

            </div>
            <div className={`${styles.headerBottom}`}>
                <div className='container pt-3 d-flex justify-content-between'>

                    <a onClick={handleMenuBar} className={`${styles.menuBar}`}><BsList /></a>

                    <Link href="/feedback">
                        <a className={`${styles.feedBack}`}>
                            <BsFillChatLeftTextFill className={`${styles.feedBackIcon}`} />Feedback</a>
                    </Link>
                </div>
            </div>
            {show == true ? <Sidebar clickHandler={handleMenuBar} width="250px" show={show} /> : <Sidebar width="0px" />}
        </>
    )
}
export default Header;