// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from "./Container";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './Test.css'

// import required modules
import { EffectCoverflow, } from 'swiper/modules';

const Test = () => {

    const testimonialData = [
        {
            avatar: "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
            name: "Simonette Lindermann",
            review: "Mind-blowing discovery! changed my routine. Essential for everyone. A vise advice to all interested. Can't imagine without it!"
        },
        {
            avatar: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg",
            name: "Merilee Beal",
            review: "Unbelievable gem! Altered my life. A must-have now. Wholeheartedly advise it to everyone. An absolute game-changer"
        },
        {
            avatar: "https://img.freepik.com/free-photo/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera_171337-1345.jpg",
            name: "Suzi Lankester",
            review: "Phenomenal addition! Completely transformed my days. Can't go without it. Strongly endorse for all. A game-changer for sure!"
        },
        {
            avatar: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
            name: "Gaston Cunnow",
            review: "Amazing product! It changed my life. Can't live without it now. Highly recommended to everyone!"
        },
        {
            avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
            name: "Marys Lobb",
            review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
        },
        {
            avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
            name: "Marys Lobb",
            review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
        },
        {
            avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
            name: "Marys Lobb",
            review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
        }
    ];

    return (
        <div className="bg-gradient-to-b from-teal-50  to-white py-28 ">
            <Container>
                <div className="px-40 mb-24 relative">
                    <span className="text-fuchsia-600 mx-4 px-4 font-medium py-2 bg-fuchsia-200 rounded-full">Testimonial</span>
                    <h1 className="px-4 text-4xl font-medium mt-6">Reviews</h1>

                    {/* <div className="absolute top-28 right-96  h-20 w-20 rounded-full bg-gradient-to-b from-fuchsia-500 via-blue-500 to-purple-300"></div> */}
                </div>
            </Container>

            <div className='px-72'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow]}
                    className="mySwiper"
                >
                    {
                        testimonialData.map((testimonial, index: number) => (
                            <div className='p-4'>
                                <SwiperSlide key={index} className="swiper-slide">
                                    <div className='w-full p-12 border-2 bg-white shadow-lg rounded-xl'>
                                        <div className="flex gap-4">
                                            <img src={testimonial.avatar} alt={testimonial.name} className='rounded-full h-24 w-24 object-cover' />
                                            <div className='flex flex-col gap-1 justify-center'>
                                                <h3 className='font-medium text-2xl'>{testimonial.name}</h3>
                                                <p className='text-lg text-gray-500 font-medium'>Co Founder of Amazon</p>
                                            </div>
                                        </div>
                                        <div className="mt-6 text-xl">
                                            <p>``{testimonial.review}`` Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, numquam.
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi alias perspiciatis quis temporibus dolor reprehenderit necessitatibus explicabo magni eaque modi.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>

                        ))
                    }

                </Swiper>
            </div>

        </div>
    );
}

export default Test;

// {
//     testimonialData.map((testimonial, index) => (
//         <SwiperSlide key={index} className="swiper-slide">
//             <div className="ImgHolder">
//                 <img src={testimonial.avatar} alt={testimonial.name} />
//             </div>
//             <div className="ContentHolder">
//                 <h3>{testimonial.name}</h3>
//                 <p>{testimonial.review}</p>
//             </div>
//         </SwiperSlide>
//     ))
// }