import Image from 'next/image';
import { BsBehance, BsDribbble, BsFacebook, BsFillTelephoneFill, BsInstagram, BsLinkedin, BsPinterest, BsTwitter } from 'react-icons/bs';
import { FiInstagram, FiMessageSquare } from 'react-icons/fi';
import { FaBuilding, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { SiWhatsapp } from 'react-icons/si';
import ovserve from '@/assets/image/ovserve.png';

const FooterSection = () => {

    const presentYear = new Date().getFullYear()

    return (
        <>
            <section id="footer_part">
                <div className="container whatsapp_position">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer_1">
                                <Image
                                    src={ovserve}
                                    alt="company logo"
                                    width={100}
                                />
                                <p> Observe Solution is a Professional software and website agency Platform. Here we will provide you only interesting content, which you will like very much. Were dedicated to providing you the best of software and website agency.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 m-0 p-0">
                            <div className="footer_2">
                                <h6>Contact</h6>
                                <div className="footer_2_items d-flex">
                                    <div className="footer_icons">
                                        <FaBuilding className='single_social_icons_2' size={15} />
                                    </div>
                                    <span>Observe Digital Solution</span>
                                </div>
                                <div className="footer_2_items d-flex">
                                    <div className="footer_icons">
                                        <GoLocation className='single_social_icons_2' size={15} />
                                    </div>
                                    <span>10 Habiganj,Shylet Bangladesh</span>
                                </div>
                                <div className="footer_2_items d-flex">
                                    <div className="footer_icons">
                                        <BsFillTelephoneFill className='single_social_icons_2' size={15} />
                                    </div>
                                    <span>+88 01890070302</span>
                                </div>
                                <div className="footer_2_items d-flex">
                                    <div className="footer_icons">
                                        {/* <i className="fa-solid fa-message"></i> */}
                                        <FiMessageSquare className='single_social_icons_2' size={15} />
                                    </div>
                                    <span>orbitsolution.com
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 m-0 p-0">
                            <div className="footer_3">
                                <h6>Capabilities</h6>
                                <div className="footer_3_items">
                                    <ul>
                                        <li><a href="#">Web Application</a></li>
                                        <li><a href="#">Graphic Design</a></li>
                                        <li><a href="#">App Development</a></li>
                                        <li><a href="#">Seo Marketing</a></li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 m-0 p-0">
                            <div className="footer_4">
                                <h6>Our Social Media</h6>
                                <div className="social_iconss">
                                    <a target={"_blank"} rel="noreferrer" href="https://www.facebook.com/rpmhost.in"> <FaFacebookF className='single_social_icons' /> </a>
                                    <a target={'_blank'} rel="noreferrer" href="https://www.linkedin.com/in/rpm-host-59a06a264/"><AiFillLinkedin
                                        className='single_social_icons' size={50}
                                    /></a>
                                    <a href="#">
                                        <BsTwitter
                                            className='single_social_icons' size={50}
                                        />
                                    </a>
                                    <a href="https://www.instagram.com/rpmhost.in/" target={'_blank'} rel="noreferrer">
                                        <FiInstagram className='single_social_icons' size={50} />
                                    </a>
                                    <a href="#"><BsBehance className='single_social_icons' size={50} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="https://wa.me/917047384947" target={'_blank'} rel="noreferrer">
                        <SiWhatsapp className='whatsapp_icon' size={50} />
                    </a>
                </div>
                <hr className="hrs" />
                <div className="footer_copy">
                    <p>Copyright {presentYear} © Bustic | Powered by Observe Digital Solution It Limited</p>
                </div>
            </section>
        </>
    );
};

export default FooterSection;