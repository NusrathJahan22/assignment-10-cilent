import { Link } from "react-router-dom";
import useAuth from "./useAuth";


const Register = () => {

    const {createUser} = useAuth();

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const register = { name, email, password }
        console.log(register);
    }
    return (
        <div>
            <p className='text-5xl text-center font-bold text-red-600 '>Please Register</p>
            <form onSubmit={handleRegister} className='md:w-3/4 lg:w-1/2 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="Name" placeholder="Name" className="input input-bordered" required name="name" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="photo" placeholder="photo" className="input input-bordered" required name="photo" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Do you have an account?</a>
                        <Link to='/login'>
                        <h2 className="text-red-600 font-semibold">Login</h2>
                        </Link>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-black text-white">Register</button>
                </div>
            </form>
        </div>

    );
};

export default Register;