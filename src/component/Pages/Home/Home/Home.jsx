import useTitel from "../../../UseTitel/UseTitle";
import Allbam from "../Allbam/Allbam";
import CameraBrand from "../CameraBrand/CameraBrand";
import CameraShop from "../CameraShop/CameraShop";
import Carousel from "../Carousel/Carousel";
import Tabs from "../Tabs/Tabs";


const Home = () => {
    useTitel('Home Page')
    return (
        <div className="container mx-auto">
            <Carousel></Carousel>
            <Allbam></Allbam>
            <div>
                <Tabs></Tabs>
            </div>
            <CameraBrand></CameraBrand>
            <CameraShop></CameraShop>
        </div>
    );
};

export default Home;