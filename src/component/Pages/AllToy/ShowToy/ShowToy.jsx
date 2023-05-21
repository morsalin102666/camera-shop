import { Link } from "react-router-dom";

const ShowToy = ({ data }) => {
    const { _id, productName, selarName, photoUrl, subCategory, price, quantity, } = data
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
        </tr>);
};

export default ShowToy;