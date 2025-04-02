import './Sketches.css'; 
import welcomeImage from '/src/assets/expensify-case-study/welcome.png'
import transactionsImage from '/src/assets/expensify-case-study/transactions.png'
import friends from '/src/assets/expensify-case-study/friends.png'
import expense from '/src/assets/expensify-case-study/expense.png'



const Sketches = () => {
    return (
      <section className="sketches">
        <div className="sketches-content">
              <div className="sketches-heading">Sketches</div>
              <div className="sketches-row">
                <div className="sketches-column">
                    <img src={welcomeImage} alt="welcome" style={{ width: '100%' }} />
                    <img src={transactionsImage} alt="transactionsImage" style={{ width: '100%' }} />
                </div>
                <div className="sketches-column">
                    <img src={expense} alt="expense" style={{ width: '100%' }} />
                    <img src={friends} alt="friends" style={{ width: '100%' }} />
                </div>
              </div>
        </div>
      </section>
    );
  };
  

export default Sketches;
