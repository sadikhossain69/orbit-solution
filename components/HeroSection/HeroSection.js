import Banner1 from '@/assets/banner1.png';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <>
            <section id="Hero_part">
                <div className="container finishss">
                    <div className="row heros_row">
                        <div data-aos="fade-right" className="col-lg-7 m-0 p-0 ">
                            <div className="hero_left">
                                <h1>We Will Help Your Business 
                                    <span> Grow 2x</span> Times Using Our Best Technologies</h1>

                                <p>Welcome To rpmhost
                                    rpmhost is a Professional software and website agency Platform. Here we will provide you only interesting content, which you will like very much. Were dedicated to providing you the best of software and website agency. </p>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="col-lg-5 py-4">
                            <div className="hero_right">
                                <Image
                                    className='hero_right_img'
                                    src={Banner1}
                                    alt="Picture of the Banner1"
                                    width={500}
                                    priority={true}
                                />
                            </div>
                            <div className="finish_projects">
                                <p>45 <span>+</span> </p>
                                <h6>Finish Projects</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;