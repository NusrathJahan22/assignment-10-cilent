import { useLoaderData, useParams } from 'react-router';
import { CarouselTransition } from './Slider';

const BrandCar = () => {
    const BrandsCard = useLoaderData()
console.log('BrandsCard', BrandsCard)
    const { Brand } = useParams()
return (
        <div>

            <CarouselTransition></CarouselTransition>
            {
                BrandsCard.map(singleCard => {
                    const { Photo, Price, Decription,Type } = singleCard;
                    console.log(singleCard)
                    return <div key={singleCard._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={Photo} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            </h2>
                            <p>Decription :{Decription}</p>
                            <p>Price :{Price}</p>
                            <p>Type :{Type}</p>
                            <div className="card-actions flex">
                                <button className='btn'>Details</button>
                                <button className='btn'>Add to Cart</button>
                             </div>     
                                
                            
                            
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default BrandCar;