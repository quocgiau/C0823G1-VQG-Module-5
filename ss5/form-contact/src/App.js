// import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import FormContact from"./component/FormContact"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormContact/>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
