import React from 'react';

const Login = () => {
  const handleLogin= e =>{
e.preventDefault()
const form = e.target;
const name =form.name.value;
const email =form.email.value;
const password =form.password.value;
const doLogin={name,email,password}
console.log(doLogin);
  }
    return (
        <div>
           <p className='text-5xl text-center font-bold '>Please Login </p>
           <form  onSubmit={handleLogin} className='md:w-3/4 lg:w-1/2 mx-auto'>
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
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required name="password" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-black text-white">Login</button>
        </div>
      
           </form>
           
           

        </div>

    );
};

export default Login;