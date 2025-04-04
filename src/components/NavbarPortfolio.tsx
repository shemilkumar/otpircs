import { useState } from "react";
// import { Link } from "react-scroll";
import ContactUsModal from "./ContactUsModal/ContactUsModal";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const NavbarPortfolio = ({ theme = 'light', from = '' }: { theme?: string, from?: string }) => {

    const [showModal, setShowModal] = useState(false)
    // const navbarHeight = 128;
    const navigate = useNavigate();
    const navigateToPage = () => {
        if (from === 'casestudy') navigate('/portfolio');
        else navigate('/')
    }

    return (
        <>
            <div className={`w-full flex justify-between py-8 px-36 fixed top-0 z-[99] backdrop-blur-3xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                <div className="text-2xl font-semibold cursor-pointer z-10 flex items-center justify-center"
                    onClick={() => navigate('/')}
                >
                    <img src={`/logo/insignia-${theme === 'dark' ? 'white' : 'black'}.png`} alt="logo" className="w-full h-14" />
                </div>

                <ul className="flex gap-16 items-center justify-center">
                    <li>
                        <div className="flex gap-8">
                            <button onClick={() => navigateToPage()} className={`flex  gap-2  items-center bg-transparent border-2 border-purple-500 font-normal hover:bg-transparent ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                <FaArrowLeft />
                                <span>{from === 'casestudy' ? 'Portfolio' : 'Home'}</span>
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

export default NavbarPortfolio;
