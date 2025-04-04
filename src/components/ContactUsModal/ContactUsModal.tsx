import { IoMdClose } from 'react-icons/io';
import './ContactUsModal.css'
import { FaTelegram } from 'react-icons/fa6';
import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUsModal = (props: { closeModal: () => void }) => {

    const SERVICEID = 'service_vtmkh2v';
    const TEMPLATE_ID = 'template_b1y5qyo';
    const PUBLIC_KEY = 'b32A-OS0qdna8THmq';

    const form = useRef<HTMLFormElement | null>(null); 

    const sendEmail = (e: FormEvent) => {

        e.preventDefault();

        if (form.current)
            emailjs.sendForm(SERVICEID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
    }

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

                            <form ref={form} onSubmit={sendEmail} name="contact" className="contact-form validate-form">

                                <div className="wrap-input validate-input" data-validate="Please enter your name">
                                    <input className="input" type="text" name="user_name" placeholder="Full Name" />
                                </div>

                                <div className="wrap-input validate-input" data-validate="Please enter your email">
                                    <input className="input" type="text" name="user_email" placeholder="E-mail" />
                                </div>

                                <div className="wrap-input validate-input" data-validate="Please enter your message">
                                    <textarea className="input" name="message" placeholder="Your Message"
                                        style={{ resize: 'none' }}></textarea>
                                </div>

                                <div className="container-contact-form-btn">
                                    <button type="submit" className="contact-form-btn flex gap-2">
                                        <span>Send</span>
                                        <FaTelegram className='h-7 w-7 ' />
                                    </button>
                                </div>

                                <div className="grid-container">
                                    <div className="item1 left-align"><i className="fa fa-lg fa-map-marker-alt"></i>
                                        Koramangala 1st Block, Bangalore, 560034
                                    </div>
                                    <div className="item4 right-align"><i className="fa fa-lg fa-phone"></i> 9745563649</div>

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