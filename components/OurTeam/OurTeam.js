import React from 'react';
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import Sakkhar from '@/assets/image/teams1.jpeg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTeam = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };

    return (
        <>
            <section id="Team_part">
                <div className="container">
                    <div className="Team_header">
                        <h2>Our <span>Team</span></h2>
                    </div>
                    <div className="row">
                        <Slider {...settings}>
                            <div className="col-lg-4 col-sm-6 py-4">
                                <div className="team_items team_padding">
                                    <div className="team_img">
                                        <Image
                                            className='single_team_img'
                                            src={Sakkhar}
                                            alt="Sakkhar"
                                            width={350}
                                        />
                                        <div className="overlay">
                                            <a href="#"><FaFacebookF color='' className='team_social' /></a>
                                            <a href="#"><AiFillLinkedin color='' className='team_social' /></a>
                                            <a href="#"><FiInstagram color='' className='team_social' /></a>
                                        </div>
                                    </div>
                                    <div className="team_content">
                                        <h3>Sakkhar Majumder</h3>
                                        <h4>Web Designer</h4>
                                        <p>I am a proffesional web designer with 1 years experience. I believe only self-confidence will help me reach my goals.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 py-4">
                                <div className="team_items team_padding">
                                    <div className="team_img">
                                        <Image
                                            className='single_team_img'
                                            src={Sakkhar}
                                            alt="Sakkhar"
                                            width={350}
                                        />
                                        <div className="overlay">
                                            <a href="#"><FaFacebookF color='' className='team_social' /></a>
                                            <a href="#"><AiFillLinkedin color='' className='team_social' /></a>
                                            <a href="#"><FiInstagram color='' className='team_social' /></a>
                                        </div>
                                    </div>
                                    <div className="team_content">
                                        <h3>Sadik Joarder</h3>
                                        <h4>Mern Stack Developer</h4>
                                        <p>I am a proffesional web designer with 1 years experience. I believe only self-confidence will help me reach my goals.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 py-4">
                                <div className="team_items">
                                    <div className="team_img">
                                        <Image
                                            className='single_team_img'
                                            src={Sakkhar}
                                            alt="Sakkhar"
                                            width={350}
                                        />
                                        <div className="overlay">
                                            <a href="#"><FaFacebookF color='' className='team_social' /></a>
                                            <a href="#"><AiFillLinkedin color='' className='team_social' /></a>
                                            <a href="#"><FiInstagram color='' className='team_social' /></a>
                                        </div>
                                    </div>
                                    <div className="team_content">
                                        <h3>Utpal Roy</h3>
                                        <h4>Founder & App Developer</h4>
                                        <p>I am Utpal Roy and I am a fullstack  developer. I have been working as a developer for 3 in ObserveSolution and I have been enjoying every moment of it.</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>

                    </div>
                </div>
            </section>
        </>
    );
};

export default OurTeam;