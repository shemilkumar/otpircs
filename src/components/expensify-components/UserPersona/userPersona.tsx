import './userPersona.css'
import profilepic from '/src/assets/expensify-case-study/Profile Picture.png'
import work from '/src/assets/expensify-case-study/work.png'
import qualif from '/src/assets/expensify-case-study/qualif.png'
import location from '/src/assets/expensify-case-study/location.png'
import age from '/src/assets/expensify-case-study/age.png'
import quotebox from '/src/assets/expensify-case-study/Rectangle 199.png'
import quotes from '/src/assets/expensify-case-study/quote.png'


const UserPersona = () => {
    return (
        <section className="user-persona-section">
            <div className="column-left">
                <div className = "user-info">
                    <h1 className = "user-heading">User Persona</h1>
                    <div className="user-profile">
                        <img src ={profilepic} alt="propic" className="user-profilepic" />
                        <p className ="user-name">Ashish Mathew</p>
                        <p className ="user-designation">Software Developer</p>
                    </div>
                    <div className="user-about">
                        <p className ="about-heading">About</p>
                        <div className = "about-container">
                            <div className="about-row">
                                <div className="about-box">
                                    <img src={age} alt="age" className="box-image" />
                                    <p className="about-box-text">24</p>
                                </div>
                                <div className="about-box">
                                    <img src={location} alt="Image 2" className="box-image" />
                                    <p className="about-box-text">Banglore</p>
                                </div>
                            </div>
                            <div className="about-row">
                                <div className="about-box">
                                    <img src={qualif} alt="Image 3" className="box-image" />
                                    <p className="about-box-text">B.Tech</p>     
                                </div>
                                <div className="about-box">
                                    <img src={work} alt="Image 4" className="box-image" />
                                    <p className="about-box-text">Employee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="column-right">
                <div className="user-details">
                    <div className="info-box">
                        <h2 className="info-heading">Description</h2>
                        <p className="info-paragraph">Passionate and tech-savvy professional who has just<br/>
                        got into his first job.</p>
                    </div>
                    <div className="info-box">
                        <h2 className="info-heading">A day in their life</h2>
                        <ul className="info-list">
                            <li>Resides in HSR Layout</li>
                            <li>Orders lunch at the office with his friends</li>
                            <li>Reviews his expenses for the day and sends <br/>
                            payment requests to his friends for the common <br/>
                            expenses</li>
                        </ul>
                    </div>
                    <div className="info-box">
                        <h2 className="info-heading">Pain points</h2>
                        <p className="info-paragraph">Struggles to find sufficient time for detailed financial<br/>
                        management.</p>
                    </div>
                    <div className="quote-box">
                        <img src={quotebox} alt="QuoteBox" className="quote-image" />
                        <img src={quotes} alt="Quote" className="quotes" />
                        <p className="quote-text">"Settling and recording all the expenses for the day is a tiring<br/>
                         process”</p>
                    </div>
                 </div>   
            </div>  
        </section>

    );
  };
  

export default UserPersona;