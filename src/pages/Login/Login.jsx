import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaCar } from 'react-icons/fa';
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
            <div className='mb-10 lg:mb-20'>
                <div className="hero mt-7">
                    <div className="">
                        <div className="text-center mb-5 lg:text-left">
                            <div className='flex justify-center mb-2'>
                                <FaCar className="text-2xl lg:text-5xl text-[#EA001E]"></FaCar>
                            </div>
                            <h1 className="text-4xl text-center font-extrabold mb-4"><span className='text-[#EA001E]'>Login</span> now!</h1>
                        </div>

                        <div className='flex justify-center'>
                            <div className="card flex-shrink-0 w-[400px] max-w-sm shadow-2xl bg-base-100">
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
                                            <p className="text-center mt-5">Do not have an account?<Link className="text-[#EA001E] font-bold" to="/register"> Register</Link></p>
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
                                        <button className="btn bg-[#EA001E] text-white">Login</button>
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
        </div>
    );
};

export default Login;