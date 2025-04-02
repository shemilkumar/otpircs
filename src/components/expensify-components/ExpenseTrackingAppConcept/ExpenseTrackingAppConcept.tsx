import './ExpenseTrackingAppConcept.css';
import expensify_icon from '/src/assets/expensify-case-study/Frame 15.png';
import phones_image from '/src/assets/expensify-case-study/Group 184.png';

// import 'src/assets/expensify-case-study/add transaction.png'
// import 'src/assets/expensify-case-study/add transaction.png'


const ExpenseTrackingAppConcept = () => {
    return (
        <section className="intro">
            <div className="left-content">
                <img src={expensify_icon} alt="frame-15" className="expensify-icon" />
                <h1 className="expense-tracking-app-concept">
                    Expense Tracking <br />
                    App Concept
                </h1>
            </div>
            <div className="right-content">
                <img src={phones_image} alt="phones" className="phone-image" />
            </div>
        </section>
    );
};

export default ExpenseTrackingAppConcept;
