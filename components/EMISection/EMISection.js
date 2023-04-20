import Image from 'next/image';
import Payment_Banner from '../../assets/Icons/payment_banner.png';

const EMISection = () => {
    return (
        <>
            <section id="payment">
                <div className="container">
                    <div className="payment_header">
                        <h2>We also provide  <span>Emi</span> Facilities</h2>
                    </div>
                    <div className="col-lg-8 offset-2 emi_pff">
                        <div className="emi_img">
                            <Image
                            className='img-fluid'
                            src={Payment_Banner} 
                            alt="Payment Banner"
                            />
                            {/* <img src="image/payment_banner.png" alt="" srcset=""/> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EMISection;