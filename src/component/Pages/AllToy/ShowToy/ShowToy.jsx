
const ShowToy = ({ data }) => {
    console.log(data)
    const { productName, selarName, photoUrl, subCategory, price, quantity, } = data
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
                <button className="btn btn-gray">Details</button>
            </th>
        </tr>);
};

export default ShowToy;