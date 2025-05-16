import { FaHandPointLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { _id, name, taste, price, photo, supplier, category, details } = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());

        // Send the data to the server
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCoffee),
        })
            .then(response => response.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee Updated Successfully",
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
    // const { _id, name, taste, price, photo } = coffee;
    return (
        <div>
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
                            Update Existing Coffee Details
                        </h2>
                        <p className="text-center text-[rgba(27,26,26,0.7)] text-sm sm:text-base max-w-2xl mx-auto mb-10">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                        </p>

                        {/* Form */}
                        <form
                            onSubmit={handleUpdateCoffee}
                            className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-xl font-semibold text-[rgba(27,26,26,0.8)] mb-1">Name</label>
                                    <input
                                        type="text"
                                        name='name'
                                        defaultValue={name}
                                        className="w-full px-4 py-2  rounded-md bg-white  focus:outline-none focus:ring-2 focus:ring-[#b58969] transition"
                                    />
                                </div>

                                {/* Price */}
                                <div>
                                    <label className="block text-xl font-semibold text-[rgba(27,26,26,0.8)] mb-1">Price</label>
                                    <input
                                        type="text"
                                        name='price'
                                        defaultValue={price}
                                        className="w-full px-4 py-2 rounded-md bg-white  focus:outline-none focus:ring-2 focus:ring-[#b58969] transition"
                                    />
                                </div>

                                {/* Supplier */}
                                <div>
                                    <label className="block text-xl font-semibold text-[rgba(27,26,26,0.8)] mb-1">Supplier</label>
                                    <input
                                        type="text"
                                        name='supplier'
                                        defaultValue={supplier}
                                        className="w-full px-4 py-2 rounded-md bg-white  focus:outline-none focus:ring-2 focus:ring-[#b58969] transition"
                                    />
                                </div>

                                {/* Taste */}
                                <div>
                                    <label className="block text-xl font-semibold text-[rgba(27,26,26,0.8)] mb-1">Taste</label>
                                    <input
                                        type="text"
                                        name='taste'
                                        defaultValue={taste}
                                        className="w-full px-4 py-2 rounded-md bg-white  focus:outline-none focus:ring-2 focus:ring-[#b58969] transition"
                                    />
                                </div>

                                {/* Category */}
                                <div>
                                    <label className="block text-xl font-semibold text-[rgba(27,26,26,0.8)] mb-1">Category</label>
                                    <input
                                        type="text"
                                        name='category'
                                        defaultValue={category}
                                        className="w-full px-4 py-2 rounded-md bg-white  focus:outline-none focus:ring-2 focus:ring-[#b58969] transition"
                                    />
                                </div>

                                {/* Details */}
                                <div>
                                    <label className="block text-xl font-semibold text-[rgba(27,26,26,0.8)] mb-1">Details</label>
                                    <input
                                        type="text"
                                        name='details'
                                        defaultValue={details}
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
                                    defaultValue={photo}
                                    className="w-full px-4 py-2 rounded-md bg-white  focus:outline-none focus:ring-2 focus:ring-[#b58969] transition"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-[#c69c6d] text-[#331A15] py-2 border-2 border-[#331A15] rounded-md hover:bg-[#b58969] transition font-semibold rancho text-xl"
                                >
                                    Update Coffee Details
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;