import Swal from "sweetalert2";

const DataCart = ({ cart }) => {
    const { _id, Photo, Brand, Type, Name, Description, Price, Rating } = cart;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div>
            <div className="grid grid-cols-3">

                <div className="max-w-sm bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={Photo} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Brand Name :{Brand}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Description : {Description}</p>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-600">Delete</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DataCart;