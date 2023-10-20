import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductUpdate = () => {

    const updateProduct = useLoaderData();
    const { _id, name, brandName, type, price, photoUrl, description, rating } = updateProduct;
  

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;
        const photoUrl = form.photoUrl.value;

        const newUpdatedProduct = { name, brandName, type, rating, price, description, photoUrl };
        console.log(newUpdatedProduct);
 

        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUpdatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Product Updated succesfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }




    return (
        <div>
            <div className=" relative">
                <div
                    className="absolute top-0 left-0 w-full h-full z-10"
                    style={{
                        backgroundImage: 'url("https://images.pexels.com/photos/6894428/pexels-photo-6894428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>
                <div className="absolute top-0 left-0 w-full h-full z-20 bg-black opacity-70"></div>
                <div className="relative z-30 text-center p-10 text-white">
                    <h2 className="text-5xl font-bold my-5">Update Product: <span className='text-[#EA001E]'>{updateProduct.name}</span></h2>
                    <p className="w-[800px] mx-auto">
                        Enhance your automotive listings by adding your products to DMOTORS. Reach a wide audience of car enthusiasts and buyers. Showcase your vehicles, parts, or accessories with ease. It's the ultimate platform to connect with potential customers and make your automotive offerings stand out. List your products on <span className="text-[#EA001E]">DMOTORS</span> today and drive your sales to new heights!
                    </p>
                </div>
            </div>
            <div className="p-20 bg-[#f4f1f0]">
                <form onSubmit={handleUpdateProduct}>
                    {/* form row-1  */}
                    <div className="md:flex gap-5 mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base font-medium">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered md:w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label ml-4">
                                <span className="label-text text-base font-medium">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brandName" defaultValue={brandName} placeholder="Brand Name" className="input input-bordered md:w-full ml-4" />
                            </label>
                        </div>
                    </div>
                    {/* form row-2  */}
                    <div className="md:flex gap-5 mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base font-medium">Product Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" defaultValue={type} placeholder="Enter Product type" className="input input-bordered md:w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label ml-4">
                                <span className="label-text text-base font-medium">Product Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={price} placeholder="Enter Product Price" className="input input-bordered md:w-full ml-4" />
                            </label>
                        </div>
                    </div>
                    {/* form row-3  */}
                    <div className="md:flex gap-5 mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base font-medium">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered md:w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label ml-4">
                                <span className="label-text text-base font-medium">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" defaultValue={description} placeholder="Enter Short Description" className="input input-bordered md:w-full ml-4" />
                            </label>
                        </div>
                    </div>

                    {/* form row-4  */}
                    <div className="form-control w-full pb-8">
                        <label className="label">
                            <span className="label-text text-base font-medium">Product Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photoUrl" defaultValue={photoUrl} placeholder="Enter Product photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="flex justify-center">
                        <input type="submit" value="Add Product" className="btn text-white w-1/2 bg-[#EA001E]" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ProductUpdate;