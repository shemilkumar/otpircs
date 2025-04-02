import { FaArrowRight } from "react-icons/fa6";
import Container from "../Container";

function CaseStudyThree() {
    return (
        <>
            <Container>
                <div className="relative mb-40">
                    <div className="flex justify-end">
                        <img src="/img/mockup4.png" alt="" className="w-[70%] border-purple-500 z-10" />
                    </div>

                    <div className="absolute inset-0 flex flex-col justify-start items-start p-6 ">

                        <div className="absolute bottom-0 left-0 bg-gradient-to-t to-transparent from-blue-400 opacity-30 h-1/4 w-full"></div>
                        <div className="absolute bottom-0 left-0 bg-gradient-to-l from-transparent to-blue-400 opacity-90 w-1/2 h-full"></div>

                        <div className="pt-48 pl-16 w-1/3">
                            <h2 className="relative top-0 text-4xl font-bold mb-4">Showcasing Innovative Digital Solutions</h2>
                            <p className="relative text-lg mt-4">
                                Explore our cutting-edge portfolio featuring responsive web designs, intuitive mobile applications, and seamless user experiences. Each project is crafted with attention to detail, ensuring functionality and aesthetics that elevate your brand's online presence. Explore our cutting-edge portfolio featuring responsive web designs, intuitive mobile applications, and seamless user experiences
                            </p>
                            <button className="relative mt-4 flex gap-2 items-center bg-blue-500">
                                <span>Preview</span>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default CaseStudyThree;
