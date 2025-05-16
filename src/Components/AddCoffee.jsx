import { FaHandPointLeft } from 'react-icons/fa';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AddCoffee = () => {


    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());

        // Send the data to the server
        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCoffee),
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                form.reset();
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                });
            });
    }

    return (
        <div className="bg-[url('/public/assets/more/11.png')] bg-cover bg-center bg-no-repeat py-10 px-4 flex justify-center items-start">
            <div className="w-full max-w-7xl mx-auto">
                {/* Back Link */}
                <Link
                    to="/"
                    className="rancho text-[#374151] text-2xl sm:text-3xl flex items-center gap-2 mb-8"
                >
                    <FaHandPointLeft />
                    Back to home
                </Link>

                {/* Form Container */}
                <div className="bg-[#f4f3f0] rounded-md shadow-md p-6 sm:p-10 lg:p-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-[#374151] mb-4 rancho">
                        Add New Coffee
                    </h2>
                    <p className="text-center text-[rgba(27,26,26,0.7)] text-sm sm:text-base max-w-2xl mx-auto mb-10">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>

                    {/* Form */}
                    <form
                        onSubmit={handleAddCoffee}
                        className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div>
                                <label className="block text-xl font-semibold text-[rgba(27,26,26,0.8)] mb-1">Name</label>
                                <input
                                    type="text" name='name'
                                    required
                                    placeholder="Enter coffee name"
                                    className="w-full px-4 py-2  rounded-md bg-white  focus:outline-none focus:ring-2 focus:ring-[#b58969] transition"
                                />
                            </div>

                            {/* Price */}
                            <div>
                                <label className="block text-xl font-semibold text-[rgba(27,26,26,0.8)] mb-1">Price</label>
                                <input
                                    type="text"
                                    name='price'
                                    required
                                    placeholder="Enter Price"
                                    className="w-full px-4 py-2 rounded-md bg-white  focus:outline-none focus:ring-2 focus:ring-[#b58969] transition"
                                />
                            </div>

                            {/* Supplier */}
                            <div>
                                <label className="block text-xl font-semibold text-[rgba(27,26,26,0.8)] mb-1">Supplier</label>
                                <input
                                    type="text"
                                    name='supplier'
                                    required
                                    placeholder="Enter coffee supplier"
                                    className="w-full px-4 py-2 rounded-md bg-white  focus:outline-none focus:ring-2 focus:ring-[#b58969] transition"
                                />
                            </div>

                            {/* Taste */}
                            <div>
                                <label className="block text-xl font-semibold text-[rgba(27,26,26,0.8)] mb-1">Taste</label>
                                <input
                                    type="text"
                                    name='taste'
                                    required
                                    placeholder="Enter coffee taste"
                                    className="w-full px-4 py-2 rounded-md bg-white  focus:outline-none focus:ring-2 focus:ring-[#b58969] transition"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-xl font-semibold text-[rgba(27,26,26,0.8)] mb-1">Category</label>
                                <input
                                    type="text"
                                    name='category'
                                    required
                                    placeholder="Enter coffee category"
                                    className="w-full px-4 py-2 rounded-md bg-white  focus:outline-none focus:ring-2 focus:ring-[#b58969] transition"
                                />
                            </div>

                            {/* Details */}
                            <div>
                                <label className="block text-xl font-semibold text-[rgba(27,26,26,0.8)] mb-1">Details</label>
                                <input
                                    type="text"
                                    name='details'
                                    required
                                    placeholder="Enter coffee details"
                                    className="w-full px-4 py-2 rounded-md bg-white  focus:outline-none focus:ring-2 focus:ring-[#b58969] transition"
                                />
                            </div>
                        </div>

                        {/* Photo */}
                        <div>
                            <label className="block text-xl font-semibold text-[rgba(27,26,26,0.8)] mb-1">Photo</label>
                            <input
                                type="text"
                                name='photo'
                                required
                                placeholder="Enter photo URL"
                                className="w-full px-4 py-2 rounded-md bg-white  focus:outline-none focus:ring-2 focus:ring-[#b58969] transition"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-[#c69c6d] text-[#331A15] py-2 border-2 border-[#331A15] rounded-md hover:bg-[#b58969] transition font-semibold rancho text-xl"
                            >
                                Add Coffee
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;
