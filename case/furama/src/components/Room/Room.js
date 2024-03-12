import "./Room.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header/header";
import Footer from "../Footer/Footer";
import {useEffect, useState} from "react";
import * as RoomService from '../../service/RoomService'

function Room() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        getAll();
    }, []);

    const getAll = async () => {
        try {
            const list = RoomService.getAll();
            setRooms(list);
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Header/>
            <div className="container">
                <div className="row mt-5">
                    <div className="card display13">
                        <img
                            src="https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Ocean-Studio-Suite.jpg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h6>PHÒNG SUITE HƯỚNG BIỂN</h6>
                            <p className="card-text">
                                Diện tích: 80.5 m2 kết nối với ban công rộng 24 m2.
                                Tối đa: 2 người lớn và 1 trẻ em ngủ chung giường với ba mẹ.
                            </p>
                            <a href="#" className="btn btn-success">Sửa</a>
                            <a href="#" className="btn btn-success">Xoá</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Room;