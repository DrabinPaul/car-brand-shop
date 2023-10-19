import { MdPersonSearch, MdPayment } from 'react-icons/md';
import { BiDollarCircle } from 'react-icons/bi';
import { CgFileDocument } from 'react-icons/cg';

const MakeItEasy = () => {
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
            <div className="absolute top-0 left-0 w-full h-full text-center text-white">
                <h2 className="text-5xl font-bold mt-20">We Make It Easy</h2>
                <h2 className="text-2xl  font-bold my-5">HOW IT WORKS</h2>
                <div data-aos="fade-down" className="flex py-2 absolute top-[200px] left-1/2">
                    <hr className="h-[4px] border-l-4" style={{ borderColor: '#EA001E', height: '70px' }} />
                </div>
                <div className='max-w-6xl mx-auto justify-center'>
                    <div className='grid grid-cols-4 mt-20 gap-20'>
                        <div>
                            <span className="relative">
                                <div className="absolute w-[200px] h-[200px] rounded-full" style={{ backgroundColor: '#EA001E' }}></div>
                                <MdPersonSearch className="text-2xl lg:text-8xl text-white relative z-10 top-4 left-14"></MdPersonSearch>
                                <h2 className='text-lg text-white font-medium felx justify-center relative z-10 top-2 right-4'>View Our <br />Inventory</h2>
                            </span>
                        </div>
                        <div>
                            <span className="relative">
                                <div className="absolute w-[200px] h-[200px] rounded-full" style={{ backgroundColor: '#EA001E' }}></div>
                                <BiDollarCircle className="text-2xl lg:text-8xl text-white relative z-10 top-5 left-12"></BiDollarCircle>
                                <h2 className='text-lg text-white font-medium felx justify-center relative z-10 top-4 right-4'>Value Your <br />Trade-In</h2>
                            </span>
                        </div>

                        <div>
                            <span className="relative">
                                <div className="absolute w-[200px] h-[200px] rounded-full" style={{ backgroundColor: '#EA001E' }}></div>
                                <CgFileDocument className="text-2xl lg:text-8xl text-white relative z-10 top-8 left-[50px]"></CgFileDocument>
                                <h2 className='text-lg text-white font-medium felx justify-center relative z-10 top-6 right-4'>Get Easy <br />Financing</h2>

                            </span>
                        </div>

                        <div>
                            <div className="relative">
                                <div className="absolute w-[200px] h-[200px] rounded-full" style={{ backgroundColor: '#EA001E' }}></div>
                                <MdPayment className="text-2xl lg:text-8xl text-white relative z-10 top-8 left-12"></MdPayment>
                                <h2 className='text-lg text-white font-medium felx justify-center relative z-10 top-5 right-4'>Make A <br />Payment</h2>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default MakeItEasy;
