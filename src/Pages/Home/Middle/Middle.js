import React from 'react';
import img from '../../../assets/images/treatment.png'

const Middle = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-28 lg:m-40 gap-16'>
            <div>
                <img className=' rounded-2xl' src={img} alt="" />
            </div>
            <div className=' mt-14'>
                <h1 className='text-4xl font-bold mb-3'>
                Exceptional Dental Care, on Your Terms
                </h1>
                <h4>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.
                </h4>
                <button className='btn btn-success mt-3'>Get Started</button>
            </div>
        </div>
    );
};

export default Middle;