import { FaArrowRight } from "react-icons/fa6";
import Container from "../Container";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function CaseStudy() {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after it becomes visible
                }
            },
            {
                threshold: 0.95, // Trigger when 10% of the element is in view
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div id="caseStudy">
            <Container>

                <div className="flex flex-col justify-center gap-8 py-8 w-1/2 mb-8">
                    <span className="text-fuchsia-600 px-4 font-medium py-2 bg-fuchsia-200 rounded-full w-max">
                        Case Studies
                    </span>
                    <h1 className="text-5xl font-medium justify-start">Solution Stories</h1>
                </div>

                <div className="relative mb-24 rounded-3xl">
                    <div className="flex justify-end">
                        <img src="/img/mockup1.png" alt="" className="w-[70%] border-purple-500" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-start items-start p-6">

                        <div ref={ref} className={`rounded-3xl absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent h-1/4 w-full transition-all duration-1000 ${isVisible ? 'opacity-50' : 'opacity-0'}`}></div>
                        <div className={`rounded-3xl absolute bottom-0 left-0 bg-gradient-to-l from-transparent to-black opacity-90 w-1/2 h-full transition-all duration-1000 ${isVisible ? 'opacity-50' : 'opacity-0'}`}></div>

                        <div ref={ref}
                            className={`border-red-600 pt-40 pl-16 w-1/3 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                            <h2 className="relative top-0 text-white text-4xl font-bold mb-4">Expensify</h2>
                            <p className="relative text-white text-lg mt-4">
                                Discover our comprehensive expense tracking module, enabling users to record and categorize personal and shared expenses effortlessly. Benefit from shared expense management tools to split bills and track contributions, all within an intuitive dashboard that visualizes spending patterns and financial habits.
                            </p>
                            <button className="relative mt-4 flex gap-2 items-center"
                                onClick={() => navigate('expensify-case-study')}>
                                <span>Preview</span>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CaseStudy;
