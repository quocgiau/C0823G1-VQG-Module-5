import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import List from "./components/List";
import Add from "./components/Add";
import Edit from "./components/Edit";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List/>}></Route>
          <Route path="/Add" element={<Add/>}></Route>
          <Route path="/Edit/:id" element={<Edit/>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
