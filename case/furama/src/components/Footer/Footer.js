import "./Footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <>
            <footer className='background-color1'>
            <div className="container display5 display7">
                <div className="col-12 col-sm-12 col-md-6" >
                    <h5>Liên hệ</h5>
                    <div className='display7'>
                        <div>
                            <i className='bx bxs-location-plus color3'></i>
                        </div>
                        <div className='padding1'>
                            <p>
                                103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District, Danang City, Vietnam
                                Tel.: 84-236-3847 333/888 * Fax: 84-236-3847 666
                                Email: reservation@furamavietnam.com * www.furamavietnam.com
                            </p>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-sm-12 col-md-6 text1">
                    <div className='display6'>
                        <i className='bx bxl-facebook-circle icon' ></i>
                        <i className='bx bxl-twitter icon' ></i>
                        <i className='bx bxl-instagram-alt icon' ></i>
                    </div>
                    <div>
                        <p>© 2023 Furama Resort Da Nang</p>
                    </div>
                </div>
            </div>
            </footer>
        </>
    );
}

export default Footer;