/* Importing the image from the assets folder. */
import project3 from '@/assets/project_3.png';
import project4 from '@/assets/project4.png';
import project5 from '@/assets/project_5.png';
import project6 from '@/assets/project7.png';
import project7 from "@/assets/Icons/new_project1.png"
import project8 from "@/assets/Icons/new_project2.png"
import Image from 'next/image';

const LatestProject = () => {
    return (
        <>
            <section id="Latest_projects">
                <div className="container">
                    <div className="latest_header">
                        <h2>Latest <span>Projects</span></h2>
                    </div>
                    <div className="row">
                        <div data-aos="fade-up" className="col-lg-4 col-md-6">
                            <div className="latest_Items">
                                <div className="latest_img">
                                    <Image 
                                        className=""
                                        src={project7}
                                        alt="project1"
                                        width={361}
                                    />
                                </div>
                                <div className="latest_content">
                                    <a href="https://doctors-association-8734a.web.app/">View Project</a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="col-lg-4 col-md-6">
                            <div className="latest_Items">
                                <div className="latest_img">
                                    <Image
                                        src={project8}
                                        alt="project8"
                                        width={383}
                                    />
                                </div>
                                <div className="latest_content">
                                    <a href="https://neighbour-home.web.app/">View Project</a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="col-lg-4 col-md-6">
                            <div className="latest_Items">
                                <div className="latest_img">
                                    <Image
                                        src={project3}
                                        alt="project3"
                                        width={350}
                                    />
                                </div>
                                <div className="latest_content">
                                    <a href="https://nafisaa.com/">View Project</a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col-lg-4 col-md-6">
                            <div className="latest_Items">
                                <div className="latest_img">
                                    <Image
                                        src={project4}
                                        alt="project4"
                                        width={350}
                                    />
                                </div>
                                <div className="latest_content">
                                    <a href="https://jobsbazar.in/">View Project</a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col-lg-4 col-md-6">
                            <div className="latest_Items">
                                <div className="latest_img">
                                    <Image
                                        src={project5}
                                        alt="project5"
                                        width={350}
                                    />
                                </div>
                                <div className="latest_content">
                                    <a href="https://talaak.in/">View Project</a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col-lg-4 col-md-6">
                            <div className="latest_Items">
                                <div className="latest_img">
                                    <Image
                                        src={project6}
                                        alt="project6"
                                        width={350}
                                    />
                                </div>
                                <div className="latest_content">
                                    <a href="https://sakkhor-omrito.github.io/Ecomerce_new/">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LatestProject;