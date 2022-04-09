import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { FaBars, FaEquals } from "react-icons/fa";
import { BsList, BsFillChatLeftTextFill } from "react-icons/bs";

const Header = () => {
    return (
        <>
            <div className={`${styles.headerTop}`}>
                <Image src='/eaaasy.png' width={150} height={70} />
            </div>
            <div className={`${styles.headerBottom}`}>
                <div className='container pt-3 d-flex justify-content-between'>
                    <Link href="/">
                        <a className={`${styles.menuBar}`}><BsList /></a>
                    </Link>
                    <Link href="/">
                        <a className={`${styles.feedBack}`}>
                            <BsFillChatLeftTextFill className={`${styles.feedBackIcon}`} />Feedback</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Header;