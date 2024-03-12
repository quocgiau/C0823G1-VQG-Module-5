import './App.css';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import Home from "./components/Home/Home";
import Room from "./components/Room/Room";
import Customer from "./components/Customer/Customer";
import Header from "./components/Header/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer";
import CreateCustomer from "./components/Customer/CreateCustomer";
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    {/*<Route path="/contactList" element={<Contact/>}></Route>*/}
                    <Route path="/CustomerList" element={<Customer/>}></Route>
                    <Route path="/CreateCustomer" element={<CreateCustomer/>}></Route>
                    <Route path="/RoomList" element={<Room/>}></Route>
                    {/*<Route path="/employeeList" element={<Employee/>}></Route>*/}
                    {/*<Route path="/createContact" element={<CreateContact/>}></Route>*/}
                    {/*<Route path="/createVilla" element={<CreateVilla/>}></Route>*/}
                    {/*<Route path="/createRoom" element={<CreateRoom/>}></Route>*/}
                    {/*<Route path="/createHouse" element={<CreateHouse/>}></Route>*/}
                    {/*<Route path="/createEmployee" element={<CreateEmployee/>}></Route>*/}
                    {/*<Route path="/editEmployee/:id" element={<EditEmployee/>}></Route>*/}
                    {/*<Route path="/editContact/:id" element={<EditContact/>}></Route>*/}
                    {/*<Route path="/detailService/:id" element={<DetailService/>}></Route>*/}
                    {/*<Route path="/editService/:id" element={<EditService/>}></Route>*/}
                </Routes>
            </BrowserRouter>
            <Footer/>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
