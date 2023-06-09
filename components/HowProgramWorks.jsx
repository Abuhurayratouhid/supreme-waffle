import Image from 'next/image';
import React from 'react';
import pic1 from '../public/assets/step1.svg';
import pic2 from '../public/assets/step2.svg';
import pic3 from '../public/assets/step3.svg';
import pic4 from '../public/assets/step4.svg';

const steps = [
    {
        id: 1,
        step: 'Step-1',
        title: 'Clarity Call',
        subTitle: 'Have a call with us to know how we work. Make program payment. Start program from comfort of your home.',
        picture: pic1
    },
    {
        id: 2,
        step: 'Step-2',
        title: 'Register to one of our program',
        subTitle: 'on your diet, supplements, lifestyle, etc. Explanations sent via text, images & videos.',
        picture: pic2
    },
    {
        id: 3,
        step: 'Step-3',
        title: 'Connecting the medical history',
        subTitle: 'Fill out a medical history form, do a blood test and have a detailed call with our medical expert',
        picture: pic3
    },
    {
        id: 4,
        step: 'Step-4',
        title: 'Follow Up Consults',
        subTitle: 'happen each month. Health progress reviewed. Changes made, when needed. Ask questions on chat/mail. (working hours only please)',
        picture: pic4
    },
]

const HowProgramWorks = () => {
    return (
        <div id='howProgramsWorks' className='bg-sky-200 lg:h-[100vh]'>
            <h1 className='text-center py-14'>how program works</h1>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] m-auto'>
            {steps.map(step => <div
            key={step.id}
            step={step}
             className='bg-white w-56  p-3 px-5 mt-5 m-auto'
             >
                <p className='text-center border-2 mb-5'>{step.step}</p>
                <Image width='160' height='244' className='w-40 h-56' src={step.picture} alt="" />
                <h3 className='my-2'>{step.title}</h3>
                <p>{step.subTitle}</p>
            </div>)}
        </div>
            
        </div>
    );
};

export default HowProgramWorks;