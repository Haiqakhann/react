import './App.css';

import Register from './page/Register';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Protected from './component/Firebase/auth/Protected';


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected />} >
            <Route path="/" index element={<Dashboard />} />
          </Route>
          <Route path ='/login' element={<Login/>}/>
          <Route path ='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>

    </>
    );
}

export default App;
