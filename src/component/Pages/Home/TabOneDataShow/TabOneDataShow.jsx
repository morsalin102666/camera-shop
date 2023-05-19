
const TabOneDataShow = ({ data }) => {
    const { name, img, price, rating, model} = data
    return (
        <div>
            <div className="flex justify-between items-center mt-5 rounded-md">
                <div className="card card-side bg-base-100 shadow-xl">
                    <img src={img} alt="Movie" className="w-[400px] h-[300px] rounded-md"  />
                    <div className="card-body px-10">
                        <h2 className="card-title font-bold">{name}</h2>
                        <p><span className="font-semibold">Model :</span> {model}</p>
                        <p><span className="font-semibold">Price :</span> {price}</p>
                        <p><span className="font-semibold">Rating :</span> {rating}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary w-full">Detils</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabOneDataShow;