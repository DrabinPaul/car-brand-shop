import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const targetCount = 2600;
        const duration = 3000;
        const step = (targetCount / duration) * 10;

        const interval = setInterval(() => {
            if (count < targetCount) {
                setCount(count + step);
            } else {
                setCount(targetCount);
                clearInterval(interval);
            }
        }, 10);

        return () => clearInterval(interval);
    }, [count]);

    return (
        <div>
            <div className='text-center my-5'>
                <p className='text-3xl font-bold'>We Have Sell Over <span className='text-[#EA001E]'>{Math.floor(count)}+</span> Cars</p>
            </div>
        </div>
    );
};

export default Counter;
