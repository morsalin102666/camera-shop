import { useEffect, useState } from "react";
import ShowToy from "../ShowToy/ShowToy";

const AllToy = () => {

    const [datas, setAllData] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/cameras`)
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    return (
        <div>
            <div className="container mx-auto">
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
                                <th>Vew Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                datas.map(data => <ShowToy
                                    key={data._id}
                                    data={data}
                                ></ShowToy>)
                            }
                            <hr />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToy;