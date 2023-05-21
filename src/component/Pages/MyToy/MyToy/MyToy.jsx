import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import ShowMyToy from "../ShowMyToy/ShowMyToy";
import Swal from "sweetalert2";

const MyToy = () => {
    const { user } = useContext(AuthContext)
    const [myToy, setMyToy] = useState([])

    useEffect(() => {
        fetch(`https://toys-server-site-morsalin102666.vercel.app/camera?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, [])

    const ascending = () => {
        fetch(`https://toys-server-site-morsalin102666.vercel.app/ascending?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }

    const descending = () => {
        fetch(`https://toys-server-site-morsalin102666.vercel.app/descending?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }

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
                        const findPost = myToy.filter(p => p._id  !== _id)
                        setMyToy(findPost)
                    })
            }
        })
    }

    return (
        <div className="container mx-auto px-4 md:px-0">
            <div className="overflow-x-auto w-full">
                <div className="mb-5">
                    <button onClick={ascending} className="btn btn-primary mr-[20px]">ascending</button>
                    <button onClick={descending} className="btn btn-primary">descending </button>
                </div>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Seller name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myToy.map(toy => <ShowMyToy
                                key={toy._id}
                                toy={toy}
                                deletPost={deletPost}
                            ></ShowMyToy>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;