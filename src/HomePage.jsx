import styles from "./assets/stylesheets/hero.module.css"; 
import shoeBrand from "./assets/images/airForceEdit.png";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <body className = {styles.bodyStyle}>
       <div className={styles.heroContainer}>
      <div className={styles.textGroup}>
        <h1>Walk With Confidence</h1>
        <h1>Move With Elegance</h1>
        <h1>Fashion Like A Pro</h1>
        
        
        <div className={styles.ctaGroup}>
          <Link to = "/collection" className={styles.primaryBtn}>Explore Collection</Link>
          <Link to = "/SignUp" className={styles.secondaryBtn}>Sign Up</Link>
        </div>
      </div>

      <div className={styles.airBrand}>
        <img src={shoeBrand} alt="Air Force shoe" />
      </div>
    </div>
    </body>
  );
};
