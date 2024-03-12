import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header/header";
import Footer from "../Footer/Footer";

function Home() {
    return (
        <>
            <Header/>
            <div className="body">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="5000">
                            <img
                                src="https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Resort_Exterior_Courtyard.jpg"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img
                                src="https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Resort_Exterior-Lagoon-Pool.jpg"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img
                                src="https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Resort_Exterior_Courtyard-Night.jpg"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img
                                src="https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Resort_Exterior-Lobby.jpg"
                                className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="container">
                    <div className="col-12 col-sm-12 col-md-4 div1 display11">
                        <h3 className='color11'>KHU NGHỈ DƯỠNG ĐẲNG CẤP THẾ GIỚI, FURAMA ĐÀ NẴNG, NỔI TIẾNG LÀ KHU
                            NGHỈ DƯỠNG ẨM THỰC
                            TẠI VIỆT NAM.</h3>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 div1">
                        <iframe height="100%" width="100%"
                                src="https://www.youtube.com/embed/tK6vU_0-0cE?si=vQa3HD1fAkyt10A2"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 div1">
                        <p>Hướng ra bãi biển Đà Nẵng trải dài cát trắng, Furama Resort Đà Nẵng là cửa ngõ đến với 3 di
                            sản văn hoá thế
                            giới: Hội An (20 phút), Mỹ Sơn (90 phút) và Huế (2 tiếng. 196 phòng hạng sang cùng với 70
                            căn biệt thự từ
                            hai đến bốn phòng ngủ có hồ bơi riêng đều được trang trí trang nhã, theo phong cách thiết kế
                            truyền thống
                            của Việt Nam và kiến trúc thuộc địa của Pháp, biến Furama thành khu nghỉ dưỡng danh giá nhất
                            tại Việt Nam –
                            vinh dự được đón tiếp nhiều người nổi tiếng, giới hoàng gia, chính khách, ngôi sao điện ảnh
                            và các nhà lãnh
                            đạo kinh doanh quốc tế.</p>
                    </div>
                </div>
                <div><h2 className='h22'>Ưu Đãi & Khuyến Mãi</h2></div>
                <div className="container">
                    <div className="col-12 col-sm-12 col-md-4 div1">
                        <img src="https://furamavietnam.com/wp-content/uploads/2023/09/165A2321.jpg" width="100%"
                             className='img11'/>
                        <p> Là khu nghỉ dưỡng danh giá nhất Việt Nam, Furama Resort Đà Nẵng tự hào phục vụ hàng nghìn du
                            khách mỗi năm
                            và đặc biệt là điểm đến ưa thích của nhiều hoàng gia, lãnh đạo doanh nghiệp quốc tế và khách
                            nổi tiếng. Lên
                            kế hoạch cho kỳ nghỉ của bạn với chúng tôi!</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 div1">
                        <img src="https://furamavietnam.com/wp-content/uploads/2023/09/1.jpg" width="100%"/>
                        <p> Trải nghiệm ẩm thực tại Furama có sự pha trộn độc đáo các món ăn truyền thống Việt Nam với
                            hương vị ẩm thực
                            châu Á, Ý và châu Âu cùng các món bò nhập khẩu thượng hạng tại đa dạng các nhà hàng, quầy
                            bar đẳng cấp được
                            bao quanh bởi một khu vườn nhiệt đới hay hướng mình ra biển.</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 div1">
                        <img src="https://furamavietnam.com/wp-content/uploads/2023/09/spa.jpg" width="100%"/>
                        <p> Ẩn mình trong một góc nhỏ của khu nghỉ dưỡng, V-Senses Wellness & Spa đưa du khách đến một
                            thiên đường thanh
                            bình của sự thư giãn và trẻ hóa hoàn toàn. Hãy tận hưởng thời gian thư thái với những liệu
                            trình trị liệu vô
                            cùng đặc biệt tại V-senses Wellness & Spa.</p>
                    </div>
                </div>
                <div><h2 className='h22'>Các loại phòng</h2></div>
                <div className='display12'><p className='text11'>
                    Khu nghỉ dưỡng có 196 phòng được thiết kế theo phong cách truyền thống Việt Nam kết hợp với phong
                    cách Pháp, 2 tòa nhà 4
                    tầng có hướng nhìn ra biển, nhìn ra hồ bơi trong xanh và những khu vườn nhiệt đới xanh tươi mát.
                    Ngoài ra, khu nghỉ dưỡng
                    Furama còn cung cấp các liệu pháp spa, phòng xông hơi ướt, phòng xông hơi khô, dịch vụ mát-xa
                    cạnh hồ bơi, các dịch vụ
                    thể thao dưới nước và các lớp tập Thái Cực Quyền trên bãi biển.</p></div>
                <div id="carouselExampleDark" className="carousel carousel-dark slide container"
                     data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img
                                src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-768x497.jpg"
                                className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='color12'>PHÒNG STUDIO SUITE HƯỚNG BIỂN</h5>
                                <p className='color12'>Diện tích: 40.1 m2 kết nối với ban công rộng 11.3 m2.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img
                                src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Garden-Deluxe-5-768x496.jpg"
                                className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='color12'>PHÒNG DELUXE HƯỚNG BIỂN</h5>
                                <p className='color12'>Diện tích: 43.7 m2 kết nối với ban công rộng 11.3 m2.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-768x497.jpg"
                                className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='color12'>PHÒNG SUPERIOR HƯỚNG VƯỜN
                                </h5>
                                <p className='color12'>Diện tích: 43.7 m2 kết nối với ban công rộng 11.3 m2.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;
