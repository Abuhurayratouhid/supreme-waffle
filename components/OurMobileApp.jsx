import React from 'react';
import styles from '../styles/OurMobileApp.module.css'

const OurMobileApp = () => {
    return (
        <div id='mobileApp' className={styles.parent}>
            <div className='bg-sky-400 lg:h-[120vh] pb-40'>
                    <h2 className='pt-40 text-center pb-10'>Our Mobile App</h2>
                {/* mobile app content  */}
                <div className='max-w-[1200px] lg:flex justify-around items-center'>
                    <img className='h-96 sm:m-auto' src="http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/app.jpeg" alt="mobile app" />
                    <div className='text-xl text-center lg:text-left '>
                        <p className='py-10'>Want to know more about programs ?</p>
                        <p> Install our app from the playstore now!</p>
                        <img className='h-20 mt-5 m-auto' src="http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/playstore.png" alt="play-store" />
                    </div>
                </div>


                {/* Top shape  */}
                <div className={styles.custom_shape_top}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shape_fill}></path>
                    </svg>
                </div>


                {/* Bottom shape  */}
                <div className={styles.custom_shape}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shape_fill}></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default OurMobileApp;