import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

  const { createUser } = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault()
    const form = e.target;
    // const name =form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const doLogin = { email, password }
    console.log(doLogin);
    createUser(email, password)
      .then(result => {
        console.log(result.user)
        const user = { email };
        fetch('https://assignment-10-server-acuzi24t1-nusrathjahan22s-projects.vercel.app/user',
          {
            method: 'POST',
            headers: {
              'content-type': 'aplication/json'
            },
            body: JSON.stringify(user)

          })
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: 'success!',
                text: 'user added successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            }
          })
      })
      .catch(error => {
        console.error(error)
      });
  }
  return (
    <div>
      <p className='text-5xl text-center font-bold text-red-600 '>Please Login </p>
      <form onSubmit={handleLogin} className='md:w-3/4 lg:w-1/2 mx-auto'>

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