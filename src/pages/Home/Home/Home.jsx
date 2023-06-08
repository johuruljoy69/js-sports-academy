import Banner from "./Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div>
            <Banner />
            <Slider />
            <PopularInstructors />
            <PopularClasses />
        </div>
    );
};

export default Home;