import Container from "./Container";

const GridTestimonials = () => {

    return (
        <div className=" bg-teal-50 py-28 relative">
            <Container>

                <div className="px-40 mb-24 ">

                    {/* <div className="sun" /> */}

                    <img src="/shapes/Ellipse 5.svg" className="shape circle-2" alt="" />
                    {/* <img src="/shapes/Rectangle 3.svg" className="shape circle-1" alt="" /> */}
                    {/* <img src="/shapes/Ellipse 9.svg" className="shape rectangle-1" alt="" /> */}

                    <div className="mb-20 relative">
                        <span className="text-fuchsia-600 mx-4 px-4 font-medium py-2 bg-fuchsia-200 rounded-full">Reviews</span>
                        <h1 className="px-4 text-4xl font-medium mt-6">Why Our Clients Love Us
                        </h1>
                    </div>

                    <div className="testimonial-container">
                        <div className="grid grid-cols-4 gap-6">

                            <div className="col-span-2 rounded-lg p-8 flex flex-col gap-6 bg-violet-200 text-black shadow-xl z-50 relative">
                                {/* <img src="/pin.png" className="h-8 w-8 absolute top-1 right-1/2" alt="" /> */}
                                <div className="flex gap-4 items-center">
                                    <img src="https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg" alt="Simonette Lindermann" className='rounded-full h-12 w-12 object-cover' />
                                    <div className="flex flex-col">
                                        <span className="font-medium text-sm text-gray-700">Simonette Lindermann</span>
                                        <span className="text-xs font-medium text-gray-400">Software Engineer</span>
                                    </div>
                                </div>
                                <div className="text-xl font-medium text-gray-800">Mind-blowing discovery! changed my routine. Essential for everyone. A vise advice to all interested. Can't imagine without it!</div>

                                <div className="text-sm italic text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, commodi explicabo? Quis quasi porro deleniti temporibus fuga repellat incidunt pariatur aliquid doloribus expedita voluptates inventore, libero laudantium ullam ab culpa nobis nemo sunt qui reprehenderit quidem eum? Quis, dolor explicabo?</div>
                            </div>

                            <div className="rounded-lg p-8 flex flex-col gap-6 bg-sky-200 text-black shadow-xl z-50 relative">
                                {/* <img src="/pin.png" className="h-8 w-8 absolute top-1 right-1/2" alt="" /> */}

                                <div className="flex gap-4 items-center">
                                    <img src="https://img.freepik.com/free-photo/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera_171337-1345.jpg" className='rounded-full h-12 w-12 object-cover' />
                                    <div className="flex flex-col">
                                        <span className="font-medium text-sm text-gray-700">James Wilson</span>
                                        <span className="text-xs font-medium text-gray-400">E-commerce Manager</span>
                                    </div>
                                </div>
                                <div className="text-xl font-medium text-gray-800">Unbelievable gem! Altered my life. A must-have now.</div>

                                <div className="text-sm italic text-gray-600">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ea rem quam cupiditate, eveniet ipsam necessitatibus repellat."</div>
                            </div>

                            <div className="row-span-2 rounded-lg p-8 flex flex-col gap-6 bg-white text-black shadow-xl z-50 relative">
                                {/* <img src="/pin.png" className="h-8 w-8 absolute top-1 right-1/2" alt="" /> */}

                                <div className="flex gap-4 items-center">
                                    <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" alt="Simonette Lindermann" className='rounded-full h-12 w-12 object-cover' />
                                    <div className="flex flex-col">
                                        <span className="font-medium text-sm text-gray-700">Lucas Anderson</span>
                                        <span className="text-xs font-medium text-gray-400">Startup Founder</span>
                                    </div>
                                </div>
                                <div className="text-xl font-medium text-gray-800">Such a life-changing experience. Highly recommended</div>

                                <div className="text-sm italic text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat aperiam sit porro libero quo praesentium esse voluptas suscipit illo hic, id explicabo delectus, similique, soluta asperiores voluptatem ex alias veritatis voluptates perferendis. Accusantium atque exercitationem quaerat quos sed, suscipit eius tenetur delectus hic, error recusandae consequatur, iure facilis consequuntur nemo ex maxime repudiandae illum nostrum eaque explicabo in ad velit. Recusandae nostrum praesentium est ad vero repellat ducimus consequuntur magnam cum hic perferendis quis doloribus atque mollitia nesciunt, provident deserunt.</div>
                            </div>

                            <div className="rounded-lg p-8 flex flex-col gap-6 bg-lime-50 text-black shadow-xl z-50 relative">
                                {/* <img src="/pin.png" className="h-8 w-8 absolute top-1 right-1/2" alt="" /> */}

                                <div className="flex gap-4 items-center">
                                    <img src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg" alt="Simonette Lindermann" className='rounded-full h-12 w-12 object-cover' />

                                    <div className="flex flex-col">
                                        <span className="font-medium text-sm text-gray-700">Merilee Beal</span>
                                        <span className="text-xs font-medium text-gray-400">Architecht</span>
                                    </div>
                                </div>
                                <div className="text-xl font-medium text-gray-800">Life-altering find! Enthusiastically suggest to all.</div>

                                <div className="text-sm italic text-gray-600">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ea rem quam cupiditate, eveniet ipsam necessitatibus repellat."</div>
                            </div>

                            <div className="col-span-2 rounded-lg p-8 flex flex-col gap-6 bg-slate-200 text-black shadow-xl z-50 relative">
                                {/* <img src="/pin.png" className="h-8 w-8 absolute top-1 right-1/2" alt="" /> */}

                                <div className="flex gap-4 items-center">
                                    <img src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg" alt="Simonette Lindermann" className='rounded-full h-12 w-12 object-cover' />
                                    <div className="flex flex-col">
                                        <span className="font-medium text-sm text-gray-700">Avan Martinez</span>
                                        <span className="text-xs font-medium text-gray-400">Healthcare Consultant</span>
                                    </div>
                                </div>
                                <div className="text-xl font-medium text-gray-800">Phenomenal addition! Completely transformed my days. Can't go without it. Strongly endorse for all. A game-changer for sure, Highly recommended!</div>

                                <div className="text-sm italic text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, commodi explicabo? Quis quasi porro deleniti temporibus fuga repellat incidunt pariatur aliquid doloribus expedita voluptates inventore, libero laudantium ullam ab culpa nobis nemo sunt qui reprehenderit quidem eum? Quis, dolor explicabo?</div>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default GridTestimonials;