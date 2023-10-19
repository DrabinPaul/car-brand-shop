import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Counter from "./Counter/Counter";
import MakeItEasy from "./MakeItEasy/MakeItEasy";
import Welcome from "./WelcomePage/Welcome";

const Home = () => {
    const productCard = useLoaderData();
    return (
        <div>
            <Banner />
            <Welcome />
            <div className="max-w-4xl mx-auto my-10">
                <h1 className="text-center font-bold text-2xl text-[#EA001E] md:text-3xl lg:text-6xl mb-5">Our Featured Brands</h1>
                <p className="text-center text-[#777]">Explore Our Featured Car Brands: Discover automotive excellence with our curated selection of top car brands. From luxury icons to trusted favorites, find performance, style, and innovation. Elevate your journey today!</p>
            </div>
            <div className="md:grid grid-cols-3 gap-5 mx-20 mb-20">
                {productCard.map((product) => (
                    <Link className="relative card w-96 bg-base-100 shadow-xl image-full" to={`/productCard/${product.name}`} key={product.name}>
                        <figure><img src={product.img} alt="picture" /></figure>
                        <h2 className="text-white text-xl font-bold bottom-5 left-4 z-10 absolute">{product.name}</h2>
                    </Link>
                ))}
            </div>

            <MakeItEasy />
            <Counter />
        </div>
    );
};

export default Home;