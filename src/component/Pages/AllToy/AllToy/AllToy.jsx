import { useEffect, useState } from "react";
import ShowToy from "../ShowToy/ShowToy";

const AllToy = () => {

    const [datas, setAllData] = useState([])


    useEffect(() => {
        fetch(`https://toys-server-site-morsalin102666.vercel.app/cameras`)
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    const search = e => {
        const valu = e.target.value
        fetch(`https://toys-server-site-morsalin102666.vercel.app/searching?productName=${valu}`)
            .then(res => res.json())
            .then(data => setAllData(data))
    }

    

    return (
        <div>
            <div className="container mx-auto">
                <div className="md:flex justify-between items-center mb-8">
                    <div className="form-control">
                        <div className="input-group">
                            <input onChange={search} type="text" placeholder="Search…" className="input input-bordered md:w-[500px] mb-7 md:mb-0" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    
                </div>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToy;