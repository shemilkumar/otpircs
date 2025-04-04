import { useEffect } from 'react';
import './Expensify.css'

import ExpenseTrackingAppConcept from '../ExpenseTrackingAppConcept/ExpenseTrackingAppConcept';
import ProblemStatement from '../ProblemStatement/ProblemStatement';
import ObjectivesAndGoals from '../ObjectivesAndGoals/ObjectivesAndGoals';
import ProductUsers from '../ProductUsers/ProductUsers';
import QuantitativeResearch from '../Quantitative Research/QuantitativeResearch';
import UserNeeds from '../UserNeeds/UserNeeds';
import FeaturesAndFunctionalities from '../FeaturesAndFunctionalities/FeaturesAndFunctionalities';
import UserPersona from '../UserPersona/userPersona';
import Sketches from '../Sketches/Sketches';
import MajorScreens from '../MajorScreens/MajorScreens';
import Screens from '../Screens/Screens';
import useIntersectionObserver from '../useIntersectionObserver/useIntersectionObserver';
import NavbarPortfolio from '../../NavbarPortfolio';


function Expensify() {
    // Use the custom hook
    const fadeInRef = useIntersectionObserver((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            // console.log('Intersecting', entry.target.classList);
        } else {
            entry.target.classList.remove('fade-in');
            // console.log('Not Intersecting', entry.target.classList);
        }
        console.log("Ithhaada");

    }, { threshold: 0.5 });

    // Effect to observe the required elements
    useEffect(() => {
        const allElements = document.querySelectorAll('.Expensify h1, .Expensify p, .Expensify img, .Expensify .screens-heading');

        allElements.forEach((el, index) => {
            fadeInRef.current[index] = el as HTMLElement; // Typecast to HTMLElement
            // console.log('Element added to ref:', el); // Log each added element
        });

        // Cleanup function
        return () => {
            fadeInRef.current = [];
        };
    }, [fadeInRef]);

    return (
        <>
            <NavbarPortfolio theme="dark" from='casestudy'/>
            <div className="Expensify">
                <ExpenseTrackingAppConcept />
                <ProblemStatement />
                <ObjectivesAndGoals />
                <ProductUsers />
                <QuantitativeResearch />
                <UserNeeds />
                <FeaturesAndFunctionalities />
                <UserPersona />
                <Sketches />
                <MajorScreens />
                <Screens />
            </div>
        </>

    );
}

export default Expensify;