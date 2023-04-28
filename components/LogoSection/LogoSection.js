import Image from 'next/image';
import ovserve from '@/assets/image/ovserve.png';
import logo1 from '@/assets/Icons/header_logo.png'
import logo2 from '@/assets/Icons/logos_1.png'
import logo3 from '@/assets/Icons/logos_2.png'
import logo4 from '@/assets/Icons/logos_4.png'
import logo5 from '@/assets/Icons/logos_5.png'
import { useWindowSize } from '@react-hook/window-size';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const LogoSection = () => {

    const [width, height] = useWindowSize({ fps: 60 });
    const NextArrow = ({ currentSlide, slideCount, ...props }) => (
        <IoIosArrowBack {...props} fill="#333" />
    );
    const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
        <IoIosArrowForward {...props} fill="#333" />
    );

    // const ProjectsSliderSettings = {
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 3.2,
    //     slidesToScroll: 1,
    //     initialSlide: 0,
    //     responsive: [

    //       {
    //         breakpoint: 639,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //         },
    //       },
    //     ],
    //   };

    console.log(width)

    return (
        <>
            <section id="logo_part">
                <div className="container logo_position">
                    <div class="logo_header">
                        <div class="our_client text-center">
                            <h4>our previous <span>client</span></h4>
                        </div>
                    </div>
                    <div className="row">


                        <div className="col-lg lgos_align col-6 col-md-auto">
                            <div className="logos">
                                <Image
                                    className='img-fluid'
                                    src={logo2}
                                    alt="Picture of the Logo5"
                                    width={150}
                                />
                            </div>
                        </div>
                        <div className="col-lg lgos_align col-6 col-md-auto">
                            <div className="logos">
                                <Image
                                    className='img-fluid'
                                    src={logo3}
                                    alt="Picture of the Logo2"
                                    width={150}
                                />
                            </div>
                        </div>
                        <div className="col-lg lgos_align col-6 col-md-auto">
                            <div className="logos">
                                <Image
                                    className='img-fluid'
                                    src={logo5}
                                    alt="Picture of the Logo3"
                                    width={150}
                                />
                            </div>
                        </div>
                        <div className="col-lg lgos_align col-6 col-md-auto">
                            <div className="logos">
                                <Image
                                    className='img-fluid'
                                    src={logo4}
                                    alt="Picture of the Logo4"
                                    width={150}
                                />
                            </div>
                        </div>
                        <div className="col-lg lgos_align col-6 col-md-auto">
                            <div className="logos logos_last">
                                <Image
                                    className='img-fluid'
                                    src={logo1}
                                    alt="Picture of the Logo1"
                                    width={150}
                                />
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </>
    );
};

export default LogoSection;