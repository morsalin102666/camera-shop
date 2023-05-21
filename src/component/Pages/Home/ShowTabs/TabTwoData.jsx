import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const TabTwoData = ({ data }) => {

    const {user} = useContext(AuthContext)
    const { _id, productName, photoUrl, price, rating } = data

    const tost = () => {
        if (user) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Welcome to Detail page',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Please logIn your account',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

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
                            <div onClick={tost} className="card-actions justify-end md:mt-[100px]">
                                <Link to={`/allToyDetail/${_id}`} className="btn btn-primary w-full">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabTwoData;