import styles from "./assets/stylesheets/collection.module.css"
import shoebrand2 from "./assets/images/sneakers2Edit.png"
import women1 from "./assets/images/women.jpeg"
import women2 from "./assets/images/womenShoes.jpeg"
import women3 from "./assets/images/girl.jpeg"
import shoes4 from "./assets/images/men.jpeg"
import sneakers1 from "./assets/images/sneakers1.jpeg"
import sneakers2 from "./assets/images/sneakers2.jpeg"
import sneakers3 from "./assets/images/boy.jpeg"
import childgirl from "./assets/images/childgirl.jpeg"
import childboy from "./assets/images/childboy.jpeg"
import { Navbar } from "./Navbar"

export const Collection = () => {
    return(
        <>
        <Navbar/>
        <div className = {styles.upperSection}>
        <br />
        <br />
        <br />
        <div className = {styles.firstPoster}>
            <div className = {styles.impact}>
                <div className = {styles.opening}>
                  <p>Do it <span>now.</span></p>
                <p>Move with <span>comfort </span></p>
                </div>
                <div className = {styles.speech}>
                <p>ICYIZERE collection aims at fulfilling our client's perspectives by providing a variety of shoes which allows them to move with confidence and share the experience of comfort. We Prefer To Serve!</p>
                </div>
            </div>
            <div className = {styles.shoeIcon}>
            <img src={shoebrand2} alt="Shoes Missing" />
            </div>
        </div>
        <div className = {styles.head}>
          <p>FEATURED ITEMS</p>
        </div>
        <div className = {styles.topFeatures}>
           <div>
           <img src={women1} alt="Women Shoes missing" />
           <div className = {styles.shoeDetails}>
            <h2>High Heels</h2>
            <h3>$19.99</h3>
           </div>
           </div>
           <div>
            <img src={women2} alt="Women Shoes missing" />
             <div className = {styles.shoeDetails}>
            <h2>Romanian Queen</h2>
            <h3>$15.99</h3>
           </div>
           </div>
           <div>
            <img src={women3} alt="Women Shoes missing" />
             <div className = {styles.shoeDetails}>
            <h2>China Town</h2>
            <h3>$20.99</h3>
           </div>
           </div>
        </div>
        </div>
        <h2>PARTY MAKEOVER</h2>
        <div className={styles.partyShoes}>
            <div className = {styles.picture}>
            <img src={shoes4} alt="Missing shoes" />
             <div className ={styles.prices}>
             <p>$10.05</p>
            </div>
            <div className = {styles.buttons}>
                <button>BUY NOW</button>
            </div>
            </div>
            <div className = {styles.picture}>
                <img src={women1} alt="Missing shoes" />
                 <div className ={styles.prices}>
             <p>$10.05</p>
            </div>
            <div className = {styles.buttons}>
                <button>BUY NOW</button>
            </div>
            </div>
            
            <div className = {styles.picture}>
            <img src={shoes4} alt="Missing shoes" />
             <div className ={styles.prices}>
             <p>$10.05</p>
            </div>
            <div className = {styles.buttons}>
                <button>BUY NOW</button>
            </div>
            </div>
            <div className = {styles.picture}>
                <img src={women1} alt="Missing shoes" />
                 <div className ={styles.prices}>
             <p>$10.05</p>
            </div>
            <div className = {styles.buttons}>
                <button>BUY NOW</button>
            </div>
            </div>
            <div className = {styles.picture}>
                <img src={women1} alt="Missing shoes" />
                 <div className ={styles.prices}>
             <p>$10.05</p>
            </div>
            <div className = {styles.buttons}>
                <button>BUY NOW</button>
            </div>
            </div>
        </div>
        <h2>RUNNING SHOES</h2>
       <div className={styles.partyShoes}>
            <div className = {styles.picture}>
            <img src={sneakers1} alt="Missing shoes" />
            <div className ={styles.prices}>
             <p>$10.05</p>
            </div>
            <div className = {styles.buttons}>
                <button>BUY NOW</button>
            </div>
            </div>
            <div className = {styles.picture}>
                <img src={sneakers2} alt="Missing shoes" />
                 <div className ={styles.prices}>
             <p>$10.05</p>
            </div>
            <div className = {styles.buttons}>
                <button>BUY NOW</button>
            </div>
            </div>
            <div className = {styles.picture}>
            <img src={sneakers3} alt="Missing shoes" />
             <div className ={styles.prices}>
             <p>$10.05</p>
            </div>
            <div className = {styles.buttons}>
                <button>BUY NOW</button>
            </div>
            </div>
            <div className = {styles.picture}>
                <img src={childgirl} alt="Missing shoes" />
                 <div className ={styles.prices}>
             <p>$10.05</p>
            </div>
            <div className = {styles.buttons}>
                <button>BUY NOW</button>
            </div>
            </div>
            <div className = {styles.picture}>
                <img src={childboy} alt="Missing shoes" />
                 <div className ={styles.prices}>
             <p>$10.05</p>
            </div>
            <div className = {styles.buttons}>
                <button>BUY NOW</button>
            </div>
            </div>
       </div>
        </>
    )
}