import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";
import cogoToast from 'cogo-toast'; // npm install cogo-toast
import { GoLocation } from 'react-icons/go';
import { FiMessageSquare } from 'react-icons/fi';
import { BsFillTelephoneFill } from 'react-icons/bs';


// service_bt81aau - service id
// template_c0rx2js - template id
// 5U2LXCuzS0zCM_ZRJ - public key


const ContactUsSection = () => {

    const { register, formState: { errors }, reset, handleSubmit, control } = useForm()
    const [message, setMessage] = useState('')

    const handleContactForm = data => {

        const emailTemplateParams = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: message
        }

        emailjs.send('service_bt81aau', 'template_c0rx2js', emailTemplateParams, '5U2LXCuzS0zCM_ZRJ')
            .then(res => {
                if (res.status === 200) {
                    cogoToast.success('Message sent successfully')
                }
            })
            .catch(err => {
                cogoToast.error('Something went wrong')
            })

        console.log(data, message)
        // reset()
    }

    return (
        <section id="contact_part">
            <div className="container contact_position">
                <div className="contact_header">
                    <h2>Contact <span>us</span></h2>
                </div>
                <div className="row">
                    <div data-aos="fade-right" className="col-lg-6 py-2">
                        <div className="contact_left">
                            <form onSubmit={handleSubmit(handleContactForm)}>
                                <div className="input">
                                    <input {...register('name', {
                                        required: {
                                            value: true,
                                            message: 'Name is required',
                                        },
                                        minLength: {
                                            value: 3,
                                            message: 'Name must be at least 3 characters',
                                        },
                                    })} type="text" placeholder="Your Name" />
                                </div>
                                <div className="input">
                                    <input {...register('email', {
                                        required: {
                                            value: true,
                                            message: "Email is Required"
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: "Provide a valid email"
                                        }
                                    })} type="text" placeholder="Your Email" />
                                </div>
                                <div className="input">
                                    <input {...register('subject', {
                                        required: {
                                            value: true,
                                            message: 'Subject is required',
                                        },
                                        minLength: {
                                            value: 3,
                                            message: 'Subject must be at least 3 characters',
                                        },
                                    })} type="text" placeholder="Your Subject" />
                                </div>
                                <div className="message">
                                    <textarea
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        name="message" id="" cols="30" rows="6" placeholder="Message"></textarea>
                                </div>
                                <div className="submit_btn">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="get_special">
                            <h6>Contact our experts</h6>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="col-lg-6">
                        <div className="contact_right">
                            <h2>Ready To <span>Start</span> Your Business ?</h2>
                            <h4>Contact and tell us what you needed</h4>
                            <p> Ovserve Digital Solution is a Professional software and website agency Platform. Here we will provide you only interesting content, which you will like very much. We are dedicated to providing you the best of software and website agency.</p>
                            <div className="contact_bottom">
                                <div className="contact_bottom1 d-flex">
                                    <div className="contact_bottom_icons">
                                    <BsFillTelephoneFill className='contact_right_icons'/>
                                    </div>
                                    <span>+88 01890070302</span>
                                </div>
                                <div className="contact_bottom1 d-flex">
                                    <div className="contact_bottom_icons">
                                    <FiMessageSquare className='contact_right_icons' />
                                    </div>
                                    <span>orbitsolution.com</span>
                                </div>
                                <div className="contact_bottom1 d-flex">
                                    <div className="contact_bottom_icons">
                                    <GoLocation className='contact_right_icons'/>
                                    </div>
                                    <span>10 Habiganj,Sylhet Bangladesh</span>
                                </div>
                                <p>orbitsolution is a Professional software and website agency Platform. Here we will provide you only interesting content, which you will like very much. </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;