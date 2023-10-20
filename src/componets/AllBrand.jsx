import React from 'react';
import { Link } from 'react-router-dom';

const AllBrand = () => {
    return (
        <div>
        <h2 className='text-4xl font-bold text-center text-red-800 mt-10'>CHOOSE THE BRAND</h2>

          {/* <Link to="/login"> */}

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20'>
          <Link to='/login'>
            <Link to='/toyota'>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/J3k8My6/download.png" alt="" className='w-40 h-20' /></figure>
  <div className="card-body">
    
    <div className="card-actions justify-center">
      <button className="btn bg-rose-500 w-full">Toyota</button>
    </div>
  </div>
</div>
</Link>
          </Link>
{/* card 2  */}
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/Y3d5c8j/for-d-3.jpg" alt="" className='w-40 h-20' /></figure>
  <div className="card-body">
    
    <div className="card-actions justify-center">
      <button className="btn bg-rose-500 w-full">Ford</button>
    </div>
  </div>
</div>
{/* card 3 */}
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/tsmX7pm/hunda-2.jpg" alt="" className='w-40 h-20' /></figure>
  <div className="card-body">
    
    <div className="card-actions justify-center">
      <button className="btn bg-rose-500 w-full">Honda</button>
    </div>
  </div>
</div>
{/* card 4 */}
<div className="card card-compact w-96 bg-base-100 shadow-xl ">
  <figure><img src="https://i.ibb.co/0BrM7Yx/bamz-2.png" alt="" className='w-40 h-20' /></figure>
  <div className="card-body ">
    
    <div className="card-actions justify-center ">
      <button className="btn bg-rose-500 w-full">Mercedes-Benz</button>
    </div>
  </div>
</div>
{/* card 5 */}
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/3BXCCdg/tesla-2.webp" alt="" className='w-40 h-20' /></figure>
  <div className="card-body">
    
    <div className="card-actions justify-center">
      <button className="btn bg-rose-500 w-full">Tesla</button>
    </div>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/mTYVZbs/bmw.png" alt="" className='w-40 h-20'/></figure>
  <div className="card-body">
    
    <div className="card-actions justify-center">
      <button className="btn bg-rose-500 w-full">BMW</button>
    </div>
  </div>
</div>
        </div>

          {/* </Link> */}

        </div>
    );
};

export default AllBrand;