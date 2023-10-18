import React from 'react';
import AllBrand from './AllBrand';
import UsedCar from './UsedCar';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/LZ3tjMn/car-banner.webp)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Choose Any Car</h1>
      <p className="mb-5"></p>
      <button className="btn bg-rose-400 ">Order Now!</button>
    </div>
  </div>
</div>
<AllBrand></AllBrand>
<UsedCar></UsedCar>
        </div>
    );
};

export default Home;