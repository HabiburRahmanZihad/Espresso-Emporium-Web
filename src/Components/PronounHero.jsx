import React from 'react';

const PronounHero = () => {
    return (
        <>
            <div className="bg-[url('/assets/more/10.png')] bg-cover bg-center bg-no-repeat">
                <div className='w-9/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 py-14'>
                    {/* Card 1 */}
                    <div className='space-y-6 '>
                        <img src="/assets/icons/1.png" alt="" />
                        <h1 className='rancho text-4xl text-[#331A15]'>Awesome Aroma</h1>
                        <p className='text-[#1B1A1A]'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    {/* Card 2 */}
                    <div className='space-y-6 '>
                        <img src="/assets/icons/2.png" alt="" />
                        <h1 className='rancho text-4xl text-[#331A15]'>High Quality</h1>
                        <p className='text-[#1B1A1A]'>We served the coffee to you maintaining the best quality</p>
                    </div>
                    {/* Card 3 */}
                    <div className='space-y-6 '>
                        <img src="/assets/icons/3.png" alt="" />
                        <h1 className='rancho text-4xl text-[#331A15]'>Pure Grades</h1>
                        <p className='text-[#1B1A1A]'>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    {/* Card 4 */}
                    <div className='space-y-6 '>
                        <img src="/assets/icons/4.png" alt="" />
                        <h1 className='rancho text-4xl text-[#331A15]'>Proper Roasting</h1>
                        <p className='text-[#1B1A1A]'>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PronounHero;