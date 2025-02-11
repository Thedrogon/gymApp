//import React from 'react'
import { SelectedPage } from '../shared/types';
//import { use } from 'framer-motion/client';
import useMediaQuery from '../hooks/useMediaQuery';
import HomeText from '../assets/HomePageText.png';
import Homeimg from '../assets/HomePageGraphic.png';
import ActionButton from '../shared/ActionButton';
import redbull from '../assets/redbull.png';
import forbes from '../assets/forbes.png';
import fortune from '../assets/fortune.png';



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({setSelectedPage}:Props) => {

    const isabovemedium= useMediaQuery("(min-width: 900px)");
  return (
    <section id="home" className='gap-16 bg-gray-50 py-10 md:h-full md:pb-0'>
        <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
            {/* Main Header */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* Header Text */}
                <div className='md:-mt-20 '>
                    <div >
                        <div>
                            <img src={HomeText} alt="Hometext" />
                        </div>
                    </div>
                    <p className='mt-8 text-red-500 text-sm font-bold '>Stronger Anytime, Anywhere, Everyday</p>
                </div>
                {/* Action Button */}
                <div className='mt-8 flex items-center gap-8'>
                    <ActionButton setselectedPage={setSelectedPage}>
                        Join Now
                     </ActionButton>
                     
                </div>
            </div>
            {/* Hero Image */}
            
            <div className='flex basis-3/5 justify-center md:z-10 md:justify-items-end md:mt-16 md:ml-40'>
                <img src={Homeimg} alt="Homeimg" />
            </div>
        </div>

        {/* sponsors */}
        {isabovemedium && (
            <div className='h-[113px] w-full py-6 bg-amber-200'>
                <div className='mx-auto w-5/6 '>
                    <div className='flex items-center justify-between gap-8 w-3/5'>
                        <img src={redbull} alt="Hometext" />
                        <img src={forbes} alt="Hometext" />
                        <img src={fortune} alt="Hometext" />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home