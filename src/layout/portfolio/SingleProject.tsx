import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Container from "../Container";
import { useEffect, useRef, useState } from "react";

function SingleProject({ image, title, description, href, gradient, buttonColor, layout = 'right' }: { image: string, title: string, description: string, href: string, gradient: { from: string, to: string }, buttonColor: string, layout?: string }) {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {

        console.log(buttonColor, gradient.from);


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

    const isLeft = layout === 'left';

    return (
        <>
            <Container>

                <div className="relative mt-4 mb-24 rounded-3xl">
                    <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} border-red-500 border-0`}>
                        <img src={image} alt="" className="w-[50%] border-purple-500 border-0 m-24 rounded-2xl" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-start items-start p-6">

                        <div
                            ref={ref}
                            style={{ backgroundImage: `linear-gradient(to top, ${gradient.from}, ${gradient.to})` }}
                            className={`rounded-3xl absolute bottom-0 left-0 h-1/4 w-full transition-all duration-1000 ${isVisible ? 'opacity-50' : 'opacity-0'}`}
                        ></div>


                        <div
                            ref={ref}
                            style={{ backgroundImage: `linear-gradient(to ${isLeft ? 'right' : 'left'}, ${gradient.to}, ${gradient.from})` }}
                            className={`rounded-3xl absolute bottom-0 ${isLeft ? 'right-0' : 'left-0'} opacity-90 w-1/2 h-full transition-all duration-1000 ${isVisible ? 'opacity-50' : 'opacity-0'}`}
                        ></div>


                        <div ref={ref}
                            className={`absolute ${isLeft ? 'right-0' : 'left-0'} border-red-600 pt-40 pl-16 w-1/3 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                            <h2 className="relative top-0 text-white text-4xl font-bold mb-4">{title}</h2>
                            <p className="relative text-gray-100 text-lg mt-4 mr-4">
                                {description}
                            </p>
                            <a
                                style={{ backgroundColor: buttonColor }}
                                className="relative mt-4 flex gap-2 items-center px-5 py-2.5 text-base font-semibold text-white cursor-pointer w-fit rounded-lg hover:scale-95 hover:-brightness-[110%] transition-all duration-200"
                                href={href}
                                target="_blank" >
                                {isLeft && <FaArrowLeft />}
                                <span>Preview</span>
                                {!isLeft && <FaArrowRight />}
                            </a>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    );
}

export default SingleProject;
