import { FaHandPointLeft } from "react-icons/fa";
import { Link } from "react-router";

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Link
                to="/"
                className="rancho text-[#374151] text-2xl sm:text-3xl flex items-center gap-2 my-10"
            >
                <FaHandPointLeft />
                Back to home
            </Link>
            <img src="/public/assets/404/404.gif" alt="" />
        </div>
    );
};

export default Error;