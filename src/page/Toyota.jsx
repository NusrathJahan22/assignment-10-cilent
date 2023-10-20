import React from 'react';
import { useLoaderData } from 'react-router';
import ToyotaCard from './ToyotaCard';

const Toyota = () => {
    const carshops = useLoaderData();
    console.log(carshops)

    return (
        <div>
            
            {
                carshops?.map(carshop => <ToyotaCard key={carshop._id} carshop={carshop}></ToyotaCard>)
            }
        </div>
    );
};

export default Toyota;