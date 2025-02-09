//import React from 'react'
import Logo from '../assets/logo.png'
import { SelectedPage } from '../shared/types';
import Link from './Link';
//import { useState } from 'react';


type Props = {
    selectedPage: SelectedPage;
    setselectedPage: (value: SelectedPage) => void; 
};

function Navbar( {selectedPage, setselectedPage}: Props) {

   const flexdata= "flex items-center justify-between ";


  return <nav>
    <div className={`${flexdata} fixed top-0 w-full bg-slate-700 shadow-md`}>
        <div className={`${flexdata} mx-auto w-5/6 bg-amber-200`}>
            <div className={`${flexdata} w-full gap-16`}>

                {/* Logo left side */}
                <img alt="logo" src={Logo} />
                

                {/* Menu right side */}
                <div className={`${flexdata} w-full`}>
                  <div className={`${flexdata}  gap-8 text-sm`}>
                     <Link page="Benefits" 
                        selectedPage={selectedPage}
                        setselectedPage={setselectedPage}
                     />
                      <Link page="Our Classes"
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
        </div>
      </div>
    </div>

  </nav>
    
}

export default Navbar