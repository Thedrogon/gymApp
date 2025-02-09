
import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { SelectedPage } from './shared/types';



function App() {
  const [selectedPage, setselectedPage] = useState(SelectedPage.Benefits);

  return (
    
      <div className="app bg-gray-100 h-screen" >
        <Navbar selectedPage={selectedPage} setselectedPage={setselectedPage} />
      </div>
    
  )
}

export default App;
