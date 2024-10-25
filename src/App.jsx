import Footer from './page/Footer'
import Home from './page/Home'
import Navbar from './page/Navbar'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className=' bg-gray-950'>
     <BrowserRouter>
      <Navbar />
      <Home />
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
