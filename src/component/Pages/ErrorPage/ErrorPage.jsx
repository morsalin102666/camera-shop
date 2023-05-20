import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center w-full h-[100vh]">
            <div>
                <h1 className="text-[150px] text-[#151666] font-bold">Oops.<span className="text-[200px]">.</span><span className="font-extrabold"><i className="text-[270px]">!</i></span></h1>
                <h3 className="text-center text-[25px] font-semibold">Page not found <span className="text-[40px] font-extrabold text-red-700"><i>404</i></span> error</h3>
                <div className="flex justify-center mt-5">
                    <Link to={'/'} className="btn btn-outline">Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;