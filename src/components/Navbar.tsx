//import React from 'react'
import Logo from '../assets/logo.png'
import useMediaQuery from '../hooks/useMediaQuery';
import { SelectedPage } from '../shared/types';
import Menu from '../assets/menu.svg';
import Link from './Link';
import { useState } from 'react';



type Props = {
    selectedPage: SelectedPage;
    setselectedPage: (value: SelectedPage) => void; 
};

function Navbar( {selectedPage, setselectedPage}: Props) {

   const flexdata= "flex items-center justify-between ";
  
    const [isMenuToggled, setIsMenuToggled] = useState(false);
   const mediaQuery = useMediaQuery("(min-width: 768px)");


  return <nav>
    <div className={`${flexdata} fixed top-0 w-full bg-amber-200 shadow-md`}>
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
                  <button className="bg-amber-500 rounded-sm p-2">Sign in</button>
                  <button className="bg-amber-500 rounded-sm p-2">Become a Member</button> 
                </div>
            </div>) : <button className="rounded-full bg-amber-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled) }>
              <img src={Menu} alt="menu" className='h-6 w-6 text-white' />
              </button>}
        </div>
      </div>
    </div>

  </nav>
    
                }

export default Navbar

