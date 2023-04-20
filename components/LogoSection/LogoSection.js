import Image from 'next/image';
import ovserve from '@/assets/image/ovserve.png';
import { useWindowSize } from '@react-hook/window-size';


const LogoSection = () => {

    const [width, height] = useWindowSize({ fps: 60 });

    console.log(width)

    return (
        <>
            <section id="logo_part">
                <div className="container logo_position">
                    <div className="row">

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

                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default LogoSection;