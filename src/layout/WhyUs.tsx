import { IoPersonSharp, IoSettings } from "react-icons/io5";
import RegularCard from "../components/RegularCard";
import Container from "./Container";
import { FaCode } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdDashboardCustomize } from "react-icons/md";


const WhyUS = () => {

    const cardContents = [
        {
            title: "A Complete Product For Your Business",
            description: "We build applications that are rich in content and have a good user interface to deliver a premium user experience for your customers.",
            icon: IoPersonSharp
        },
        {
            title: "Well Organized Codes",
            description: "The coding structure of our items is organized so other developers can easily recognize the pattern and make updates as needed.",
            icon: FaCode
        },
        {
            title: "SEO & SMM Friendly",
            description: "Our Theme is SEO and SMM friendly which aligns with your digital marketing strategies to bring more organic traffic to your website.",
            icon: FiSearch

        },


    ]

    const cardContents2 = [
        {
            title: "Reliable Support & Maintenance",
            description: "We provide ongoing support and maintenance, ensuring your application remains up-to-date and functions smoothly, giving you peace of mind post-launch.",
            icon: IoSettings
        },
        {
            title: "Tailored to Your Needs",
            description: "We customize each project to suit your business goals, ensuring the end product meets your specific requirements and exceeds expectations.",
            icon: MdDashboardCustomize
        },
        
        // {
        //     title: "Responsive & Fast",
        //     description: "Our applications are optimized for speed and fully responsive, providing a seamless experience across all devices and ensuring your customers stay engaged.",
        //     icon: IoPersonSharp
        // },
    ]

    return <div className="bg-gradient-to-b from-[#f3eef8] via-[#ebdefa] to-[#e5cffd] pb-40">
        <Container>
            <div className="flex flex-col gap-10 px-40 relative ">

                <img src="/shapes/Ellipse 5.svg" className="shape circle-2" alt="" />
                <img src="/shapes/Rectangle 3.svg" className="shape circle-1" alt="" />
                <img src="/shapes/Ellipse 9.svg" className="shape rectangle-1" alt="" />

                <div className="flex justify-between items-center p-8">
                    <h1 className="text-5xl font-medium">Why Us ?</h1>
                    <p className="w-[40%] text-gray-500 font-normal text-lg">
                        At Scrito, we don't just build solutions – we create experiences that empower your business to grow. Our commitment to innovation, reliability, and customer success makes us the partner you can trust
                    </p>
                </div>

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-20 justify-items-center w-full m-auto">
                {
                    cardContents.map((card => {
                        return <RegularCard
                            title={card.title}
                            description={card.description}
                            icon={card.icon}
                        />
                    }))
                }
            </div> */}

                <div className="flex justify-center gap-12 mb-10">
                    {
                        cardContents.map(((card, index) => {
                            return <RegularCard
                                key={index}
                                title={card.title}
                                description={card.description}
                                icon={card.icon}
                            />
                        }))
                    }
                </div>

                <div className="flex justify-center gap-12">
                    {
                        cardContents2.map(((card, index) => {
                            return <RegularCard
                                key={index}

                                title={card.title}
                                description={card.description}
                                icon={card.icon}
                            />
                        }))
                    }
                </div>

            </div>


        </Container>
    </div>
}

export default WhyUS;