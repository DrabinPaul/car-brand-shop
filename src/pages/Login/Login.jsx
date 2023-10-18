import  { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {

    const { logIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    console.log('locaction login', location);
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState('');


    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setLoginError('');

        let validation =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;



        if (!validation.test(password)) {
            setLoginError("Worng password");
            return;
        }

        let emailValidation =
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (!emailValidation.test(email)) {
            alert("Email is invalid");
            return;
        }

        logIn(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleLogin = () => {
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
                        <div className="text-center lg:text-left">
                            <div className='flex justify-center pb-5'>
                                <img src="https://pro-theme.com/html/dvents/assets/media/general/ui-decor-1.png" alt="" />
                            </div>
                            <h1 className="text-5xl text-center font-extrabold"><span className='text-[#fe3e01]'>Login</span> now!</h1>
                            <p className="py-6 text-center text-[#777]">Step into our magical wedding world and be part of our love story. Login now to share our special day</p>

                        </div>

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body">
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
                                        <p className="text-center mt-5">Do not have an account?<Link className="text-[#fe3e01] font-bold" to="/register"> Register</Link></p>
                                    </label>
                                    <label>
                                        <div className='flex justify-center items-center text-base font-semibold'>
                                            Or signin with
                                            <span className='pl-2 cursor-pointer' onClick={handleGoogleLogin}>
                                                <span className='text-2xl'><FcGoogle></FcGoogle></span>
                                            </span>
                                        </div>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#fe3e01] text-white">Login</button>
                                </div>
                            </form>
                            <div className='pb-2'>
                                {
                                    loginError && <p className='text-red-500 text-sm text-center font-bold '>{loginError}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;