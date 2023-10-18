import Banner from "./Banner/Banner";
import MakeItEasy from "./MakeItEasy/MakeItEasy";
import Welcome from "./WelcomePage/Welcome";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <MakeItEasy></MakeItEasy>
        </div>
    );
};

export default Home;