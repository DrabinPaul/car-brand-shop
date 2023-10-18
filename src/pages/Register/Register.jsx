import  { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../providers/AuthProviders';

const Register = () => {

    const { createUser , signInWithGoogle } = useContext(AuthContext)
    const location = useLocation();
    console.log('locaction login', location);
    const navigate = useNavigate();
    const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password, photo);

        setSuccess('');
        setRegisterError('');

        if (password.length < 6) {
            setRegisterError("Password should be at least 6 characters or more")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError("Your password should have one capital letter")
            return;
        }
        else if(!/[!@#$%^&*]/.test(password)){
            setRegisterError("Your password should have one special character")
            return;
        }




        createUser(email, password)
            .then(result => {
                e.target.reset();
                setSuccess("User created successfully")
                console.log(result.user);
                navigate(location?.state ? location.state : "/");
                updateProfile(result.user, { displayName: name, photoURL: photo })
                    .then(() => {
                        e.target.reset();
                        window.location.href = "/";
                    })
                    .catch(error => {
                        console.error(error)
                    })
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/");
            })
            .catch((errror) => {
                console.error(errror);
            });
    };
    return (
        <div>
            <div className='mb-10 lg:mb-4'>
                <div className="hero min-h-screen">
                    <div className="hero-content  flex-col lg:flex-row">
                        <div className="text-center lg:text-left p-5">
                            <div className='flex justify-center pb-5'>
                                <img src="https://pro-theme.com/html/dvents/assets/media/general/ui-decor-1.png" alt="" />
                            </div>
                            <h1 className="text-5xl text-center font-extrabold"><span className='text-[#fe3e01]'>Register</span> your account now!</h1>
                            <p className="py-6 text-center text-[#777]">Register now to be a part of our wedding celebration! Do not miss out on updates, exclusive invitations, and important details. Join us in making our special day even more memorable!</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="Name" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <p className="text-center mt-5">Already have an account?<Link className="text-[#fe3e01] font-bold" to="/login"> Login</Link></p>
                                    </label>
                                    <label>
                                        <div className='flex justify-center items-center text-base font-semibold'>
                                            Or signin with
                                            <span className='pl-2 cursor-pointer' onClick={handleGoogle}>
                                                <span className='text-2xl'><FcGoogle></FcGoogle></span>
                                            </span>
                                        </div>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <button className="btn bg-[#fe3e01] text-white">Register</button>
                                </div>
                            </form>
                            <div className='pb-2'>
                                {
                                    success && <p className='text-green-500 text-base text-center font-medium '>{success}</p>
                                }
                                {
                                    registerError && <p className='text-red-500 text-sm text-center font-bold '>{registerError}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;