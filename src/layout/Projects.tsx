import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {

    const settings = {
        arrows: false,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        // speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };

    const slides = [
        { src: "/img/restaurantly.png", href: "https://restaurantly-scripto.netlify.app/" },
        { src: "/img/montana.png", href: "https://montana-scripto.netlify.app/" },
        { src: "/img/astra-vibe.png", href: "https://astra-vibe.netlify.app/" },
        { src: "/img/blackjack.png", href: "https://blackjack-webgame.netlify.app/" },
        { src: "/img/shopspot.png", href: "https://shopspot-shemil.vercel.app/" },

    ];

    return (
        <div className="mb-48 -mt-40 flex ">
            <div className="mb-2 mr-4 p-2 bg-white flex justify-center items-center shadow-lg w-[5%]">
                <h1 className="text-3xl -rotate-90 font-medium tracking-widest">Projects</h1>
            </div>
            <div className="w-[95%] overflow-hidden">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <a key={index} className="w-full bg-transparent px-4" href={slide.href} target="blank">
                            <div className="bg-white p-4">
                                <img className="w-full h-full hover:scale-110 transition-all duration-500" src={slide.src} alt="Demo" />
                            </div>
                        </a>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Projects;
// reference Carousel component
