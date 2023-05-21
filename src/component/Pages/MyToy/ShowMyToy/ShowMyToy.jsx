import { Link } from "react-router-dom";
import { GoPencil, GoTrashcan } from "react-icons/go";

const ShowMyToy = ({ toy, deletPost }) => {

    const { _id, productName, selarName, photoUrl, subCategory, price, quantity, } = toy



    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{selarName}</td>
            <td>{productName}</td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <td>{quantity} Items</td>
            <th>
                <Link to={`/allToyDetail/${_id}`} className="btn text-black border-none hover:text-white bg-gray-300">Details</Link>
            </th>
            <th>
                <Link to={`/updateToy/${_id}`}>
                    <div className="bg-gray-300 flex justify-center items-center rounded-full w-12 h-12">
                        <GoPencil className="text-[20px]"></GoPencil>
                    </div>
                </Link>
            </th>
            <th>
                {/* <button onClick={() => deletPost(_id)} className="btn btn-gray">Delete</button> */}
                <div className="bg-gray-300 flex justify-center items-center rounded-full w-12 h-12" onClick={() => deletPost(_id)}>
                    <GoTrashcan className="text-[20px]"></GoTrashcan>
                </div>
            </th>
        </tr>);
};

export default ShowMyToy;