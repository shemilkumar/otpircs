import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "./Container";

const SliderPages = () => {
    // const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "200px",
    //     slidesToShow: 3,
    //     speed: 500
    // };
    const settings = {
        arrows: false,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: false,
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
        { src: "/img/sliding_images/blackjack.png", href: "https://blackjack-webgame.netlify.app/" },
        { src: "/img/sliding_images/astra-vibe.png", href: "https://blackjack-webgame.netlify.app/" },
        { src: "/img/sliding_images/shopspot-3.png", href: "https://blackjack-webgame.netlify.app/" },
        { src: "/img/sliding_images/shopspot-1.png", href: "https://blackjack-webgame.netlify.app/" },
        { src: "/img/sliding_images/shopspot-2.png", href: "https://blackjack-webgame.netlify.app/" },
        { src: "/img/sliding_images/montana-2.png", href: "https://blackjack-webgame.netlify.app/" },
        { src: "/img/sliding_images/restaurantly-1.png", href: "https://blackjack-webgame.netlify.app/" },
        { src: "/img/sliding_images/montana-1.png", href: "https://blackjack-webgame.netlify.app/" },
        { src: "/img/sliding_images/restaurantly-2.png", href: "https://blackjack-webgame.netlify.app/" },
    ];

    return (
        <div className="bg-gradient-to-b from-blue-100 via-blue-50 to-teal-50 pb-40 ">
            <Container>
                <div className="px-40 mb-24 relative">
                    <span className="text-fuchsia-600 mx-4 px-4 font-medium py-2 bg-fuchsia-200 rounded-full">Portfolio</span>
                    <h1 className="px-4 text-4xl font-medium mt-6">Elegant And Impressive</h1>
                    <h1 className="px-4 text-4xl font-medium">Inner Pages</h1>

                    {/* <div className="absolute top-28 right-96  h-20 w-20 rounded-full bg-gradient-to-b from-fuchsia-500 via-blue-500 to-purple-300"></div> */}
                </div>
            </Container>
            <div>
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full h-full p-4">
                            <img className=" h-full object-cover " src={slide.src} alt="Demo" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default SliderPages;
