import React from 'react';
import OurPhilosophy from './OurPhilosophy';

const items = [
    {
        id: 1,
        title: 'Upto 2-3 inch loss',
        subTitle: "and reduction in blood pressure medication",
        picture: 'http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/tileIcon-1.svg'
    },
    {
        id: 2,
        title: 'Up to 10 kgs weight loss',
        subTitle: 'and reduction in blood pressure medication',
        picture: 'http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/tileIcon-2.svg'
    },
    {
        id: 3,
        title: 'Relief from hot flashes & mood swings',
        subTitle: 'without any allopathic medication',
        picture: 'http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/tileIcon-3.svg'
    },
    

];

const moreItems = [
    {
        id: 4,
        title: 'Reversing diabetes naturally',
        subTitle: 'and reduction in PCOD symptoms',
        picture: 'http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/tileIcon-4.svg'
    },
    {
        id: 5,
        title: 'Natural healthy pregnancy',
        subTitle: 'after failed IUI and IVF cycles',
        picture: 'http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/tileIcon-5.svg'
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
                    <img src={item.picture} alt="" />
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
                    <img src={item.picture} alt="" />
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