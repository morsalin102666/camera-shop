import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import ShowMyToy from "../ShowMyToy/ShowMyToy";

const MyToy = () => {
    const { user } = useContext(AuthContext)
    const [myToy, setMyToy] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/camera?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }, [])

    return (
        <div className="container mx-auto px-4 md:px-0">
            <div className="overflow-x-auto w-full">
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
                            ></ShowMyToy>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;