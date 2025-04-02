import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CaseStudy from "./CaseStudy";
import CaseStudyThree from "./CaseStudyThree";
import CaseStudyTwo from "./CaseStudyTwo";
import CaseStudyFour from "./CaseStudyFour";
import Container from "../Container";

function CaseStudySlick() {

    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", height: "100px", width: 100, background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // pauseOnHover: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="border-red-500">
            <Container>
                <Slider {...settings}>
                    <div>
                        <CaseStudy />
                    </div>
                    <div>
                        <CaseStudyThree />
                    </div>
                    <div>
                        <CaseStudyTwo />
                    </div>
                    <div>
                        <CaseStudyFour />
                    </div>
                </Slider>
            </Container>
        </div>
    );
}

export default CaseStudySlick;