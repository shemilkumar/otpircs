import './UserNeeds.css'; 
// import vector from '/src/assets/expensify-case-study/Vector 203.png';
import useIntersectionObserver from '../useIntersectionObserver/useIntersectionObserver'

const UserNeeds = () => {

  const listItemRefs = useIntersectionObserver((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  }, { threshold: 0.1 });

  return (
    <section className="user-needs">
      <h2 className="user-needs-heading">User Needs</h2>
      <div className="user-needs-content">

        <ul>
          <li ref={(el) => listItemRefs.current.push(el)}>Users need an application that allows them to comprehensively track and <br /> record both personal and shared expenses.</li>
          <li ref={(el) => listItemRefs.current.push(el)}>Users express a need for features that facilitate seamless collaboration in <br /> financial management.</li>
          <li ref={(el) => listItemRefs.current.push(el)}>Users seek an intuitive and user-friendly interface that simplifies the process <br /> of inputting, monitoring, and analyzing financial data.</li>

        </ul>
    
      </div>
    </section>
  );
};

export default UserNeeds;

  