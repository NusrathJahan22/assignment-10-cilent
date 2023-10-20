import React from 'react';

const ToyotaCard = ({ carshop }) => {

console.log(carshop)
  const { _id,Name, Brand, Type, Price, Description, Rating, Photo } = carshop;

  return (
    <div>
      
      <div className="card card-side bg-base-100 shadow-xl text-bold m-20 p-6">
        <figure><img src={Photo} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">Name:{Name}</h2>
          <p>Brand name :{Brand}</p>
          <p>Price :{Price}</p>
          <p>Description :{Description}</p>
          <p>Rating :{Rating}</p>
          <p>Type :{Type}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-red-500">Details</button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn bg-red-500">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyotaCard;


