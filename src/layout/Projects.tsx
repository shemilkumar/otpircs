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
        { src: "/img/image1.jpg", href: "https://new.axilthemes.com/themes/abstrak/home-startup/" },
        { src: "/img/image2.jpg", href: "https://new.axilthemes.com/themes/abstrak/corporate-agency/" },
        { src: "/img/image3.webp", href: "https://new.axilthemes.com/themes/abstrak/" },
        { src: "/img/image4.webp", href: "https://new.axilthemes.com/themes/abstrak/creative-agency/" },
    ];

    return (
        <div className="mb-48 -mt-40 flex ">
            <div className="my-4 mr-4 p-2 bg-white flex justify-center items-center shadow-lg w-[5%]">
                <h1 className="text-3xl -rotate-90 font-medium tracking-widest">Projects</h1>
            </div>
            <div className="w-[95%] overflow-hidden">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full h-[400px] p-4">
                            <img className="w-full h-full object-cover hover:scale-110 transition-all duration-500" src={slide.src} alt="Demo" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Projects;
// reference Carousel component
