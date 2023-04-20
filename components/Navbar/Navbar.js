import Image from 'next/image';
import React from 'react';
import company_logo from '@/assets/company_logo.png';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md custom_navs">
                <div className="container">
                    <a className="navbar-brand navbs_logo" href="#">
                    <Image
                            src={company_logo}
                            alt="company_logo"
                            width={100}
                        />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <i className="fas fa-bars barsss"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto navbar_items">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#Hero_part">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#service_part">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#Latest_projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#Team_part">Our Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#contact_part">Contact</a>
                            </li>




                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;