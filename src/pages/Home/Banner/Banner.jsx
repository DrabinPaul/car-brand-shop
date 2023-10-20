import { BsArrowRight, BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Banner = () => {
  const overlayStyle = {
    backgroundImage: 'url("https://images.pexels.com/photos/3466513/pexels-photo-3466513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const contentStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  };

  return (
    <div className="relative min-h-[600px] mb-10">
      <div className="absolute top-0 left-0 w-full h-full" style={overlayStyle}></div>
      <div className="absolute top-0 left-0 w-full h-full" style={contentStyle}></div>
      <div className="absolute top-0 left-0 w-full h-full text-white">
        <div className='mt-36 lg:pl-10 p-5 lg:p-0'>
          <h2 className="text-5xl font-bold text-center lg:text-left my-5">We Don't Sell Cars We</h2>
          <h2 className="text-5xl text-center lg:text-left font-bold pb-5">Sell A Dream</h2>
          <p className=' text-center lg:text-left  lg:w-[400px] mb-5'>Discover a wide range of cars,from classics to modern marvels. List your vehicle for sale or find your dream ride effortlessly. </p>
          <h2 className="text-2xl text-center lg:text-left lg:text-4xl">Huge discount upto <span className='text-[#EA001E] font-bold'>20%</span></h2>
          <div className='pt-5'>
            <Link to='/login'><button className='text-3xl flex justify-center items-center px-7 py-2 bg-[#EA001E] font-semiboldz text-white rounded-full hover:bg-[#c92d33] transition duration-300 ease-in-out'>Book Now<span><BsArrowRightShort className='ml-4 text-5xl font-extrabold'></BsArrowRightShort></span></button></Link>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Banner;
