
import { NavLink } from 'react-router-dom';

const AllBrand = ({ brand }) => {

  const { Brand, Photo, Name } = brand
  return (
    <NavLink to={`/cardetails/${Brand}`}>
      <div>

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src={Photo} alt="" className='w-50 h-60' /></figure>
          <div className="card-body">
            <h2 className="card-title"> Brand Name:{Name}</h2>

          </div>
        </div>
      </div>
     </NavLink>
  );
};

export default AllBrand;