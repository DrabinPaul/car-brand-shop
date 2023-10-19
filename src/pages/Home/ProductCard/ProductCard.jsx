// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";



const ProductCard = () => {

//     const [products, setProducts]= useState([]);

//    const brandProduct = useLoaderData();
//    console.log(brandProduct);
    

//     useEffect(()=>{
//         fetch('http://localhost:5000/product')
//         .then(res=>res.json())
//         .then(data=>setProducts(data))
//     },[])

//     const filterProducts = products.filter((product)=>
//          product.brandName.toLowerCase() === brandProduct.name.toLowerCase()
//     );

    return (
        <div>
            <h2>this is card</h2>
        </div>
        // <div className="flex justify-center items-center">
        //     <div className="md:grid grid-cols-3 gap-5 m-10 text-center">
        //         {filterProducts.map((product) => (
        //             <div className="border bg-slate-100 p-5 shadow-2xl" key={product._id}>
        //                 <img src={product.photoUrl} alt={product.name} />
        //                 <h2 className="font-bold text-2xl">{product.name}</h2>
        //                 <h1 className="font-bold">{product.price}</h1>
        //             </div>
        //         ))}
        //     </div>
        // </div>
    );
};

export default ProductCard;
