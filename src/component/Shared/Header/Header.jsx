import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {

    const { user, logOutEmail } = useContext(AuthContext)
    const logOutButton = () => {
        logOutEmail()
    }

    return (
        <div className="bg-base-300 mb-[50px]">
            <div className="navbar bg-base-300 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/allToy'}>All Toy</Link></li>
                            {
                                user && <>
                                    <li><Link to={'/myToy'}>My Toy</Link></li>
                                    <li><Link to={'/addToy'}>Add A Toy</Link></li>
                                </>
                            }
                            <li><Link to={'/blog'}>Blogs</Link></li>
                            <li><Link to={'/signUp'}>SignUp</Link></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl text-[35px] font-bold">Camera Shop <img className="w-[50px]" src="https://www.freepnglogos.com/uploads/camera-logo-png/artful-wonder-photography-logo-10.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/allToy'}>All Toy</Link></li>
                        {
                            user && <>
                                <li><Link to={'/myToy'}>My Toy</Link></li>
                                <li><Link to={'/addToy'}>Add A Toy</Link></li>
                            </>
                        }
                        <li><Link to={'/blog'}>Blogs</Link></li>
                        <li><Link to={'/signUp'}>SignUp</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user
                            ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
                                    {
                                        user.displayName && <li><a>{user.displayName}</a></li>
                                    }
                                    {
                                        user.email && <li><a>{user.email}</a></li>
                                    }
                                    <div className="flex justify-center mt-3">
                                        <button onClick={logOutButton} className="btn btn-outline">SignOut</button>
                                    </div>
                                </ul>
                            </div>
                            :
                            <dvi><Link to={'/login'} className="btn btn-outline">Login</Link></dvi>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;