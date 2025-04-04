import { useState } from "react";
import { Link } from "react-scroll";
import ContactUsModal from "./ContactUsModal/ContactUsModal";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const [showModal, setShowModal] = useState(false)
    const navbarHeight = 128;
    const navigate = useNavigate();
    const navigateToPortfolio = () => navigate('portfolio')
    // const navigateToPortfolio = () => navigate('expensify-case-study')

    return (
        <>
            <div className="w-full flex justify-between py-8 px-36 fixed top-0 z-[99] backdrop-blur-3xl">
                <div className="text-2xl font-semibold cursor-pointer z-10 flex items-center justify-center"
                    onClick={() => navigate('/')}
                >
                    <img src={`/logo/insignia-black.png`} alt="logo" className="w-full h-14" />
                </div>
                <ul className="flex gap-16 items-center justify-center">
                    {/* <li className="cursor-pointer border-b-2 border-transparent hover:border-purple-400 transition-all duration-500"> */}
                    <li className="cursor-pointer">

                        <Link to="projects" smooth={true} offset={-navbarHeight} duration={500}>Projects</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to="whyus" smooth={true} offset={-navbarHeight} duration={500}>Why Us</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to="about" smooth={true} offset={-navbarHeight} duration={750}>About</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to="testimonials" smooth={true} offset={-5} duration={750}>Testimonial</Link>
                    </li>
                    <li>
                        <div className="flex gap-8">
                            <button onClick={() => navigateToPortfolio()} className="flex  gap-2  items-center bg-transparent border-2 border-purple-500 text-black font-normal hover:bg-transparent">
                                <span>Portfolio</span>
                                <FaArrowRight />
                            </button>
                            <button onClick={() => setShowModal(true)}>
                                Contact Us
                            </button>
                        </div>
                    </li>
                </ul>
            </div>

            {showModal ? <ContactUsModal closeModal={() => setShowModal(false)} /> : ''}
        </>
    );
};

export default Navbar;
