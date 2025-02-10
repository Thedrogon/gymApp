//import React from 'react'
import Logo from '../assets/logo.png'
import useMediaQuery from '../hooks/useMediaQuery';
import { SelectedPage } from '../shared/types';
import Menu from '../assets/menu.svg';
import Link from './Link';
import { useState } from 'react';
import ActionButton from '../shared/ActionButton';
import { XCircleIcon, } from '@heroicons/react/24/solid'



type Props = {
    isTopofPage: boolean;
    selectedPage: SelectedPage;
    setselectedPage: (value: SelectedPage) => void; 
};

function Navbar( {isTopofPage,selectedPage, setselectedPage}: Props) {

  const flexdata= "flex items-center justify-between ";
  
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const mediaQuery = useMediaQuery("(min-width: 1060px)");
  const navBarback = isTopofPage ? " " : "bg-white shadow-md";


  return( <nav>
    <div className={`${navBarback}${flexdata} fixed top-0 w-full  py-4`}>
        <div className={`${flexdata} mx-auto w-5/6 `}>
            <div className={`${flexdata} w-full gap-16`}>

                {/* Logo left side */}
                <img src={Logo} alt="logo" />
                

                {/* Menu right side */}
                { mediaQuery ? (<div className={`${flexdata} w-full`}>
                  <div className={`${flexdata}  gap-8 text-sm`}>

                     <Link page="Benefits" 
                        selectedPage={selectedPage}
                        setselectedPage={setselectedPage}
                     />
                      <Link  page="Our Classes"
                        selectedPage={selectedPage}
                        setselectedPage={setselectedPage}
                      />
                      <Link page="Contact Us"
                        selectedPage={selectedPage}
                        setselectedPage={setselectedPage}
                      />
                      <Link page="Testimonials"
                        selectedPage={selectedPage}
                        setselectedPage={setselectedPage}
                      />
                      
                </div>
                <div className={`${flexdata} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setselectedPage= {setselectedPage}>Become a Member</ActionButton> 
                </div>
            </div>) : <button className="rounded-full bg-red-400 p-2" onClick={() => setIsMenuToggled(!isMenuToggled) }>
              <img src={Menu} alt="menu" className='h-6 w-6 text-white' />
              </button>}
        </div>
      </div>
    </div>
      {/** Mobile Menu */}
      {!isMenuToggled && !mediaQuery && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-amber-100 shadow-md'>
          <div className='flex justify-end p-12'>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XCircleIcon className='h-6 w-6 text-red-500' />
            </button>

          </div>
          <div className='ml-[33%] flex flex-col gap-10 text-2xl'>

            <Link page="Benefits" 
              selectedPage={selectedPage}
              setselectedPage={setselectedPage}
            />
            <Link  page="Our Classes"
              selectedPage={selectedPage}
              setselectedPage={setselectedPage}
            />
            <Link page="Contact Us"
              selectedPage={selectedPage}
              setselectedPage={setselectedPage}
            />
            <Link page="Testimonials"
              selectedPage={selectedPage}
              setselectedPage={setselectedPage}
            />
            
          </div>

        </div>
      )}
  </nav>
  )
}

export default Navbar;
