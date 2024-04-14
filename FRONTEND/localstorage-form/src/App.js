import React from "react";
import Form from "./component/Form/Form";
import Welcome from "./component/Welcome/Welcome";
import { BrowserRouter , Route,Routes } from "react-router-dom";
  
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Form/>} />
          <Route path='/loggedin' element = {<Welcome/>} />
        </Routes>
      </BrowserRouter>
    </>
    );
}

export default App;
