import Container from "./Container";

const About = () => {

    return <div className="bg-gradient-to-b from-[#e5cffd] via-[#e6e0ee] to-blue-100 pb-40">
        <Container>
            <div className="flex gap-10 justify-between px-40">

                <div className="flex flex-col justify-center gap-8 p-8 w-1/2">
                    <span className="text-fuchsia-600 px-4 font-medium py-2 bg-fuchsia-200 rounded-full w-max">
                        About Us
                    </span>
                    <h1 className="text-5xl font-medium justify-start">Who We Are</h1>
                    <p className="w-full text-gray-500 font-normal text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate amet quos velit ullam natus atque provident, voluptatibus corporis vero? Dicta repellat inventore aut quisquam, tempora unde voluptas non aspernatur, reiciendis dignissimos dolores sunt eveniet, atque molestiae eos fugit? Dolor, recusandae.
                    </p>
                </div>


                <div className="w-1/2">
                    <img src="/img/Team-amico.svg" alt="" />
                </div>

            </div>

        </Container>
    </div>
}

export default About;