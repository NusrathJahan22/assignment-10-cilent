import React from 'react';
import Swal from 'sweetalert2'

const AddProduct = () => {
    const handelAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const Name = form.Name.value;
        const Brand = form.Brand.value;
        const Type = form.Type.value;
        const Price = form.Price.value;
        const Description = form.Description.value;
        const Rating = form.Rating.value;
        const Photo = form.Photo.value;

        const addProduct = {
            Name, Brand, Type, Price, Description, Rating, Photo
        }
        console.log(addProduct);


        fetch('http://localhost:5000/carshop', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) 
                    Swal.fire({
                        title: 'success!',
                        text: 'user added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            )}

    
    return (
        <div className='font-bold text-center m-10 p-4 text-red-600'>
            <h3 className='text-4xl'>Add Products</h3>
            <form onSubmit={handelAddProduct}>
                {/* row 1 */}
                <div className=''>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Car Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Name" placeholder="Car Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Brand" placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* row 2 */}

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Type" placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    {/* row 3 */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Description" placeholder="Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-8 flex">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block bg-black mt-4 ml-5" />
            </form>
        </div>
    );
};

export default AddProduct;