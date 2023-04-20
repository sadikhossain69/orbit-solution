import Logo1 from '@/assets/logos_1.png';
import Logo2 from '@/assets/logos_2.png';
import Logo3 from '@/assets/logos_3.png';
import Logo4 from '@/assets/logos_4.png';
import Logo5 from '@/assets/logos_5.png';
import Image from 'next/image';
import { Carousel, ScrollingCarousel } from '@trendyol-js/react-carousel';
import { useEffect, useState } from 'react';
import { useWindowSize } from '@react-hook/window-size';
import RightArrow from '../Custom/RightArrow';
import LeftArrow from '../Custom/LeftArrow';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';


const LogoSection = () => {

    const [width, height] = useWindowSize({ fps: 60 });

    console.log(width)

    return (
        <>
            <section id="logo_part">
                <div className="container logo_position">
                    <div className="row">
                        {
                            width < 768
                            &&
                            <Carousel show={1} slide={1} swiping={true} transition={0} infinite={true} leftArrow={<LeftArrow />} rightArrow={<RightArrow />}>

                                <div className="col-lg col-12 col-md-auto">
                                    <div className="logos logos_mar">
                                        <Image
                                            src={Logo5}
                                            alt="Picture of the Logo5"
                                            width={150}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg col-12 col-md-auto">
                                    <div className="logos logos_mar">
                                        <Image
                                            src={Logo2}
                                            alt="Picture of the Logo2"
                                            width={150}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg col-12 col-md-auto">
                                    <div className="logos">
                                        <Image
                                            src={Logo3}
                                            alt="Picture of the Logo3"
                                            width={150}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg col-12 col-md-auto">
                                    <div className="logos">
                                        <Image
                                            src={Logo4}
                                            alt="Picture of the Logo4"
                                            width={150}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg col-12 col-md-auto">
                                    <div className="logos marsis">
                                        <Image
                                            src={Logo1}
                                            alt="Picture of the Logo1"
                                            width={150}
                                        />
                                    </div>
                                </div>
                            </Carousel>
                        }
                        {
                            (width >= 768 && width <= 1024)
                            &&
                            <Carousel show={3} slide={3} swiping={true} infinite={true}  >

                                <div className="col-lg col-12 col-md-auto">
                                    <div className="logos logos_mar">
                                        <Image
                                            src={Logo5}
                                            alt="Picture of the Logo5"
                                            width={150}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg col-12 col-md-auto">
                                    <div className="logos logos_mar">
                                        <Image
                                            src={Logo2}
                                            alt="Picture of the Logo2"
                                            width={150}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg col-12 col-md-auto">
                                    <div className="logos">
                                        <Image
                                            src={Logo3}
                                            alt="Picture of the Logo3"
                                            width={150}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg col-12 col-md-auto">
                                    <div className="logos">
                                        <Image
                                            src={Logo4}
                                            alt="Picture of the Logo4"
                                            width={150}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg col-12 col-md-auto">
                                    <div className="logos marsis">
                                        <Image
                                            src={Logo1}
                                            alt="Picture of the Logo1"
                                            width={150}
                                        />
                                    </div>
                                </div>
                            </Carousel>
                        }
                        {
                            width > 1024
                            &&
                            <Carousel show={4} slide={4} swiping={true} infinite={true}  >

                                <div className="col-lg col-12 col-md-auto">
                                    <div className="logos logos_mar">
                                        <Image
                                            src={Logo5}
                                            alt="Picture of the Logo5"
                                            width={150}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg col-12 col-md-auto">
                                    <div className="logos logos_mar">
                                        <Image
                                            src={Logo2}
                                            alt="Picture of the Logo2"
                                            width={150}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg col-12 col-md-auto">
                                    <div className="logos">
                                        <Image
                                            src={Logo3}
                                            alt="Picture of the Logo3"
                                            width={150}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg col-12 col-md-auto">
                                    <div className="logos">
                                        <Image
                                            src={Logo4}
                                            alt="Picture of the Logo4"
                                            width={150}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg col-12 col-md-auto">
                                    <div className="logos marsis">
                                        <Image
                                            src={Logo1}
                                            alt="Picture of the Logo1"
                                            width={150}
                                        />
                                    </div>
                                </div>
                            </Carousel>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default LogoSection;