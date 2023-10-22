import { useLoaderData} from "react-router";
import Swal from "sweetalert2";


const Details = () => {
    const cart = useLoaderData()
    console.log(cart)
    const { _id, Photo, Brand, Type, Name, Description, Price, Rating } = cart

    const handelAdd = () => {
        fetch(
            "http://localhost:5000/addcard",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cart),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "product Added Successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            })
            .catch(() => {
                Swal.fire({
                    icon: "warning",
                    title: "Oops...",
                    text: "Already Added",
                });
            });
    };

    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={Photo}
                        alt="image"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                    Brand Name :{Brand}
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">

                        Price :{Price} 
                    </h4>
                    <h2>Rating :{Rating}</h2>
                    <h2>Type :{Type}</h2>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        Description :{Description}
                    </p>
                    <a className="inline-block" href="#">
                        <button onClick={handelAdd}

                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Add to Cart
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="w-4 h-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Details;