import {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
// import './App.css';

function FormContact() {
    const letters = [];
    const [letter , setLetters] = useState([]);
    const navigate = useNavigate();
    const initValue = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }
    const validateContact = {
        name: Yup.string().min(3, "Tên không được ít hơn 3 ký tự")
            .max(100, "Tên không được quá 100 ký tự")
            .matches(/^[a-zA-Z ]{3,100}$/, "Ten không đúng định dạng"),
        email: Yup.string().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không đúng định dạng")
    }
    const addNewLetter = (value) => {
        value.id = +value.id;
        letters.push(value)
        toast.success("Thêm mới thành công")
        navigate("/")
    }
    return (
        <div>
            <h1>Contact</h1>
            <Formik validationSchema={Yup.object(validateContact)} initialValues={initValue} onSubmit={addNewLetter}>
               <Form>
                   <div>
                       <label>Name </label>
                       <Field name="name"/>
                       <ErrorMessage name="name" className="error" component="span"></ErrorMessage>
                   </div>
               </Form>
                <button type="submit">Submit</button>
            </Formik>
        </div>
    )
}

export default FormContact;