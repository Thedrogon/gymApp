//import React from 'react'
import { SelectedPage } from '../shared/types';
//import { use } from 'framer-motion/client';
import useMediaQuery from '../hooks/useMediaQuery';
import HomeText from '../assets/HomePageText.png';
import Homeimg from '../assets/HomePageGraphic.png';
import ActionButton from '../shared/ActionButton';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({setSelectedPage}:Props) => {

    const isabovemedium= useMediaQuery("(min-width: 1060px)");
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
                    <p>Stronger Everyday</p>
                </div>
                {/* Action Button */}
                <div>
                    <ActionButton setselectedPage={setSelectedPage}>
                        Join Now
                     </ActionButton>
                     
                </div>
            </div>
            {/* Hero Image */}
            
            <div>
                <img src={Homeimg} alt="Homeimg" />
            </div>
            
        </div>

    </section>
  )
}

export default Home