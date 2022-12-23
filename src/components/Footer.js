import React from 'react';

const Footer = () => {
  return (
    <section className="has-bg-img py-0">
        <div className="container">
            <div className="footer">
                <div className="footer-lists">
                    <ul className="list">
                        <li className="list-head">
                            <h6 className="font-weight-bold">ABOUT US</h6>
                        </li>
                        <li className="list-body">
                            <a href="#" className="logo">
                                <img src="/imgs/logo.png" alt="Konkosa Logo" />
                                <h6>KONKONSA</h6>
                            </a>
                            <p>Conect With Friends & Family In Real Time.</p> 
                            <p className="mt-3">
                                Copyright 2022 &copy; <a className="d-inline text-primary" href="http://www.mobilies.io">Mobilies.io</a>
                            </p>                   
                        </li>
                    </ul>
                    <ul className="list">
                        <li className="list-head">
                            <h6 className="font-weight-bold">USEFUL LINKS</h6>
                        </li>
                        <li className="list-body">
                            <div className="row">
                                <div className="col">
                                    <a href="#">Home</a>
                                </div>
                                <div className="col">
                                                    
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="list">
                        <li className="list-head">
                            <h6 className="font-weight-bold">CONTACT INFO</h6>
                        </li>
                        <li className="list-body">
                            <p>Contact us and we'll get back to you within 24 hours.</p>
                            <p><i className="ti-location-pin"></i> Concord Tower, Media City, Dubai - UAE</p>
                            <p><i className="ti-email"></i>  support@mobilies.io</p>
                            <div className="social-links">
                                <a href="#" className="link"><i className="ti-facebook"></i></a>
                                <a href="#" className="link"><i className="ti-twitter-alt"></i></a>
                                <a href="#" className="link"><i className="ti-google"></i></a>
                                <a href="#" className="link"><i className="ti-pinterest-alt"></i></a>
                                <a href="#" className="link"><i className="ti-instagram"></i></a>
                                <a href="#" className="link"><i className="ti-rss"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>    
        </div>
    </section>
  )
}

export default Footer