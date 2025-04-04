import { motion } from "framer-motion";
import Container from "../Container";
import { FaArrowDown } from "react-icons/fa6";

function PortfolioHero() {

    const scrollToNextSection = () => {
        const nextSection = document.getElementById("caseStudy");
        if (nextSection) {
            const offset = 95;
            const elementPosition = nextSection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        }
    };

    return (
        <div className="w-full h-screen bg-gradient-to-b from-[#beebe8] via-[#ebdefa] to-[#f3eef8] flex flex-col justify-center items-center">
            <Container>
                <div className="flex gap-8 justify-center items-center flex-col font-medium">
                    <div className="text-8xl text-center tracking-widest">
                        Crafting Exceptional
                        <br />
                        Web Experiences
                    </div>
                    <div className="text-2xl tracking-widest text-gray-400">
                        Turning Ideas into Interactive & Engaging Web Solutions
                    </div>
                </div>
            </Container>

            {/* Scroll Down Button */}
            <motion.div
                className="absolute bottom-12 flex justify-center"
                animate={{ y: [0, 15, 0] }} // Up and down animation
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
                <a onClick={scrollToNextSection}>
                    <div className="w-14 h-14 flex justify-center items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg cursor-pointer text-white text-lg hover:scale-105 transition-all duration-300">
                        <FaArrowDown />
                    </div>
                </a>
            </motion.div>
        </div>
    );
}

export default PortfolioHero;
