import React from 'react';
import OurPhilosophy from './OurPhilosophy';
import pic1 from '../public/assets/Client-1.svg';
import pic2 from '../public/assets/Client-2.svg';
import pic3 from '../public/assets/Client-3.svg';
import pic4 from '../public/assets/Client-4.svg';
import pic5 from '../public/assets/Client-5.svg';

import Image from 'next/image';

const items = [
    {
        id: 1,
        title: 'Upto 2-3 inch loss',
        subTitle: "and reduction in blood pressure medication",
        picture: pic4
    },
    {
        id: 2,
        title: 'Up to 10 kgs weight loss',
        subTitle: 'and reduction in blood pressure medication',
        picture: pic2
    },
    {
        id: 3,
        title: 'Relief from hot flashes & mood swings',
        subTitle: 'without any allopathic medication',
        picture: pic3
    },
    

];

const moreItems = [
    {
        id: 4,
        title: 'Reversing diabetes naturally',
        subTitle: 'and reduction in PCOD symptoms',
        picture: pic4
    },
    {
        id: 5,
        title: 'Natural healthy pregnancy',
        subTitle: 'after failed IUI and IVF cycles',
        picture: pic5
    }
]

const OurClientHaveSeen = () => {
    return (
        <div id='ourClients' className='w-full mb-72 lg:h-[180vh] bg-gradient-to-b from-sky-300 to-sky-100 via-sky-200  rounded-tr-[10rem] rounded-b-[10rem]'>
            <div className='text-center pt-20'>
                <h2>We are hear to Serve People to Return Back to Health </h2>
                <p className='py-5 text-xl'>Our clients have seen</p>
            </div>

            

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 max-w-[900px] m-auto'>
                {items.map(item => <div
                    className='bg-white w-48 h-72 py-3 px-5 m-5 mx-auto  rounded-tr-[3rem] rounded-bl-[3rem]'
                    key={item.id}
                    item={item}
                >
                    <Image width='155' height='144' src={item.picture} alt="" />
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.subTitle}</p>
                    </div>
                </div>)}
            </div>
            <div className='lg:flex md:flex justify-around max-w-[600px] m-auto pt-10'>
                {moreItems.map(item => <div
                    className='bg-white w-48 h-72 py-3 px-5 m-5 mx-auto rounded-tr-[3rem] rounded-bl-[3rem]'
                    key={item.id}
                    item={item}
                >
                    <Image width='155' height='144' src={item.picture} alt="" />
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.subTitle}</p>
                    </div>
                </div>)}
            </div>



             {/* OurPhilosophy         */}
             <div className='mb-40'>
                <OurPhilosophy/>
             </div>
        </div>
    );
};

export default OurClientHaveSeen;