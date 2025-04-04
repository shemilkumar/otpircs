import './FeaturesAndFunctionalities.css';
import pic1 from '/src/assets/expensify-case-study/Frame1.png'
import pic2 from '/src/assets/expensify-case-study/Frame2.png'
import pic3 from '/src/assets/expensify-case-study/Frame3.png'
import ellipse from '/src/assets/expensify-case-study/ellipse.png'

const FeaturesAndFunctionalities = () => {
  return (
    <section className="features-functionalities">
      <div className="features-container">
        <h2 className="features-heading">Features & Functionalities</h2>
        <h3 className="features-subheading">To resolve user needs</h3>
      </div>
      <div className="features-content">
        <div className="feature">
          <div className="feature-wrapper">
            <img src={ellipse} alt="Overlay" className="overlay-image" />
            <img src={pic1} alt="Feature 1" className="feature-image" />
          </div>
          <p className="feature-text">A comprehensive expense tracking  module that allows  users to record and  categorize both  personal and shared  expenses in a single  interface.</p>
        </div>

        <div className="feature">
          <div className="feature-wrapper">
            <img src={ellipse} alt="Overlay" className="overlay-image" />
            <img src={pic2} alt="Feature 2" className="feature-image" />
          </div>
          <p className="feature-text">Shared expense management tools with the ability to split bills, allocate costs, and track contributions from multiple users.</p>
        </div>

        <div className="feature">
          <div className="feature-wrapper">
            <img src={ellipse} alt="Overlay" className="overlay-image" />
            <img src={pic3} alt="Feature 3" className="feature-image" />
          </div>
          <p className="feature-text">An intuitive dashboard that offers insightful visualizations and reporting tools, allowing users to analyze spending patterns and financial habits.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAndFunctionalities;
