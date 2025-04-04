import Container from "../Container";

const CaseStudyGrid = () => {
    return (
        <>
            <Container>
                <div className="grid grid-cols-6 gap-8">
                    <div className="col-span-4 h-64">
                        first
                    </div>
                    <div className="col-span-2 h-64">
                        second
                    </div>
                    <div className="col-span-3">
                        {/* <img src="/img/mockup1.jpg" alt="" className="object-cover"/> */}
                        <img src="/img/mockup1.png" alt="" className=" border-purple-500" />
                    </div>
                    <div className="col-span-3 h-64">
                        four
                    </div>
                    <div className="col-span-2 h-64">
                        five
                    </div>
                    <div className="col-span-4 h-64">
                        six
                    </div>
                </div>
            </Container>
        </>
    )
}

export default CaseStudyGrid;