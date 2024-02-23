// Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/ieeemace/" role="button">
                        <i className="fa fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/ieeemace" role="button">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/ieeemace/" role="button">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/company/ieeemace/mycompany/" role="button">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://youtube.com/@ieeemacesb7201" role="button">
                        <i className="fa fa-youtube"></i>
                    </a>
                </section>
                <section>
                    <form action="">
                        <div className="row d-flex justify-content-center">
                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Join IEEE Now</strong>
                                </p>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="form-outline form-white mb-4">
                                    <input style={{ backgroundColor: 'rgba(250,250,250,0.1)', borderRadius: '0px', border: 'none', outline: 'none', color: '#fff' }} type="email" id="form5Example2" className="form-control" />
                                    <label className="form-label" htmlFor="form5Example2">Email address</label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-light mb-4">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>
                            <i className="fa fa-copyright"></i> Copyright &copy; <script>document.write(new Date().getFullYear())</script> <a href="#">IEEE MACE</a> All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
