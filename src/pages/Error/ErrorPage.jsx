import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
            <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-4xl font-bold text-[#EA001E]">Page Not Found</h2>
        <p className="mt-4 text-lg font-medium text-gray-700">Oops! The page you are looking for doesn not exist.</p>
        <Link
          to="/"
          className="mt-8 px-4 py-2 bg-[#EA001E] font-bold text-white rounded-full hover:bg-[#c92d33] transition duration-300 ease-in-out"
        >
          Go Back to Home
        </Link>
        </div>
    );
};

export default ErrorPage;