import './App.css';

import Register from './page/Register';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Protected from './component/Firebase/auth/Protected';
import Crud from './component/Firebase/crud/Crud';
import Uploadfile from './component/Firebase/Storage/UploadFile';
import DisplayFile from './component/Firebase/Storage/DisplayFile';

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected />} >
            <Route path='' element={<Dashboard/>}>
              <Route path='employee' element={<Crud/>}/>
              <Route path="/upload" element={<Uploadfile />} />
              <Route path="/display" element={<DisplayFile />} />
            </Route>
          </Route>
          <Route path ='/login' element={<Login/>}/>
          <Route path ='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
    );
}

export default App;
