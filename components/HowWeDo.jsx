import Image from 'next/image';
import React from 'react';
import pic1 from '../public/assets/how-we-do-1.jpg';
import pic2 from '../public/assets/how-we-do-2.jpg';
import pic3 from '../public/assets/how-we-do-3.jpg';

const HowWeDo = () => {
    return (
        <div id='howWeWork' className='py-20'>
            <div className='text-center '>
                <h1>How we do it ? </h1>
                <h3 className='py-5'>Accutouch Therapy</h3>
            </div>

            {/* one  */}
            <div className='lg:flex justify-around items-center   max-w-[1300px] m-auto py-5'>
                <div className='bg-sky-400 w-full h-[50vh] lg:w-[500px]  lg:h-[500px] flex justify-center lg:justify-end items-center' style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% '}}>
                    <Image width='288' height='288' className='lg:w-[400px] w-72 h-72  rounded-xl' src={pic1} alt="photo" />
                </div>
                <div className='text-center lg:text-left'>
                    <h3>Diet</h3>
                    <p>Right food is the basis of all health. <br /> We will work with you to help you understand <br /> what to eat and what to avoid.</p>
                </div>
            </div>
            {/* two  */}
            <div className='lg:flex justify-around items-center   max-w-[1300px] m-auto py-5'>
                <div className='text-center lg:text-left'>
                    <h3>Healthy & Colorful Recipes</h3>
                    <p>In your kitchen sits the wisdom of Ayurvedic herbs <br /> and ingredients for wellness. <br /> We tell you how to use them</p>
                </div>
                <div className='bg-sky-400 w-full h-[50vh] lg:w-[500px]  lg:h-[500px] flex justify-center lg:justify-start items-center' style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% '}}>
                    <Image width='288' height='288' className='lg:w-[400px] w-72 h-72  rounded-xl' src={pic2} alt="photo" />
                </div>
            </div>
            {/* three  */}
            <div className='lg:flex justify-around items-center   max-w-[1300px] m-auto py-5'>
                <div className='bg-sky-400 w-full h-[50vh] lg:w-[500px]  lg:h-[500px] flex justify-center lg:justify-end items-center' style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% '}}>
                    <Image width='288' height='288' className='lg:w-[400px] w-72 h-72  rounded-xl' src={pic3} alt="photo" />
                </div>
                <div className='text-center lg:text-left'>
                    <h3>Lifestyle</h3>
                    <p>We give you simple bio-hacks to give your <br /> health a head start</p>
                </div>
            </div>
        </div>
    );
};

export default HowWeDo;