import Image from 'next/image';
import ovserve from '@/assets/image/ovserve.png';
import { useWindowSize } from '@react-hook/window-size';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


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
                    <div className="">


                        <AwesomeSlider>
                            <div className="col-lg col-12 col-md-auto">
                                <div className="logos">
                                    <Image
                                        src={ovserve}
                                        alt="Picture of the Logo5"
                                        width={150}
                                    />
                                </div>
                            </div>
                            <div className="col-lg col-12 col-md-auto">
                                <div className="logos">
                                    <Image
                                        src={ovserve}
                                        alt="Picture of the Logo2"
                                        width={150}
                                    />
                                </div>
                            </div>
                            <div className="col-lg col-12 col-md-auto">
                                <div className="logos">
                                    <Image
                                        src={ovserve}
                                        alt="Picture of the Logo3"
                                        width={150}
                                    />
                                </div>
                            </div>
                            <div className="col-lg col-12 col-md-auto">
                                <div className="logos">
                                    <Image
                                        src={ovserve}
                                        alt="Picture of the Logo4"
                                        width={150}
                                    />
                                </div>
                            </div>
                            <div className="col-lg col-12 col-md-auto">
                                <div className="logos">
                                    <Image
                                        src={ovserve}
                                        alt="Picture of the Logo1"
                                        width={150}
                                    />
                                </div>
                            </div>
                            <div className="col-lg col-12 col-md-auto">
                                <div className="logos">
                                    <Image
                                        src={ovserve}
                                        alt="Picture of the Logo1"
                                        width={150}
                                    />
                                </div>
                            </div>
                        </AwesomeSlider>


                        \                    </div>
                </div>
            </section>
        </>
    );
};

export default LogoSection;