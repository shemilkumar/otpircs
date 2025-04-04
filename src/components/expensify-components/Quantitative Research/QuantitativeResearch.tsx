import './QuantitativeResearch.css';

const QuantitativeResearch = () => {
  return (
    <section className="quantitative-research">
      <div className="research-content">
        <h2 className="research-heading">Quantitative Research</h2>
        <p className="research-description">
          We conducted an online survey with about 10 users who fall in our target demographic.
        </p>
        <h3 className="observations">Observations</h3>

        <div className='section-container'>
          <div className="fifty-section">
            <h3 className="fifty-heading">50%</h3>
            <p className="fifty-content">
              50% of the users expressed a
              strong need for an efficient
              method to track their expenses
              and income comprehensively.
            </p>
          </div>

          <div className="seventy-section">
            <h3 className="seventy-heading">70%</h3>
            <p className="seventy-content">
              70% of users reported
              facing challenges in
              tracking and recording
              shared expenses
            </p>
          </div>

          <div className="sixty-section">
            <h3 className="sixty-heading">60%</h3>
            <p className="sixty-content">
              60% of users indicated a
              preference for features that
              facilitate collaborative financial
              management
            </p>
          </div>

          <div className="ninety-section">
            <h3 className="ninety-heading">90%</h3>
            <p className="ninety-content">
              90% of users expressed interest in
              features that provide detailed
              insights into their spending patterns
              and financial habits.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default QuantitativeResearch;


