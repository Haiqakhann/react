import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { all } from '@awesome.me/kit-KIT_CODE/icons'

import Header from './component/Header/Header'
import Home from './page/Home';
import About from './page/About';
import Portfolio from './page/Portfolio';
import ContactUs from './page/ContactUs';

import Footer from './component/Footer/Footer';

// library.add(...all)





function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>


    </>
    );
}

export default App;
