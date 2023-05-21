import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Footer = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="bg-base-300 mt-[60px]">
            <footer className="footer p-10 text-base-content container mx-auto">
                <div>
                    <Link to={'/'}><img className="w-[100px]" src="https://www.freepnglogos.com/uploads/camera-logo-png/artful-wonder-photography-logo-10.png" alt="" /></Link>
                    <p>Camera Shop Ltd.<br />All Everithin Electronic Product 2023</p>
                </div>
                <div>
                    <span className="footer-title">Service</span>
                    <Link to={"/"}><a className="link link-hover">Home</a></Link>
                    {
                        user && <div>
                            <Link to={"/allToy"}><a className="link link-hover">All Toy</a></Link>
                        </div>
                    }
                    {
                        user && <div>
                            <Link to={"/myToy"}><a className="link link-hover">My Toy</a></Link>
                        </div>
                    }
                    <Link to={"/blog"}><a className="link link-hover">Blog</a></Link>
                    <Link to={"/signUp"}><a className="link link-hover">SignUp</a></Link>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;