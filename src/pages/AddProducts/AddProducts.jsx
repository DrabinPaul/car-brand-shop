import Swal from "sweetalert2";


const AddProducts = () => {

    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;
        const photoUrl = form.photoUrl.value;

        const newProduct = { name, brandName, type, rating, price, description, photoUrl };
        console.log(newProduct);


        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Product added succesfully',
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
                        backgroundImage: 'url("https://images.pexels.com/photos/6894428/pexels-photo-6894428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // Replace with your image URL
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>
                <div className="absolute top-0 left-0 w-full h-full z-20 bg-black opacity-70"></div>
                <div className="relative z-30 text-center p-10 text-white">
                    <h2 className="text-5xl font-bold my-5">Add Product</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit maxime deleniti quis, corporis sit consectetur temporibus voluptate vel incidunt quas inventore ullam sapiente aliquid asperiores nemo fuga odio laboriosam dolor dolore. Iusto culpa quo blanditiis aperiam maiores id necessitatibus exercitationem animi suscipit.
                    </p>
                </div>
            </div>


            <div className="p-20 bg-[#f4f1f0]">
                <form onSubmit={handleAddProduct}>
                    {/* form row-1  */}
                    <div className="md:flex gap-5 mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base font-medium">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Product Name" className="input input-bordered md:w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label ml-4">
                                <span className="label-text text-base font-medium">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered md:w-full ml-4" />
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
                                <input type="text" name="type" placeholder="Enter Product type" className="input input-bordered md:w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label ml-4">
                                <span className="label-text text-base font-medium">Product Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Enter Product Price" className="input input-bordered md:w-full ml-4" />
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
                                <input type="number" name="rating" placeholder="Rating" className="input input-bordered md:w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label ml-4">
                                <span className="label-text text-base font-medium">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Enter Short Description" className="input input-bordered md:w-full ml-4" />
                            </label>
                        </div>
                    </div>

                    {/* form row-4  */}
                    <div className="form-control w-full pb-8">
                        <label className="label">
                            <span className="label-text text-base font-medium">Product Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photoUrl" placeholder="Enter Product photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <input type="submit" value="Add Product" className="btn btn-block text-white bg-[#EA001E]" />

                </form>
            </div>
        </div>
    );
};

export default AddProducts;