import Swal from 'sweetalert2';

const Hero = () => {
    const handleMe = () => {
        // scroll to the top of the page
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        });
    };
    return (
        <>
            <div className="bg-[url('/public/assets/more/3.png')] bg-cover bg-center bg-no-repeat min-h-[calc(100vh-90px)] ">

                <div className='py-[300px] px-4 md:px-4 lg:px-0 lg:w-1/2 lg:ml-auto lg:mr-18 space-y-5'>

                    <h1 className='text-[#FFFFFF] text-[40px] md:text-[50px] rancho'>Would you like a Cup of Delicious Coffee?</h1>

                    <p className='text-[#FFFFFF] '>It's coffee time - Sip & Savor - Relaxation in every sip!  Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>

                    <button
                        onClick={handleMe}
                        className=' text-[#242222] bg-[#E3B577] rancho text-[24px]   px-6 py-3 hover:bg-transparent hover:text-white border-2 hover:border-white cursor-pointer'>Learn More</button>

                </div>
            </div>
        </>
    );
};

export default Hero;