import Container from "./Container";
import '../assets/css/main.css'

const Hero = () => {
    return <div className="w-full h-screen bg-gradient-to-b from-[#beebe8] via-[#ebdefa] to-[#f3eef8]">
        <Container>
            <div>
                {/* <img src="/shapes/Ellipse 5.svg" className="absolute" alt="" /> */}
                <img src="/shapes/Ellipse 9.svg" className="shape circle-2" alt="" />
                <img src="/shapes/Ellipse 5.svg" className="shape circle-1" alt="" />
                <img src="/shapes/Rectangle 3.svg" className="shape rectangle-1" alt="" />

                <h1 className="text-6xl font-medium leading-normal text-black-600 text-center flex justify-center items-center flex-col pt-72">
                    <span className="z-10">Empowering Businesses with Tailored</span>
                    <span className="z-10">Web Applications and Solutions</span>
                </h1>
                <div className="text-center flex justify-center gap-24 mt-16">
                    <div className="flex flex-col items-center">
                        <span className="text-7xl font-semibold text-fuchsia-700 z-10">25+</span>
                        <span className="text-xl text-gray-500 font-semibold z-10">Websites</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-7xl font-semibold text-fuchsia-700 z-10">10+</span>
                        <span className="text-xl text-gray-500 font-semibold z-10">Clients</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-7xl font-semibold text-fuchsia-700 z-10">150+</span>
                        <span className="text-xl text-gray-500 font-semibold z-10">Pages</span>
                    </div>
                </div>
            </div>
        </Container>
    </div>
}

export default Hero;