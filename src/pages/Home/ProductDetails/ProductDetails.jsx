import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCar } from 'react-icons/fa';

const ProductDetails = () => {
    const productDetails = useLoaderData();
    console.log(productDetails);


    return (
        <div className="max-w-6xl mx-auto">

            
            <div>
                <div className="items-center flex justify-center mt-10">
                    <img className="h-[300px] lg:h-[500px] w-full lg:object-cover rounded-t-lg mb-5 p-5 lg:p-0 " src={productDetails.photoUrl} alt="" />
                </div>
                <div className='flex justify-center gap-10 my-5'>
                <h1 className="text-2xl font-bold pb-2 px-5 lg:p-0"><span className='text-[#777]'>Car Name: </span>{productDetails.name}</h1>
                <h1 className="text-2xl font-bold pb-2 px-5 lg:p-0"><span className='text-[#777]'>Car Type:</span> {productDetails.type}</h1>
                </div>
                <p className="font-medium text-center text-base pt-2 pb-2 text-[#777] p-5 lg:p-0">{productDetails.description}</p>
                <div className='flex justify-center mt-2'>
                <span className='text-[#EA001E] text-5xl'><FaCar></FaCar></span>
                </div>
                <div className='flex justify-center mb-2'>
                <hr className="w-[150px] border" style={{ borderColor: '#EA001E' }}/>
                </div>
                <p className="text-center font-bold text-2xl text-[#EA001E] pb-2">{productDetails.price}$</p>
                <div className=" flex justify-center">
                    <button className="btn bg-[#1f1f1f] text-[#EA001E] w-1/3 mb-10">Add To Cart</button>
                </div>

            </div>

        </div>

    );
};

export default ProductDetails;