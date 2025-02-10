
import './App.css'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import { SelectedPage } from './shared/types';
import Home from './components/Home';



function App() {
  const [selectedPage, setselectedPage] = useState(SelectedPage.Benefits);

  const [isTopofPage, setIsTopofPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopofPage(true);
      } 
      if(window.scrollY > 0){
        setIsTopofPage(false); 
    };
  }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
   
  return (
    
      <div className="app bg-amber-100 h-screen" >
        <Navbar
        isTopofPage={isTopofPage}
        selectedPage={selectedPage} setselectedPage={setselectedPage} />
        <Home/>
      </div>
    
  )

}

export default App;
