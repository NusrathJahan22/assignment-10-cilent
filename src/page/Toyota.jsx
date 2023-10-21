import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import ToyotaCard from './ToyotaCard';

const Toyota = () => {
    const carshops = useLoaderData();
    console.log(carshops);

    const { Brand } = useParams();
  console.log(Brand);

    // Specify the brand name you want to filter by
    const brandNameToFilter = 'Toyota';

    // Filter the carshops array to get only the data with the specified brand name
    const filteredCarShops = carshops.filter(carshop => carshop.Brand === brandNameToFilter);

    return (
        <div>
            {
                filteredCarShops.map(carshop => <ToyotaCard key={carshop._id} carshop={carshop}></ToyotaCard>)
            }
        </div>
    );
};


export default Toyota;