import {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import './letters.css';

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
            .max(100, "Tên không được quá 100 ký tự").required("Trường bắt buộc nhập")
            .matches(/^[a-zA-Z ]{3,100}$/, "Ten không đúng định dạng"),
        email: Yup.string().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không đúng định dạng").required("Trường bắt buộc nhập"),
        phone: Yup.string().required("Trường bắt buộc nhập")
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
                   <div>
                       <label>Email </label>
                       <Field name="email"/>
                       <ErrorMessage name="email" className="error" component="span"></ErrorMessage>
                   </div>
                   <div>
                       <label>Phone </label>
                       <Field name="phone"/>
                       <ErrorMessage name="phone" className="error" component="span"></ErrorMessage>
                   </div>
                   <div>
                       <label>Message </label>
                       <Field as="textarea" name="message"/>
                       <ErrorMessage name="message" className="error" component="span"></ErrorMessage>
                   </div>
                   <button type="submit">Submit</button>
               </Form>
            </Formik>
        </div>
    )
}

export default FormContact;