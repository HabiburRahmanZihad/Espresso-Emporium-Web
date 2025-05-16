import { FaEye, FaTrash } from 'react-icons/fa';
import { IoPencil } from 'react-icons/io5';
import { Link } from 'react-router';

const CoffeCard = ({ handleDeleteCoffee, coffee }) => {
    const { _id, name, taste, price, photo } = coffee;
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#f7f5f2] rounded-xl shadow p-6  gap-6">

            {/* Coffee Image */}
            <div className="w-2/3 md:w-1/3">
                <img
                    src={photo} // ✅ Corrected path if using public folder
                    alt="Black Coffee"
                    className="w-full object-contain"
                />
            </div>

            {/* Coffee Details & Buttons */}
            <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between items-center">

                {/* Details */}
                <div className="text-center md:text-left">
                    <p className="text-lg font-semibold">
                        <span className="text-[#1B1A1A] font-bold">Name:</span>{" "}
                        <span className="text-[#5C5B5B]">{name}</span>
                    </p>

                    <p className="text-lg font-semibold mt-2">
                        <span className="text-[#1B1A1A] font-bold">Taste:</span>{" "}
                        <span className="text-[#5C5B5B]">{taste}</span>
                    </p>

                    <p className="text-lg font-semibold mt-2">
                        <span className="text-[#1B1A1A] font-bold">Price:</span>{" "}
                        <span className="text-[#5C5B5B]">{price} Taka</span>
                    </p>

                </div>

                {/* Action Buttons */}
                <div className="flex mt-4 md:mt-0 md:flex-col gap-3 md:ml-6">


                    <Link
                        to={`/details/${_id}`}
                        className="bg-[#D2B48C] text-white p-2 rounded hover:bg-[#C2A57A] ">
                        <FaEye className="w-10 h-10" />
                    </Link>

                    <Link
                        to={`/update/${_id}`}
                        className="bg-[#3C393B] hover:bg-gray-700 text-white p-2 rounded ">
                        <IoPencil className="w-10 h-10" />
                    </Link>

                    <button
                        onClick={() => handleDeleteCoffee(_id)}
                        className="bg-[#EA4744] hover:bg-red-600 text-white p-2 rounded ">
                        <FaTrash className="w-10 h-10" />
                    </button>

                </div>

            </div>
        </div>
    );
};

export default CoffeCard;