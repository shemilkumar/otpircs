import Container from "../Container";
import SingleProject from "./SingleProject";

function PortfolioProjects() {
    return (
        <>
            <Container>
                <div className="flex flex-col justify-center gap-8 py-8 w-1/2 mb-8">
                    <span className="text-fuchsia-600 px-4 font-medium py-2 bg-fuchsia-200 rounded-full w-max">
                        Web Projects
                    </span>
                    <h1 className="text-5xl font-medium justify-start">Our Digital Creations</h1>
                </div>
            </Container>


            <div className="flex justify-start">
                <span className="mx-36 text-xs text-violet-500 px-4 font-medium py-2 bg-transparent border-2 border-violet-600 rounded-full w-max">
                    Hotel Booking
                </span>
            </div>

            <SingleProject image="/img/montana.png" title="Montana Resort" href="https://montana-scripto.netlify.app/"
                buttonColor="#164e63"
                description="Montana Resort is a beautifully designed, fully responsive website showcasing a premium hotel experience. Built with a clean and modern UI, this project highlights my ability to create visually appealing and user-friendly web experiences."
                gradient={{ from: '#854d0e', to: 'transparent' }} layout="right" />


            <div className="flex justify-end">
                <span className="mx-36 text-xs text-violet-500 px-4 font-medium py-2 bg-transparent border-2 border-violet-600 rounded-full w-max">
                    Event Booking
                </span>
            </div>

            <SingleProject image="/img/astra-vibe.png" title="Astra Vibe" href="https://astra-vibe.netlify.app/"
                buttonColor="#f97316"
                description="Astra Vibe is a sleek and modern website designed for seamless event bookings. It features an intuitive UI, easy navigation, and an elegant layout to provide a great user experience. The website is fully responsive and optimized for performance."
                gradient={{ from: '#1e1b4b', to: 'transparent' }} layout="left" />

            <div className="flex justify-start">
                <span className="mx-36 text-xs text-violet-500 px-4 font-medium py-2 bg-transparent border-2 border-violet-600 rounded-full w-max">
                    Food Ordering
                </span>
            </div>

            <SingleProject image="/img/restaurantly.png" title="Restaurantly" href="https://restaurantly-scripto.netlify.app/"
                buttonColor="#ca8a04"
                description="Restaurantly is a visually engaging website designed for online food ordering. With a well-structured layout and appealing UI, this website highlights restaurant menus, promotions, and easy navigation for an enhanced user experience."
                gradient={{ from: '#1f2937', to: 'transparent' }} layout="right" />

            <div className="flex justify-end">
                <span className="mx-36 text-xs text-violet-500 px-4 font-medium py-2 bg-transparent border-2 border-violet-600 rounded-full w-max">
                    E-commerce
                </span>
            </div>

            <SingleProject image="/img/shopspot.png" title="Shopspot" href="https://shopspot-shemil.vercel.app/"
                buttonColor="#3b82f6"
                description="Shopspot is a modern e-commerce website that provides an elegant platform for showcasing products. Designed with a clean UI and smooth user experience, this project demonstrates my ability to build visually appealing and functional online stores."
                gradient={{ from: '#172554', to: 'transparent' }} layout="left" />

            <div className="flex justify-start">
                <span className="mx-36 text-xs text-violet-500 px-4 font-medium py-2 bg-transparent border-2 border-violet-600 rounded-full w-max">
                    Web Game
                </span>
            </div>

            <SingleProject image="/img/blackjack.png" title="Blackjack Web Game" href="https://blackjack-webgame.netlify.app/"
                buttonColor="#eab308"
                description="Blackjack Web Game is a fun and interactive website that brings the classic casino game to life on the web. Featuring a responsive design and smooth animations, this project showcases my skills in front-end development for interactive applications."
                gradient={{ from: '#052e16', to: 'transparent' }} layout="right" />
        </>

    )
}

export default PortfolioProjects;
