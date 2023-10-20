import { FaCar } from 'react-icons/fa';

const Welcome = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto text-center mt-20 p-5 lg:p-0">
                <span className='flex justify-center'>
                    <FaCar className="text-6xl text-[#EA001E] mb-5"></FaCar></span>
                <h2 className="text-3xl lg:text-5xl mr-1 font-bold pb-5 ">WELCOME TO <span className="text-[#EA001E]">D</span>MOTORS</h2>
                <h3 className="text-xl font-semibold text-[#EA001E] pb-10">THE EASIEST WAY TO FIND YOUR NEXT CAR</h3>
                <p className='text-[#777]'>For 25 years, Car Leader has been raising the standard of used car retailing with one of the most innovative and reliable used vehicle programmes ever created. A comprehensive range of benefits as standard has evolved over time and, today, drivers can leave the forecourt with total reassurance and peace of mind. For used vehicles, we calculate a fair retail price based on a detailed analysis of comparable current and previous car listings in a given market. We call this estimate the Car Leader Instant Market Value.</p>
            </div>
            <div data-aos="fade-down" className="flex py-2 justify-center">
                <hr className="h-[4px] border-l-4" style={{ borderColor: '#EA001E', height: '70px' }} />
            </div>
        </div>
    );
};

export default Welcome;