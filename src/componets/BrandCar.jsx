import { useLoaderData, useParams } from 'react-router';
import { CarouselTransition } from './Slider';
import { useEffect, useState } from 'react';
import CartDetails from './CartDetails';

const BrandCar = () => {
    const BrandsCard = useLoaderData()

console.log('BrandsCard', BrandsCard)


const [data, setData] = useState([]);

useEffect(() => {
  fetch("http://localhost:5000/cart")
    .then((response) => response.json())
    .then((result) => {
      setData(result);
    });
}, []);
console.log(data);


const { Brand } = useParams();
console.log(Brand);

const filterdata =
  data?.filter(
    (singaleData) =>
      singaleData?.Brand.toLowerCase() === Brand.toLowerCase()
  ) || [];
console.log("this is filter data", filterdata);
return (
        <div>

            <CarouselTransition></CarouselTransition>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-10">
        {filterdata?.length ? (
          filterdata.map((cart) => (
            <CartDetails key={cart.id} cart={cart}></CartDetails>
          ))
        ) : (
          <div>
            
            <h1> no data availavile</h1>
          </div>
        )}
      </div>
            
        </div>
    );
};

export default BrandCar;