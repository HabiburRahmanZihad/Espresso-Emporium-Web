import { FaHandPointLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const { photo, name, price, supplier, taste, category, details } = useLoaderData();

    return (
        <div className="bg-[url('/assets/more/11.png')] bg-cover bg-center bg-no-repeat py-14 px-4 ">
            <div className="max-w-7xl mx-auto">
                {/* Back Link */}
                <Link
                    to="/"
                    className="rancho text-[#374151] text-2xl sm:text-3xl flex items-center gap-2 mb-10"
                >
                    <FaHandPointLeft />
                    Back to home
                </Link>

                {/* Content Card */}
                <div className="bg-[#F4F3F0] rounded-md shadow-lg p-6 sm:p-10 flex flex-col md:flex-row items-center  gap-10">
                    {/* Coffee Image */}
                    <div className="w-[300px] flex-shrink-0">
                        <img
                            src={photo}
                            alt="Coffee Cup"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="text-left text-[#1F2937] space-y-2 text-base sm:text-lg">
                        <h2 className="text-2xl sm:text-3xl text-[#331A15] font-bold rancho mb-4">
                            Niceties
                        </h2>

                        <p>
                            <span className="font-semibold">Name:</span> {name}
                        </p>
                        <p>
                            <span className="font-semibold">Price:</span> {price} Taka
                        </p>
                        <p>
                            <span className="font-semibold">Supplier:</span> {supplier}
                        </p>
                        <p>
                            <span className="font-semibold">Taste:</span> {taste}
                        </p>
                        <p>
                            <span className="font-semibold">Category:</span> {category}
                        </p>
                        <p>
                            <span className="font-semibold">Details:</span> {details}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;