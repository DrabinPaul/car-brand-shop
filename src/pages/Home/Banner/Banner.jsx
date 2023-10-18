import { Link } from 'react-router-dom';

const Banner = () => {
  const bannerStyle = {
    backgroundImage: 'url("https://images.pexels.com/photos/10874928/pexels-photo-10874928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };


  return (
    <div className="hero min-h-[600px]" style={bannerStyle}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white">Hello there</h1>
          <p className="py-6 text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <Link to="/get-started" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
