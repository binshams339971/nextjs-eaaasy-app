import styles from '../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={`${styles.footer}`}>
            <div className='col-md-4 '></div>
            <div className='col-md-4 '>
                <div className={`${styles.footerContent} row text-center`}>
                    <div className=''>
                        <Image src='/eaaasy2.png' width={150} height={70} />
                    </div>
                    <p className={`${styles.email}`}>i.aldares@lookaround.com.de</p>
                    <p><span className={`${styles.impress}`}>Impress</span></p>
                    <p className={`${styles.copyRight}`}>Copyright 2022 Alle Rechte bei der lookaround GmbH</p>
                </div>
            </div>
            <div className='col-md-4 '></div>
        </div>
    )
}

export default Footer;