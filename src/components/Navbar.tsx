//import React from 'react'
import Logo from '../assets/logo.svg'

function Navbar() {

   const flexdata= "flex items-center justify-between ";
  return <nav>
    <div className={`${flexdata} fixed top-0 w-full bg-slate-700 shadow-md`}>
        <div className={`${flexdata} mx-auto w-5/6 bg-amber-200`}>
            <div className={`${flexdata} w-full gap-16`}>
                <img alt="logo" src={Logo} />
                <div className={`${flexdata} w-full`}>
                    
                </div>
            </div>
        </div>
    </div>

  </nav>
    
}

export default Navbar