import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './page/Home';
import About from './page/About';
import Portfolio from './page/Portfolio';
import ContactUs from './page/ContactUs';
// import { Github,LoaderData } from './page/Github';
import Error404 from './page/Error404';

import Layout from './component/Layout/Layout';



function App() {

        // to use loader
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={<Layout />}>
  //       <Route path='' element={<Home />} />
  //       <Route path='about' element={<About />} />
  //       {/* <Route path='contact' element={<Contact />} /> */}
  //       {/* <Route path='user/:userid' element={<User />} /> */}
  //       <Route 
  //       loader={LoaderData}
  //       path='github' 
  //       element={<Github />}
  //        />
  //     </Route>
  //   )
  // )
  

  return (
    <>

     {/* with outlet */}
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>

            {/* to use loader use below syntax for router */}
            {/* <Route 
              loader={LoaderData}
              path='/github' 
              element={<Github/>}/> */}

            <Route path='*' element={<Error404/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

      {/*to use loader  */}
      {/* <RouterProvider router={router} /> */}

      {/* without outlet */}
      
      {/* <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter> */}
    </>
  );
}

export default App;
