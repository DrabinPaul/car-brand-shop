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
            <div className="text-center m-20 font-bold text-2xl text-red-700 md:text-3xl lg:text-6xl">
                <h1>categorization</h1>
            </div>
            <div className="md:grid grid-cols-3 gap-5 m-10">
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