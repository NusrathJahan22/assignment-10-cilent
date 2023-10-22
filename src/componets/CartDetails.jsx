
import { Link } from 'react-router-dom';

const CartDetails = ({cart}) => {
const { _id,Photo,Brand ,Type,Name,Description, Price ,Rating} = cart;
    return (
        <div className='justify-center'>
           <div className="card w-96  glass">
  <figure><img src={Photo}alt="car!" className='w-40 h-40'/></figure>
  <div className="card-body">

    <h2 className="card-title"> Name:{Name}</h2>
    <h2 className="card-title">Brand Name:{Brand}</h2>
    <h2 className="card-title">Price:{Price}</h2>
    <p>Type :{Type}</p>
    <p>Rating :{Rating}</p>
    <p>Description :{Description}</p>
    <div className="card-actions flex">
      <Link to={`/details/${_id}`}>
      <button className="btn bg-red-600">Details</button>
      </Link>
      <Link to={`/update/${_id}`}>
      <button className="btn bg-red-600">Update</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CartDetails;