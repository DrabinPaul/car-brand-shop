import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCart = () => {

    const cartLoader = useLoaderData();
    console.log(cartLoader);
    const [deleteCart, setdeleteCart] = useState(cartLoader);

    const handleDelete = (name) => {
        console.log(name);
        Swal.fire("Deleted");

        fetch(`https://brandshop-server-side-drabin-paul-n0c1iwb8i.vercel.app/cart/${name}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remainingCart = deleteCart.filter((cart) => cart.name !== name);
                    setdeleteCart(remainingCart);
                }
            });
    };

    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="md:grid grid-cols-2 gap-20 m-10 text-center">
                    {deleteCart.map((cart) => (
                        <div key={cart._id} className="flex justify-center">
                            <div>
                                <div className="bg-gray-100 rounded-md shadow-2xl mb-10">
                                    <div className="flex justify-center items-center">
                                        <img
                                            src={cart.photoUrl}
                                            className="lg:h-[450px] w-full rounded-sm"
                                        />
                                    </div>
                                    <div className="pt-5 h-[150px]">
                                        <h1 className="font-bold text-xl">Name: {cart.name}</h1>
                                        <h1 className="font-bold text-xl">Price: {cart.price}$</h1>
                                        <div className="card-actions justify-center mt-4">
                                            <button onClick={() => handleDelete(cart.name)} className='text-xl flex justify-center items-center px-8 py-1 bg-[#EA001E] font-medium text-white rounded-full hover:bg-[#807676] transition duration-300 ease-in-out'>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default MyCart;