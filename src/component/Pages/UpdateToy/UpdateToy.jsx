import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {

    const datas = useLoaderData()

    const {_id, selarName, email, name, photoUrl, subCategory, price, rating, quantity, description } = datas


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

        fetch(`https://toys-server-site.vercel.app/cameras/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    return (
        <div className="container mx-auto">
            <h1 className="text-center text-[35px] font-bold">Update Toy Form</h1>
            <div className="px-4 md:px-8 md:py-10 shadow-xl rounded-md">
                <form onSubmit={addToyForm}>
                    <div className="grid md:grid-cols-2 gap-8" >
                        <div>
                            <label className="block mb-4 font-bold">Seller Name</label>
                            <input className="border px-3 py-3 w-full rounded-md"  type="text" name="selarName" defaultValue={selarName}/>
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Email</label>
                            <input className="border px-3 py-3 w-full rounded-md"  type="text" name="email" defaultValue={email}/>
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Product Name</label>
                            <input className="border px-3 py-3 w-full rounded-md" type="text" name="productName" defaultValue={name}/>
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Picture URL</label>
                            <input className="border px-3 py-3 w-full rounded-md" type="text" name="photoUrl" defaultValue={photoUrl}/>
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Sub-category</label>
                            <select name="subCategory" className="border px-3 py-3 w-full rounded-md">
                                <input defaultValue={subCategory} />
                                <option>Drone</option>
                                <option>DSLR</option>
                                <option>HD Camera</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Price</label>
                            <input className="border px-3 py-3 w-full rounded-md" type="text" name="price" defaultValue={price}/>
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Rating</label>
                            <input className="border px-3 py-3 w-full rounded-md" type="text" name="rating" defaultValue={rating}/>
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Available quantity</label>
                            <input className="border px-3 py-3 w-full rounded-md" type="text" name="quantity" defaultValue={quantity}/>
                        </div>
                    </div>
                    <div>
                        <label className="block my-4 font-bold">Detail description</label>
                        <textarea className="border px-3 py-3 w-full  h-[200px] rounded-md"  name="description" defaultValue={description}></textarea>
                    </div>
                    <div className="mt-10">
                        <input className="btn btn-outline w-full font-bold hover:bg-gray-500" type="submit" value="Update Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;