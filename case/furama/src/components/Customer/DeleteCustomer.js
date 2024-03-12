import {Button, Modal} from "react-bootstrap";
import * as CustomerService from "../../service/CustomerService"

function DeleteCustomer({delCustomer, show, closeModal}) {
    const del = async () => {
        try {
            await CustomerService.deleteCustomer(delCustomer)
            closeModal()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Xoá</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có muốn xoá {delCustomer.name}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={del}>
                        Xoá
                    </Button>
                    <Button variant="secondary" onClick={closeModal}>
                        Huỷ
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteCustomer;