import NavbarPortfolio from "../components/NavbarPortfolio";
import Footer from "../layout/Footer";
import CaseStudy from "../layout/portfolio/CaseStudy";
import PortfolioHero from "../layout/portfolio/PortfolioHero";
import PortfolioProjects from "../layout/portfolio/PorfolioProjects";

function Portfolio() {
    return (
        <>
            <NavbarPortfolio theme="light" />
            <PortfolioHero />
            {/* <CaseStudySlick /> */}

            <CaseStudy />

            <PortfolioProjects />

            {/* <CaseStudyThree />
            <CaseStudyTwo />
            <CaseStudyFour />

            <CaseStudyFive />
            <CaseStudySix /> */}

            {/* <CaseStudyGrid /> */}

            <Footer />
        </>
    )
}

export default Portfolio;
