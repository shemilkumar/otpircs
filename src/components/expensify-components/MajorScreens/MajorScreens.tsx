import './MajorScreens.css'
import image1 from '/src/assets/expensify-case-study/Group 176.png'
import image2 from '/src/assets/expensify-case-study/Group 177.png'
import image3 from '/src/assets/expensify-case-study/Group 179.png'


const MajorScreens = () => {
    return (

<section className="major-screens-section">
    <h2 className="major-screens-heading">Major Screens</h2>
    <div className="major-screens-container">
        <div className="major-screen-item">
            <img src={image1} alt="Screen 1" />
        </div>
        <div className="major-screen-item">
            <img src={image2}alt="Screen 2" />
        </div>
        <div className="major-screen-item">
            <img src={image3} alt="Screen 3" />
        </div>
    </div>
</section>
    );
  };
  
  export default MajorScreens;
  

