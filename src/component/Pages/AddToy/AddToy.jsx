import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {

    const { user } = useContext(AuthContext)

    const addToyForm = event => {
        event.preventDefault()

        const form = event.target;
        const selarName = form.selarName.value;
        const email = form.email.value;
        const productName = form.productName.value;
        const photoUrl = form.photoUrl.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const addInfo = { selarName, email, productName, photoUrl, subCategory, price, rating, quantity, description }

        console.log(addInfo)

        fetch('https://toys-server-site-morsalin102666.vercel.app/cameras', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(addInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Thank you added you product',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
                form.reset()
            }
        })
    }


    return (
        <div className="container mx-auto">
            <h1 className="text-center text-[35px] font-bold">Add A Toy Form</h1>
            <div className="px-4 md:px-8 md:py-10 shadow-xl rounded-md">
                <form onSubmit={addToyForm}>
                    <div className="grid md:grid-cols-2 gap-8" >
                        <div>
                            <label className="block mb-4 font-bold">Seller Name</label>
                            <input className="border px-3 py-3 w-full rounded-md" required defaultValue={user && user.displayName} type="text" name="selarName" />
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Email</label>
                            <input className="border px-3 py-3 w-full rounded-md" required defaultValue={user && user.email} type="text" name="email" />
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Product Name</label>
                            <input className="border px-3 py-3 w-full rounded-md" required type="text" name="productName" placeholder="Name" />
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Picture URL</label>
                            <input className="border px-3 py-3 w-full rounded-md" required type="text" name="photoUrl" placeholder="Picture URL" />
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Sub-category</label>
                            {/* <input className="border px-3 py-3 w-full rounded-md" type="select" name="subCategory" placeholder="Sub-category" /> */}
                            <select name="subCategory" className="border px-3 py-3 w-full rounded-md">
                                <option disabled selected>select category</option>
                                <option>Drone</option>
                                <option>DSLR</option>
                                <option>HD Camera</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Price</label>
                            <input className="border px-3 py-3 w-full rounded-md" required type="text" name="price" placeholder="Price" />
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Rating</label>
                            <input className="border px-3 py-3 w-full rounded-md" required type="text" name="rating" placeholder="Rating" />
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Available quantity</label>
                            <input className="border px-3 py-3 w-full rounded-md" required type="text" name="quantity" placeholder="Available quantity" />
                        </div>
                    </div>
                    <div>
                        <label className="block my-4 font-bold">Detail description</label>
                        <textarea className="border px-3 py-3 w-full  h-[200px] rounded-md" required placeholder="Detail description" name="description"></textarea>
                    </div>
                    <div className="mt-10">
                        <input className="btn btn-outline w-full font-bold hover:bg-gray-500" type="submit" value="Add A Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;