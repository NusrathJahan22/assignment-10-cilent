import React from 'react';
import AllBrand from './AllBrand';
import UsedCar from './UsedCar';
import Forhome from './Forhome';
import { useLoaderData } from 'react-router';

const Home = () => {
  const allBrand= useLoaderData()
  console.log(allBrand)
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
<div>
  <h4 className='text-4xl text-center font-bold m-7'>All Brand</h4>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allBrand.map((brand) => (
          <AllBrand key={brand.id} brand={brand}></AllBrand>
        ))}
      </div>
</div>


<Forhome></Forhome>
<UsedCar></UsedCar>

        </div>
    );
};

export default Home;