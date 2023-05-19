import Allbam from "../Allbam/Allbam";
import Carousel from "../Carousel/Carousel";
import Tabs from "../Tabs/Tabs";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Carousel></Carousel>
            <Allbam></Allbam>
            <Tabs></Tabs>
        </div>
    );
};

export default Home;