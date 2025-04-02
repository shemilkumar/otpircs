import { useState } from "react";
import { Link } from "react-scroll";
import ContactUsModal from "./ContactUsModal/ContactUsModal";

const Navbar = () => {

    const [showModal, setShowModal] = useState(false)
    const navbarHeight = 128;

    return (
        <>
            <div className="w-full flex justify-between py-8 px-36 fixed top-0 z-[99] backdrop-blur-3xl">
                <div className="text-2xl font-semibold cursor-pointer z-10">LOGO</div>
                <ul className="flex gap-24 items-center justify-center">
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
                        <button onClick={() => setShowModal(true)}>
                            Contact Us
                        </button>
                    </li>
                </ul>
            </div>

            {showModal ? <ContactUsModal closeModal={() => setShowModal(false)} /> : ''}
        </>
    );
};

export default Navbar;
