import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowMyToy = ({ toy }) => {

    const { _id, productName, selarName, photoUrl, subCategory, price, quantity, } = toy

    const deletPost = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toys-server-site.vercel.app/cameras/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

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
                <Link to={`/allToyDetail/${_id}`} className="btn btn-gray">Details</Link>
            </th>
            <th>
                <Link to={`/updateToy/${_id}`} className="btn btn-gray">Update</Link>
            </th>
            <th>
                <button onClick={() => deletPost(_id)} className="btn btn-gray">Delete</button>
            </th>
        </tr>);
};

export default ShowMyToy;