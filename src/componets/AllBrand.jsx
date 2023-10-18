import React from 'react';

const AllBrand = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20'>
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/jVqYrH2/toyota.jpg" alt="" /></figure>
  <div className="card-body">
    
    <div className="card-actions justify-center">
      <button className="btn bg-rose-500 w-full">Toyota</button>
    </div>
  </div>
</div>
{/* card 2  */}
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/C24xK8v/ford.jpg" alt="" /></figure>
  <div className="card-body">
    
    <div className="card-actions justify-center">
      <button className="btn bg-rose-500 w-full">Ford</button>
    </div>
  </div>
</div>
{/* card 3 */}
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/dr3jz7Z/honda.jpg" alt="" /></figure>
  <div className="card-body">
    
    <div className="card-actions justify-center">
      <button className="btn bg-rose-500 w-full">Honda</button>
    </div>
  </div>
</div>
{/* card 4 */}
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/BjYwz8v/mercedes-benz.jpg" alt="" /></figure>
  <div className="card-body">
    
    <div className="card-actions justify-center">
      <button className="btn bg-rose-500 w-full">Mercedes-Benz</button>
    </div>
  </div>
</div>
{/* card 5 */}
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/p1LYcyw/tesla.jpg" alt="" /></figure>
  <div className="card-body">
    
    <div className="card-actions justify-center">
      <button className="btn bg-rose-500 w-full">Tesla</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/D5T190D/bmw.jpg" alt="" /></figure>
  <div className="card-body">
    
    <div className="card-actions justify-center">
      <button className="btn bg-rose-500 w-full">BMW</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllBrand;