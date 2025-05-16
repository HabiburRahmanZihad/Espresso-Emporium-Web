import React, { useState } from 'react';
import { SlCup } from 'react-icons/sl';
import CoffeCard from './CoffeCard';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const ShowCoffe = ({ initialCoffees }) => {
    const [coffees, setCoffees] = useState(initialCoffees);

    // delete coffee
    const handleDeleteCoffee = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Call the API to delete the coffee
                fetch(`http://localhost:3000/coffees/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // Filter out the deleted coffee from the state
                            const remainingCoffees = coffees.filter(coffee => coffee._id !== id);
                            setCoffees(remainingCoffees);
                            Swal.fire(
                                "Deleted!",
                                "Your file has been deleted.",
                                "success"
                            );
                        }
                    });
            }
        });
    }

    return (
        <div className=" bg-[url('/public/assets/more/1.png')]  bg-center bg-no-repeat">
            <div className='w-9/12 mx-auto py-[120px]  lg:py-[220px] text-center'>

                <p className='texl-lg text-[#1B1A1A] pb-5'>--- Sip & Savor ---</p>

                <h1 className='text-[#331A15] rancho text-5xl font-extrabold'>Our Popular Products</h1>

                <div className='flex justify-center items-center mt-[20px]'>
                    <Link
                        to='/add'
                        className='btn border-2 border-[#331A15]  bg-[#E3B577] hover:bg-transparent hover:text-[#331A15] text-white px-12 py-6 flex items-center gap-4 rancho text-[20px] rounded-lg '
                    >Add Coffee <SlCup color='#331A15' size={20} /></Link>
                </div>

                <div className='mt-[50px] grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    {/* Card 1 */}
                    {
                        coffees.map(coffee => <CoffeCard
                            key={coffee._id}
                            coffee={coffee}
                            handleDeleteCoffee={handleDeleteCoffee}
                        ></CoffeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ShowCoffe;