import React from 'react';
import styles from '../styles/OurPrograms.module.css'
import ProgramsCard from './ProgramsCard';
import pic1 from '../public/assets/dia.jpg';
import pic2 from '../public/assets/healthy-pregnancy-tile.jpg';
import pic3 from '../public/assets/BP.jpg';
import pic4 from '../public/assets/weightLoss-pintile.jpg';
import pic5 from '../public/assets/Thyroid.jpg';
import pic6 from '../public/assets/painfulPeriods-pintile.webp';
import Testimonial from './Testimonial';



const programs = [
    {
        id: 1,
        title: 'Diabetes',
        subTitle: 'Learn more',
        picture: pic1
    },
    {
        id: 2,
        title: 'Healthy Pregnancy',
        subTitle: 'Learn more',
        picture: pic2
    },
    {
        id: 3,
        title: 'Blood Pressure',
        subTitle: 'Learn more',
        picture: pic3
    },
    {
        id: 4,
        title: 'Weight Loss',
        subTitle: 'Learn more',
        picture: pic4
    },
    {
        id: 5,
        title: 'Thyroid',
        subTitle: 'Learn more',
        picture: pic5
    },
    {
        id: 6,
        title: 'Menupaese',
        subTitle: 'Learn more',
        picture: pic6
    },
]

const OurPrograms = () => {
    return (
        <div id='ourPrograms' className={styles.main}>
            <div className=' py-20 bg-sky-500 bg-opacity-50 lg:h-[150vh] mb-40'>
                <div className='text-center '>
                    <h1>Our programs </h1>
                    <h3 className='py-5'>Return to Health</h3>
                </div>

                <div className='max-w-[1200px] mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    {programs.map(program => <ProgramsCard
                    key={program.id}
                    program={program}
                    />)}
                    
                </div>

                <div>
                    <Testimonial/>
                </div>

                <div class={styles.custom_shape}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class={styles.shape_fill}></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default OurPrograms;