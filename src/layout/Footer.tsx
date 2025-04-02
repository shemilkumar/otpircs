import React from 'react';
import './Footer.css'; // Import your CSS file
import { FaFacebook, FaLocationDot, FaTelegram, FaTwitter } from 'react-icons/fa6';
import { IoIosCall, IoIosMail } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';

const Footer: React.FC = () => {
    return (
        <footer className="footer-section bg-gradient-to-b from-teal-50 via-white to-white">
            <div className="container">
                <div className="footer-cta pt-5 pb-5">
                    <div className="row flex justify-between py-10">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta flex items-center gap-2">                                {/* <i className="fas fa-phone"></i> */}
                                <IoIosCall
                                    className='h-10 w-10 text-purple-500' />

                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span>9876543210</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta flex items-center gap-2">
                                {/* <i className="fas fa-map-marker-alt"></i> */}
                                <FaLocationDot className='h-10 w-10 text-purple-500' />
                                <div className="cta-text">
                                    <h4>Find us</h4>
                                    <span>1010 Avenue, sw 54321, chandigarh</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta flex items-center gap-2">
                                {/* <i className="far fa-envelope-open"></i> */}
                                <IoIosMail className='h-10 w-10 text-purple-500' />

                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <span>mail@info.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content pt-5 pb-5">
                    <div className="row flex justify-between gap-8 py-8">
                        <div className="col-xl-4 col-lg-4 mb-50 w-5/12">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html">
                                        <img
                                            src="https://i.ibb.co/QDy827D/ak-logo.png"
                                            className="img-fluid"
                                            alt="logo"
                                        />
                                    </a>
                                </div>
                                <div className="footer-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                                        sed do eiusmod tempor incididuntut consec tetur adipisicing
                                        elit,Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <div className='flex gap-4'>
                                        <FaFacebook className='bg-white text-[#3B5998] h-12 w-12 p-2  rounded-full' />
                                        <FaTwitter className='bg-white text-[#55ACEE] h-12 w-12 p-2 rounded-full' />
                                        <FcGoogle className='bg-white text-[#DD4B39] h-12 w-12  p-2 rounded-full' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Expert Team</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">Latest News</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50 w-5/12">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" />
                                        <button>
                                            <FaTelegram className='h-9 w-9 ' />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area w-full">
                {/* <div className="container"> */}
                <div className="row flex justify-between px-[185px]">
                    <div className="">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved <a>{" "}Shemil</a></p>
                        </div>
                    </div>
                    <div className="">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
