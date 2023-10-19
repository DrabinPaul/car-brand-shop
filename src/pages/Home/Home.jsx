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
                    <Link to={`/productCard/${product.name}`} key={product.name}>
                        <img src={product.img} alt={product.name} />
                        <div className="border bg-gray-100 p-2 text-center font-bold uppercase">
                            <p>{product.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <MakeItEasy />
            <Counter />
        </div>
    );
};

export default Home;