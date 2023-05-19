
const UpdateToy = () => {


    const addToyForm = event => {
        event.preventDefault()

        const form = event.target;
        const selarName = form.selarName.value;
        const email = form.email.value;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const addInfo = { selarName, email, name, photoUrl, subCategory, price, rating, quantity, description }

        console.log(addInfo)

        fetch('http://localhost:5000/cameras', {
            method: "POST",
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
                            <input className="border px-3 py-3 w-full rounded-md"  type="text" name="selarName"/>
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Email</label>
                            <input className="border px-3 py-3 w-full rounded-md"  type="text" name="email"/>
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Name</label>
                            <input className="border px-3 py-3 w-full rounded-md" type="text" name="name"/>
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Picture URL</label>
                            <input className="border px-3 py-3 w-full rounded-md" type="text" name="photoUrl"/>
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Sub-category</label>
                            {/* <input className="border px-3 py-3 w-full rounded-md" type="select" name="subCategory" placeholder="Sub-category" /> */}
                            <select name="subCategory" className="border px-3 py-3 w-full rounded-md">
                                <option disabled selected></option>
                                <option>Drone</option>
                                <option>DSLR</option>
                                <option>HD Camera</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Price</label>
                            <input className="border px-3 py-3 w-full rounded-md" type="text" name="price"/>
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Rating</label>
                            <input className="border px-3 py-3 w-full rounded-md" type="text" name="rating"/>
                        </div>
                        <div>
                            <label className="block mb-4 font-bold">Available quantity</label>
                            <input className="border px-3 py-3 w-full rounded-md" type="text" name="quantity"/>
                        </div>
                    </div>
                    <div>
                        <label className="block my-4 font-bold">Detail description</label>
                        <textarea className="border px-3 py-3 w-full  h-[200px] rounded-md"  name="description"></textarea>
                    </div>
                    <div className="mt-10">
                        <input className="btn btn-outline w-full font-bold hover:bg-gray-500" type="submit" value="Add A Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;