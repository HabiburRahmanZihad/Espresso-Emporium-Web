import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';

const Footer = () => {
    return (
        <>
            <div className="bg-[url('/assets/more/13.jpg')] bg-cover bg-center bg-no-repeat">
                <div className='w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 pt-28 pb-12'>
                    {/* Div 1 */}
                    <div className='space-y-7'>
                        <img className='w-20' src="/assets/more/logo1.png" alt="" />
                        <h1 className='text-5xl font-extrabold rancho text-[#331A15] '>Espresso Emporium</h1>
                        <p className='w-10/12 text-[#1B1A1A] text-md'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className='flex gap-4'>
                            <FaFacebook size={30} color='#331A15' />
                            <FaTwitter size={30} color='#331A15' />
                            <FaInstagram size={30} color='#331A15' />
                            <FaLinkedin size={30} color='#331A15' />
                        </div>
                        <p className='text-[#331A15] rancho text-5xl'>Get in Touch</p>
                        <p className='flex gap-4 items-center text-[#1B1A1A] text-lg'><IoCall size={20} />+88 01329 453 598</p>
                        <p className='flex gap-4 items-center text-[#1B1A1A] text-lg'><IoIosMail size={20} />info@gmail.com</p>
                        <p className='flex gap-4 items-center text-[#1B1A1A] text-lg'><FaLocationDot size={20} />72, Wall street, King Road, Chittagong</p>
                    </div>

                    {/* Div 2 */}
                    <div className='lg:pt-30 space-y-7'>

                        <h1 className='text-5xl rancho font-extrabold text-[#331A15] '>Connect with Us</h1>

                        <div className='flex flex-col gap-4 mt-10'>
                            <input type="text" placeholder="Name" className="input border-none focus:outline-[#E3B577] text-lg w-full " />
                            <input type="email" placeholder="Email" className="input border-none focus:outline-[#E3B577] text-lg w-full " />
                            <textarea placeholder="Message" className="textarea border-none focus:outline-[#E3B577] text-lg w-full "></textarea>
                        </div>

                        <button className='border-2 border-[#331A15] text-[#331A15] text-2xl rancho px-6 py-3 rounded-full cursor-pointer'>Send Message</button>

                    </div>
                </div>
            </div>
            <div className="bg-[url('/assets/more/24.jpg')] bg-cover bg-center bg-no-repeat">
                <h1 className='py-6 text-center  text-white text-2xl rancho'>Copyright Espresso Emporium ! All Rights Reserved</h1>
            </div>
        </>
    );
};

export default Footer;