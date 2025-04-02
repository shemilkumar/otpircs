import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './Test.css'; // Assuming you put your CSS in this file
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardComponent = () => {
    const tiltRef = useRef(null);

    // const settings = {
    //     arrows: false,
    //     className: "center",
    //     centerMode: true,
    //     centerPadding: "60px",
    //     slidesToShow: 4,
    //     infinite: true,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    //     cssEase: "linear",

    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 arrows: false,
    //                 centerMode: true,
    //                 centerPadding: '40px',
    //                 slidesToShow: 3
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 arrows: false,
    //                 centerMode: true,
    //                 centerPadding: '40px',
    //                 slidesToShow: 1
    //             }
    //         }
    //     ]
    // };

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 20,
                speed: 400,
                glare: true,
                transition: true,
                reverse: true,
            });
        }
    }, []);

    // const testimonialData = [
    //     {
    //         avatar: "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
    //         name: "Simonette Lindermann",
    //         review: "Mind-blowing discovery! changed my routine. Essential for everyone. A vise advice to all interested. Can't imagine without it!"
    //     },
    //     {
    //         avatar: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg",
    //         name: "Merilee Beal",
    //         review: "Unbelievable gem! Altered my life. A must-have now. Wholeheartedly advise it to everyone. An absolute game-changer"
    //     },
    //     {
    //         avatar: "https://img.freepik.com/free-photo/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera_171337-1345.jpg",
    //         name: "Suzi Lankester",
    //         review: "Phenomenal addition! Completely transformed my days. Can't go without it. Strongly endorse for all. A game-changer for sure!"
    //     },
    //     {
    //         avatar: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
    //         name: "Gaston Cunnow",
    //         review: "Amazing product! It changed my life. Can't live without it now. Highly recommended to everyone!"
    //     },
    //     {
    //         avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    //         name: "Marys Lobb",
    //         review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
    //     },
    //     {
    //         avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    //         name: "Marys Lobb",
    //         review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
    //     },
    //     {
    //         avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    //         name: "Marys Lobb",
    //         review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
    //     }
    // ];

    return (

        <div className='flex justify-center items-center my-44   w-full'>
            <div className="box" ref={tiltRef}>
                <div className="elements bg"></div>
                <div className="elements imgBx">
                    <img src="https://github.com/Khyes/image_dump/blob/main/02.png?raw=true" alt="Someone Famous" />
                </div>
                <div className="elements name">
                    <h2>Someone Famous</h2>
                </div>
                <div className="elements content">
                    <p>Te alios cetero est Epicuri inquam video igitur quidem equidem De quas equidem aut instructior appellantur ipse non tenent video.</p>
                </div>
                <div className="card"></div>
            </div>
        </div>
    );
};

export default CardComponent;


{/* <div className="box" ref={tiltRef}>
    <div className="elements bg"></div>
    <div className="elements imgBx">
        <img src="https://github.com/Khyes/image_dump/blob/main/02.png?raw=true" alt="Someone Famous" />
    </div>
    <div className="elements name">
        <h2>Someone Famous</h2>
    </div>
    <div className="elements content">
        <p>Te alios cetero est Epicuri inquam video igitur quidem equidem De quas equidem aut instructior appellantur ipse non tenent video.</p>
    </div>
    <div className="card"></div>
</div> */}


// {testimonialData.map((testimonial, index) => (
//     <div className="box" ref={tiltRef} key={index}>
//         <div className="elements bg"></div>
//         <div className="elements imgBx">
//             <img src={testimonial.avatar} />
//         </div>
//         <div className="elements name">
//             <h2>{testimonial.name}</h2>
//         </div>
//         <div className="elements content">
//             <p>{testimonial.review}</p>
//         </div>
//         <div className="card"></div>
//     </div>
// ))}

{/* <div className='flex justify-center items-center my-44 '>
            <div className='w-1/2'>
                <Slider {...settings}>
                    {testimonialData.map((testimonial, index) => (
                         <div className='flex justify-center items-center my-44 border-green-500 border-2 w-[300px]'>
                <div className="box" ref={tiltRef}>
                    <div className="elements bg"></div>
                    <div className="elements imgBx">
                        <img src="https://github.com/Khyes/image_dump/blob/main/02.png?raw=true" alt="Someone Famous" />
                    </div>
                    <div className="elements name">
                        <h2>Someone Famous</h2>
                    </div>
                    <div className="elements content">
                        <p>Te alios cetero est Epicuri inquam video igitur quidem equidem De quas equidem aut instructior appellantur ipse non tenent video.</p>
                    </div>
                    <div className="card"></div>
                </div>
            </div>
                    ))}
                </Slider>
            </div>
        </div> */}