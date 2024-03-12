import {Link} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import './Css.css';
import moment from "moment";
import * as CustomerService from "../service/Service";
import {Modal, Button} from "react-bootstrap";
import {toast} from "react-toastify";

function List() {
    const [customers, setCustomers] = useState([]);
    const [delCustomer, setDelCustomer] = useState({});
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        getAll();
    }, [showModal]);
    const getAll = async () => {
        try {
            const list = await CustomerService.getAll();
            setCustomers(list)
        } catch (e) {
            console.log(e)
        }
    }
    const convertDate = (date) => {
        return moment(date).format('DD/MM/YYYY');
    }

    function handleDelete(customer) {
        setDelCustomer(customer)
        setShowModal(true)
    }

    const confirmDelete = async () => {
        try {
            await CustomerService.deleteCustomer(delCustomer);
            setShowModal(false);
            getAll();
            toast.success("Xoá thành công");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <h1 className="h1">Danh sách khách hàng</h1>
            <div className="d-flex align-items-center">
                <button className="btn btn-outline-primary me-2">
                    <Link to={"/Add"} className="dis">Thêm mới khách hàng</Link>
                </button>
                <Formik initialValues={{name: ""}} onSubmit={(values) => {
                    CustomerService.searchCustomer(values.name).then((response) => {
                        setCustomers(response);
                        console.log(response)
                    }).catch((error) => {
                        console.log(error);
                    });
                }}>
                    <Form className="form-inline">
                        <div className="input-group">
                            <Field name="name" className="form-control"></Field>
                            <button type="submit" className="btn btn-outline-primary">Xác nhận</button>
                        </div>
                    </Form>
                </Formik>
            </div>
            <div className="row d-flex justify-content-center align-items-center mx-5 mt-5 mb-5">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Ngày sinh</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">CCCD</th>
                        <th scope="col">SĐT</th>
                        <th scope="col">Email</th>
                        <th scope="col">Loại</th>
                        <th scope="col">Địa chỉ</th>
                        <th>Chức năng</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer, index) => (
                        <tr key={customer.id}>
                            <td>{index + 1}</td>
                            <td>{customer.name}</td>
                            <td>{convertDate(customer.dateOfBirth)}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.identification}</td>
                            <td>{customer.phoneNumber}</td>
                            <td>{customer.email}</td>
                            <td>{customer.level}</td>
                            <td>{customer.address}</td>
                            <td>
                                <Link to={`/Edit/${customer.id}`} className="btn btn-warning">Sửa</Link>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(customer)}>
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))
                    }
                    </tbody>
                </table>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xoá</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Bạn có muốn xoá {delCustomer.name} không?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Huỷ
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Xoá
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default List;