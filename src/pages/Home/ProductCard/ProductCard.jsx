import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './style.css';

import { FreeMode, Pagination } from 'swiper/modules';



const ProductCard = () => {

    const [products, setProducts] = useState([]);

    const brandProduct = useLoaderData();
    console.log(brandProduct);


    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const filterProducts = products.filter((product) =>
        product.brandName.toLowerCase() === brandProduct.name.toLowerCase()
    );

    return (
        <div>
            <div className="mt-20">
                <div className="text-center mb-10">
                    <h2 className="text-5xl font-extrabold text-center pb-2 text-[#EA001E]">New Collection</h2>
                    <p className="text-[#777]">Experience BMW: Luxury, Power, Precision. Elevate Your Drive</p>
                </div>

                <div className="mb-10">
                    <>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src="https://images.pexels.com/photos/17245098/pexels-photo-17245098/free-photo-of-toyota-supra-on-a-parking-lot-on-the-roof-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://images.pexels.com/photos/10905510/pexels-photo-10905510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://images.pexels.com/photos/14292944/pexels-photo-14292944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://images.pexels.com/photos/3954444/pexels-photo-3954444.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://images.pexels.com/photos/10549262/pexels-photo-10549262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </SwiperSlide>
                            

                        </Swiper>
                    </>
                </div>

            </div>
            <div className="my-20">
                <div>
                    <h2 className="text-5xl font-extrabold text-center pb-2 text-[#EA001E]">Products</h2>
                    <p className="text-center text-[#777]">Discover your dream car with us.</p>
                </div>
                <div className="flex justify-center items-center">
                    <div className="md:grid grid-cols-2 gap-20 m-10 text-center">
                        {filterProducts.map((product) => (
                            <div key={product._id} className="card card-compact  md:w-[350px] lg:w-[450px] bg-base-100 mb-5 shadow-lg">
                                <figure>
                                    <img className="rounded-t-lg w-full h-[200px] lg:h-[300px] lg:w-[450px]" src={product.photoUrl} alt="picture" />
                                </figure>
                                <div className="card-body rounded-b-lg h-[250px]">
                                    <h2 className="text-2xl font-extrabold text-[#EA001E]">{product.name}</h2>

                                    <div className="flex justify-between mt-5">
                                        <h2 className="text-2xl font-bold"><span className="text-[#777]">Brand:</span> {product.brandName}</h2>
                                        <h2 className="text-2xl font-bold"><span className="text-[#777]">Type:</span> {product.type}</h2>
                                    </div>
                                    <div className="flex justify-between">
                                        <h2 className="text-2xl font-bold"><span className="text-[#777]">Rating:</span> {product.rating}/5</h2>
                                        <h2 className="text-2xl font-bold"><span className="text-[#777]">Price:</span> {product.price}$</h2>
                                    </div>
                                    <div className="card-actions justify-center mt-2">
                                        <button className='text-xl flex justify-center items-center px-8 py-1 bg-[#EA001E] font-semibold text-white rounded-full hover:bg-[#807676] transition duration-300 ease-in-out'>Update</button>
                                        <button className='text-xl flex justify-center items-center px-8 py-1 bg-[#EA001E] font-semibold text-white rounded-full hover:bg-[#807676] transition duration-300 ease-in-out'>Details</button>
                                    </div>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
