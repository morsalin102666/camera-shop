import { Link } from "react-router-dom";

const TabOneDataShow = ({ data }) => {

    const { _id, productName, photoUrl, price, rating } = data

    return (
        <div>
            <div className="md:p-4 mt-3 md:mt-0 mb-5 md:mb-0">
                <div className="flex justify-between">
                    <img src={photoUrl} alt="product img" className="w-[150px] mr-2 md:mr-5  h-[150px] md:w-[330px] md:h-[330px] rounded-md" />
                    <div className="">
                        <div>
                            <p className=" md:mt-5 md:mb-4 md:text-[25px]"><span className="font-semibold">Product Name : {productName}</span> </p>
                            <p className="md:mb-4"><span className="font-semibold">Price : ${price}</span> </p>
                            <p className="md:mb-4"><span className="font-semibold">Rating : {rating} Star</span></p>
                            <div className="card-actions justify-end md:mt-[100px]">
                                <Link to={`/allToyDetail/${_id}`} className="btn btn-primary w-full">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabOneDataShow;