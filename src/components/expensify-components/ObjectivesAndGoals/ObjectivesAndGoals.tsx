import useIntersectionObserver from '../useIntersectionObserver/useIntersectionObserver';
import './ObjectivesAndGoals.css';

const ObjectivesAndGoals = () => {

  const objectiveItemRefs = useIntersectionObserver((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  }, { threshold: 0.1 });

  return (
    <section className="objectives-goals">
      <h2 className="goals-heading">Objectives & Goals</h2>
      <div className="goals-content">
        <div className="left-goal">
          <ul>
            <li ref={(el) => objectiveItemRefs.current.push(el)}>User-friendly application that <br />
              enables individuals to <br />
              meticulously track and record <br />
              both personal and shared <br />
              expenses.</li>
          </ul>
        </div>
        <div className="right-goal">
          <ul>
            <li ref={(el) => objectiveItemRefs.current.push(el)}>An intuitive and accessible interface <br />
              that ensures users to input, monitor, <br />
              and analyze their financial data.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ObjectivesAndGoals;
