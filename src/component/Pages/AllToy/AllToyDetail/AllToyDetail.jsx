import { useLoaderData } from "react-router-dom";
import useTitel from "../../../UseTitel/UseTitle";

const AllToyDetail = () => {
    useTitel('Toy Details Page')
    const detail = useLoaderData()
    const { selarName, email, productName, photoUrl, subCategory, price, rating, quantity, description } = detail;
    return (
        <div className="container mx-auto px-4 md:px-0 md:py-7">
            <div className="grid md:grid-cols-3 gap-7">
                <div>
                    <img src={photoUrl} alt="" className="w-full h-full rounded-md" />
                </div>
                <div className=" h-full md:border-x-2 md:ps-7 md:border-indigo-200">
                    <div>
                        <h1 className="text-[25px] font-bold mt-10">Selar Name :     {selarName}</h1>
                        <h2 className="text-[18px] font-semibold mt-2 mb-14">Eamail :    {email}</h2>
                        <h3 className="text-[20px] font-bold mb-2">Product Name :   {productName} Drone Camera</h3>
                        <p className="text-[20px] font-medium mb-2">Sub-Category :  {subCategory}</p>
                        <p className="text-[20px] font-medium mb-2">Price :  ${price}</p>
                        <p className="text-[20px] font-medium mb-2">Rating :     {rating} Star</p>
                        <p className="text-[20px] font-medium mb-2">Available :  {quantity} Items</p>
                    </div>
                </div>
                <div className="w-full h-full md:border-x-2 md:px-7  md:border-indigo-200">
                    <h1 className="text-[25px] font-bold">** Product Description ** </h1>
                    <p className="pt-3"><span className="text-[17px] font-bold pe-4">Description : </span>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AllToyDetail;