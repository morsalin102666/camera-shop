import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SingUp = () => {
    const [error, setError] = useState('')
    const { createNewUser, updateUserProfile } = useContext(AuthContext)

    const signUpPage = event => {
        event.preventDefault()

        setError('')

        const form = event.target;
        const userName = form.userName.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length >= 6) {
            createNewUser(email, password)
                .then(result => {
                    Swal.fire({
                        title: 'Compleate SignUp',
                        text: 'Thank you success your signUp',
                        icon: 'Success',
                        confirmButtonText: 'ok'
                      })
                      console.log(result)
                    updateProfileUser(userName, photoUrl)
                    form.reset()
                })
                .catch(error => {
                    setError(error.message)
                })
        }
        else {
            return alert('plesh musbe 6 carector password')
        }

        const updateProfileUser = (userName, photoUrl) => {
            const profile = {
                photoURL: photoUrl,
                displayName: userName
            }
            updateUserProfile(profile)
            .then(result => {console.log(result.user)})
            .catch(error => {setError(error.message)})
        }


    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="py-20">
                    <div className="card w-[370px] lg:w-[700px] shadow-2xl bg-base-100">
                        <h1 className="text-center pt-8 text-3xl font-bold">Sign Up Form</h1>
                        <form onSubmit={signUpPage} className="card-body">
                            <div className="flex justify-between">
                                <div className="form-control w-[48%]">
                                    <label className="label">
                                        <span className="label-text">User name</span>
                                    </label>
                                    <input type="text" required name="userName" placeholder="User Name" className="input input-bordered" />
                                </div>
                                <div className="form-control w-[47%]">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="url" required name="photoUrl" placeholder="Photo Url" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <p className="mt-5 ml-3">{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-[gray]">Sign Up</button>
                            </div>
                            <Link className="mt-5 text-center hover:underline" to={'/login'}><p >Alrady have a account to <span className="font-bold text-blue-900">Login</span></p></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;