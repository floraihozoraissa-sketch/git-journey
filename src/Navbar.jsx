import { Link } from "react-router-dom"
import styles from './assets/stylesheets/collection.module.css'
// import Logo from './assets/images/Frame2Logo.png'
import account from './assets/images/blackProfile2.png'
import shopCart from './assets/images/shopCart.png'

export const Navbar = () => {
    return(
        <body className={styles.bodyStyle}>
             <div className = {styles.navHeader}>
                {/* <div className = {styles.logo}>
                <img src={Logo} alt="missing Logo" />
            </div> */}
            <Link to ="/" className = {styles.navContent}>Home</Link>
            <Link to = "/About" className = {styles.navContent}>About</Link>
            <Link to = "/ContactUs" className = {styles.navContent}>Contact Us</Link>
            <Link to = "/collection" className = {styles.navContent}>Our Collection</Link>
            <div className = {styles.icons}>
            <img src={account} alt="account missing"/>
            <img src={shopCart} alt="Shopping Cart" />
            </div>
        </div>
        </body>
    )

}