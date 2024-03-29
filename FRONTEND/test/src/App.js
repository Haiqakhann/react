import Home from "./component/Home/Home";
import ChildComponent from "./component/Prop/ParentComponent";
import RenderProp from "./component/Prop/FunctionalComponent";
import Counter from "./component/Counter/Counter";
import DataFetcher from "./component/DataFetcher/DataFetcher";
import Storage from "./component/Storage/Storage";
import MainLayout from "./component/MainLayout/MainLayout";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
function App() {

  // function for RenderProp ---trigger on click
  const functioncomp = (count)=>{
    console.log(`count is ${count}`)
  }

  return (
    <>

      <BrowserRouter>     
        <MainLayout/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/task1' element={<ChildComponent message ='enter your name'/>}/>
          <Route path='/task2' element={<RenderProp count='5' onclick={functioncomp}/>}/>
          <Route path='/task3' element={<Counter/>}/>
          <Route path='/task4' element={<DataFetcher/>}/>
          <Route path='/task5' element={<Storage/>}/>
        </Routes>
      </BrowserRouter>



    </>
    );
}

export default App;
