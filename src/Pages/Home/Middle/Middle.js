import React from 'react';
import img from '../../../assets/images/treatment.png'
import Primary from '../../../Component/Button/Primary';

const Middle = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-16 lg:m-40 gap-7 mb-10 md:mb-28'>
            <div>
                <img className=' rounded-2xl' src={img} alt="" />
            </div>
            <div className=' mt-14'>
                <h1 className='text-4xl font-bold mb-3'>
                Exceptional Dental Care, on Your Terms
                </h1>
                <h4 className='mb-5'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.
                </h4>
               <Primary>Getting started</Primary>
            </div>
        </div>
    );
};

export default Middle;