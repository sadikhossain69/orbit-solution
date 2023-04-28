import service1 from '@/assets/image/service1.png';
import service2 from '@/assets/image/service2.png';
import service3 from '@/assets/image/service3.png';
import service_4 from '@/assets/image/service_4.png';
import Image from 'next/image';


const ServiceSection = () => {
    return (
        <>
            <section id="service_part">
                <div className="container">
                    <div className="service_header">
                        <h2>Our <span>Service</span></h2>
                    </div>
                    <div className="row">
                        <div data-aos="zoom-in" className="col-lg-3 col-sm-6 py-4">
                            <div className="service_1">
                                <div className="service_img">
                                    <Image
                                        src={service_4}
                                        alt="service_4"
                                        width={220}
                                    />
                                </div>
                                <div className="service_content">
                                    <h3>Web Application</h3>
                                    <p>Get awe-inspiring business-ready web applications & features into production on-time.</p>
                                    <p className="laravel">#Laravel  #Express.js #wordpress #php #react js.</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col-lg-3 col-sm-6 py-4">
                            <div className="service_1 service_border">
                                <div className="service_img">
                                    <Image
                                        src={service1}
                                        alt="service1"
                                        width={220}
                                    />
                                </div>
                                <div className="service_content">
                                    <h3>Graphic Design/UI UX</h3>
                                    <p>Our expert designers can help your Brand Identity.</p>
                                    <p className="laravel">#Photoshop #Illustrator #After effects #Adobe xd.</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col-lg-3 col-sm-6 py-4">
                            <div className="service_1">
                                <div className="service_img">
                                    <Image
                                        src={service2}
                                        alt="service2"
                                        width={220}
                                    />
                                </div>
                                <div className="service_content">
                                    <h3>Seo Marketing</h3>
                                    <p>Dedicated to providing ROI-focused online marketing solution to increase your sales..</p>
                                    <p className="laravel">#SEO #PPC #Content Marketing #Social media #Facebook Ads.</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col-lg-3 col-sm-6 py-4">
                            <div className="service_1 service_side">
                                <div className="service_img">
                                    <Image
                                        src={service3}
                                        alt="service3"
                                        width={220}
                                    />
                                </div>
                                <div className="service_content">
                                    <h3>App Development</h3>
                                    <p>Managed Mobile App Development devoted to discovering & building your desired objectives.
                                    </p>
                                    <p className="laravel"> #React Js  #Flutter  #Kotlin.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceSection;