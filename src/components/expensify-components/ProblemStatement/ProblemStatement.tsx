import './ProblemStatement.css'
import Box from '/src/assets/expensify-case-study/Box.png'

const ProblemStatement = () => {
    return (
        <section className="problem-statement">
            <div className="problem-frame">
                <div className="problem-content">
                    <h2>Problem Statement</h2>
                    <p>
                        When managing my finances, I encounter difficulties tracking and recording<br />
                        both personal and shared expenses, as existing applications lack <br />
                        comprehensive features for seamless and unified financial management.
                    </p>
                </div>
                <img src={Box} alt="box" className="box-frame" />
            </div>
        </section>

    );
};

export default ProblemStatement;
