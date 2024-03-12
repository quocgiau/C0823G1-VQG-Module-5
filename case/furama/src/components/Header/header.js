import "./header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
// import {Link} from "react-router-dom"
// import {Icon} from 'boxicons';
function Header() {
    return (
        <>
            <div className="container display2">
                <div className="col-12 col-sm-3 col-md-3">
                    <img src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png" height="100px"/>
                </div>
                <div><i className="bi bi-0-circle"></i></div>
                <div className="col-12 col-sm-3 col-md-3">
                    <div className='img1'>
                        <a href="https://www.tripadvisor.com/Hotel_Review-g298085-d302750-Reviews-Furama_Resort_Danang-Da_Nang.html"><img
                            src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                            width="170px"/></a>
                    </div>
                </div>
                <div className="col-12 col-sm-3 col-md-3 display1">
                    <div>
                        {/*<Icon name="sun" />*/}
                        <i className='bx bxs-location-plus color1'></i>
                    </div>
                    <div className='display3'>
                        <p>
                            103 – 105 Đường Võ Nguyên Giáp, Phường Khuê Mỹ, Quận Ngũ hành Sơn, Tp. Đà Nẵng, Việt Nam
                            7.0 km từ Sân bay Quốc tế Đà Nẵng
                        </p>
                    </div>

                </div>
                <div className="col-12 col-sm-3 col-md-3">
                    <div className='display1'>
                        <div>
                            <i className='bx bxs-phone color1'></i>
                        </div>
                        <div>
                            <p>
                                84-236-3847 333/888
                            </p>
                        </div>
                    </div>
                    <div className='display1'>
                        <div>
                            <i className='bx bxs-envelope hello1'></i>
                        </div>
                        <div>
                            <p>reservation@furamavietnam.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hello1'>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container">
                        <Link to={"/"} className="navbar-brand hello2">FURAMA</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <a className="nav-link active " aria-current="page" href="#">GIỚI THIỆU</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active " aria-current="page" href="#">LOẠI PHÒNG</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active " aria-current="page" href="#">ẨM THỰC</a>
                                </li>
                                <li className="nav-item color2">
                                    <a className="nav-link active " aria-current="page" href="#">NHÂN VIÊN</a>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/customerList"} className="nav-link active ">KHÁCH HÀNG</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/RoomList"} className="nav-link active ">DỊCH VỤ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;