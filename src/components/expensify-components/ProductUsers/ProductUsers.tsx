import './ProductUsers.css'; 
import leftImage from '/src/assets/expensify-case-study/user-left.png'
import bottomImage from '/src/assets/expensify-case-study/user-bottom.png'
import topImage from '/src/assets/expensify-case-study/user-top.png'

const ProductUsers = () => {
    return (
      <section className="product-users">
        <div className="product-users-content"> 

            <h2 className="product-users-heading">Product Users</h2>
            <p className="product-users-text">
              Our target audience is the working <br/>population of <span className="highlighted-text">age group 18-45</span>
            </p>
        </div>
        <img src={leftImage} alt="Left Image" className="product-image-left" />
        <img src={topImage} alt="Top Right Image" className="product-image-top-right" />
        <img src={bottomImage} alt="Bottom Right Image" className="product-image-bottom-right" />
      </section>
    );
    
  };
  

export default ProductUsers;
