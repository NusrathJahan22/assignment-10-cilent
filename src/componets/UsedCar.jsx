import React from 'react';

const UsedCar = () => {
    return (
        <div className='justify-center'>
            <h2 className='text-5xl text-center mt-5'>Used Car In Top Countries</h2>
            <div className='flex gap-3'>
            <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/PhKD801/usa-2.webp" alt="" className="rounded-full w-15 h-20" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">USA</h2>
                </div>
                </div>
            <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/51ksFm0/canada.jpg" alt="" className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Canada</h2>
                </div>
                </div>
            <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/3rdPx0C/thailand.jpg" alt="" className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Thailand</h2>
                </div>
                </div>
            <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/LQ97DK6/china.jpg" alt="" className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">China</h2>
                </div>
                </div>
            <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/kmGKS8t/india.jpg" alt="" className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">India</h2>
                </div>
                </div>
            </div>
        </div>
    );
};

export default UsedCar;