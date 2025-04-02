import { IoMdClose } from 'react-icons/io';
import './ContactUsModal.css'
import { FaTelegram } from 'react-icons/fa6';

const ContactUsModal = (props: { closeModal: () => void }) => {
    return (
        <div className="modal-layout">
            <div className="modal-container">
                <section>

                    <div className="listing-hero">
                        <div className="hero-heading">
                            <div className="hero-large">Contact Us.</div>
                            <span onClick={() => props.closeModal()}><IoMdClose className='h-5 w-5 cursor-pointer' /></span>
                            {/* <div className="hero-text"> <i>Got any Questions? Feel free to ask or visit our FAQ page </i> </div> */}
                        </div>
                    </div>

                    <div className="container-contact">
                        <div className="wrap-contact">

                            <form name="contact" className="contact-form validate-form">

                                <div className="wrap-input validate-input" data-validate="Please enter your name">
                                    <input className="input" type="text" name="name" placeholder="Full Name" />
                                </div>

                                <div className="wrap-input validate-input" data-validate="Please enter your email">
                                    <input className="input" type="text" name="email" placeholder="E-mail" />
                                </div>

                                <div className="wrap-input validate-input" data-validate="Please enter your message">
                                    <textarea className="input" name="message" placeholder="Your Message"></textarea>
                                </div>

                                <div className="container-contact-form-btn">
                                    <button type="submit" className="contact-form-btn flex gap-2">
                                        <span>Send</span>
                                        <FaTelegram className='h-7 w-7 ' />
                                    </button>
                                </div>

                                <div className="grid-container">
                                    <div className="item1 left-align"><i className="fa fa-lg fa-map-marker-alt"></i> 4517 Washington Ave, Manchester, Kentucky 39495</div>
                                    <div className="item4 right-align"><i className="fa fa-lg fa-phone"></i> 9745562644</div>

                                </div>
                            </form>

                        </div>
                    </div>
                </section >

            </div >
        </div >
    );
}

export default ContactUsModal;