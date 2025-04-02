import './Screens.css'; 
import createGroup from '/src/assets/expensify-case-study/create group.png';
import addTransaction from '/src/assets/expensify-case-study/add transaction.png';
import addAccount from '/src/assets/expensify-case-study/add account.png';
import addFriends from '/src/assets/expensify-case-study/add friends.png';
import createNewContact from '/src/assets/expensify-case-study/create new contact.png';
import onboarding from '/src/assets/expensify-case-study/onboarding.png';
import transactionHistory from '/src/assets/expensify-case-study/transaction history.png';
import sharedExpenseFriends from '/src/assets/expensify-case-study/shared expense-friends.png';
import sharedExpense from '/src/assets/expensify-case-study/shared expense.png';
import homepage3 from '/src/assets/expensify-case-study/homepage-re.png';

const Screens = () => {
  return (
    <section className="screens">
        <div className="screens-content">
            <div className="screens-heading">Screens</div>
            <div className="screens-row">
                <div className="screens-column">
                    <div className="screen-wrapper">
                        <img src={onboarding} alt="onboarding" />
                        <p className="caption">Onboarding</p>
                    </div>
                    <div className="screen-wrapper">
                        <img src={transactionHistory} alt="transactionHistory" />
                        <p className="caption">Transaction History</p>
                    </div>
                    <div className="screen-wrapper">
                        <img src={sharedExpenseFriends} alt="sharedExpenseFriends" />
                        <p className="caption">Shared Expenses - Friends</p>
                    </div>    
                </div>
                <div className="screens-column">
                    <div className="screen-wrapper">
                        <img src={addAccount} alt="addAccount" />
                        <p className="caption">Add Account</p>
                    </div>
                    <div className="screen-wrapper">
                        <img src={addTransaction} alt="addTransaction" />
                        <p className="caption">Add Transaction</p>
                    </div>
                    <div className="screen-wrapper">
                        <img src={addFriends} alt="addFriends" />
                        <p className="caption">Add Friends</p>
                    </div>
                    <div className="screen-wrapper">
                        <img src={createGroup} alt="createGroup" />
                        {/* <p className="caption">Create Group</p> */}
                    </div>
                </div>
                <div className="screens-column">
                    <div className="screen-wrapper">
                        <img src={homepage3} alt="homepage"/>
                        <p className="caption">Homepage</p>
                    </div>
                    <div className="screen-wrapper">
                        <img src={sharedExpense} alt="transaction" />
                        <p className="caption">Add Transaction - Shared Expense</p>
                    </div>
                    <div className="screen-wrapper">
                        <img src={createNewContact} alt="createNewContact" />
                        <p className="caption">Create New Contact</p>
                    </div>
                </div>
            </div> 
        </div>
    </section>
  );
};

export default Screens;

