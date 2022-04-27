import { useState } from 'react';
import styles from '../styles/Signin.module.css';
import Link from 'next/link';
import Image from 'next/image'

const Signin = () => {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className='d-flex justify-content-between'>
                            {/* <Link href="/">
                                <a>
                                    Back
                                </a>
                            </Link> */}
                            <h3 className=''></h3>
                            <h5 className='' style={{ color: "#1C4A45", fontSize: "26px" }}>WELLCOME BACK!</h5>
                            <h3 className=''></h3>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Link href="/">
                                <a></a>
                            </Link>
                            <div className={`${styles.signin} d-block`}>
                                <p>Username/Email</p>
                                <input type="text" id={`${styles.ip2}`} name="username" />

                                <p>Password</p>
                                <input type="password" id={`${styles.ip3}`} name="password" />

                                <div className='d-flex justify-content-between'>
                                    <Link href="/register">
                                        <a className={`${styles.forgot} ml-2`}>Register Here</a>
                                    </Link>
                                    <a href="#" className={`${styles.forgot}`}>Forgot Password?</a>
                                </div>
                                <button className={`${styles.btn0} ${styles.btnAction} mb-4`} >
                                    Sign in
                                </button>
                            </div>
                            <h3 className=''></h3>
                        </div>

                    </div>
                    <div className="col-md-6 col-12">
                        <div className='text-center'>
                            <img src="https://mvp.deepchainlabs.com/static/media/art.2b7154dbce5613f96ca7.png" height="50%" width="40%" /><br />
                            <Image src='/eaaasy2.png' width="100%" height="45%" />
                            <p className={styles.title101}>Video Based Ecommerce</p>
                            <p className={styles.title102}>Not just static photos, products videos!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;