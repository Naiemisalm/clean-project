import React from 'react';
import BucketGrip from '../../assets/image/bucketgirl.png'

const Landing = () => {
    return (
        <>
            <div class="hero h-screen lg:h-[60vh] bg-accent mt-16">
                <div class="hero-content flex-col lg:flex-row">
                    <div  data-aos="zoom-in-down">
                        <p className='text-xl'>Beast Quality</p>
                        <h1 class="text-5xl font-bold">Professional  Cleaning Service </h1>
                        <p class="py-6 max-w-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, provident?</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>

                    <div className='h-[60vh] shrink-0'>
                        <img src={BucketGrip} class="h-full" alt='' />
                    </div>

                </div>
            </div>

            <div className=' rounded-2xl mx-auto shadow-lg p-10  mt-[-50px] bg-base-200 relative z-20 w-5/6'>
                <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full "
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full "
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full "
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full "
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full "
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full "
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered w-full max-w-xs"
                    />
                </div>
                <button className='btn btn-primary mt-3'>Get a Quate</button>
            </div>
        </>
    );
};

export default Landing;