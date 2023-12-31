import { Helmet } from "react-helmet";
import About from "./About/About";
import Banner from "./Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Slider from "./Slider/Slider";
import SubscribeOffer from "./SubscribeOffer/SubscribeOffer";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> JSSA | Home </title>
            </Helmet>
            <Banner />
            <Slider />
            <PopularInstructors />
            <About />
            <PopularClasses />
            {/* TODO: Parallax use for customer reviews (M-74-8) */}
            <SubscribeOffer />
        </div>
    );
};

export default Home;