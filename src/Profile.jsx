import profilepicture from './assets/profilePic.png'
import styles from '/profile.module.css'

export const Profile = () => {
    return(
        <>
        <div className = {styles.headerName}>
            <h2>Profile</h2>
        </div>

        <div className = {styles.cardContainer}>

        <div className = {styles.profImage}>
         <img src={profilepicture} alt="not found" />
        </div>
        <div className = {styles.comment}>
            <p>
               " I've been using this app since the past 2 months. I've got enough time to get friendly with this service. I am really happy with this."
            </p>
            
           {/* <div className = {styles.personalInfo}>
           <ol>
            <li> <b>Name:</b> Sarah Alisha</li>
            <li><b>Job: </b> UI/UX Designer</li>
            <li><b>Experience: </b> 2 years</li>
           </ol>
           </div> */}

            <div className = {styles.rating}>
             <h3>Rating: ⭐⭐⭐⭐⭐</h3>
            </div>
             <div className = {styles.follow}>
            <button>Follow</button>
            <button>Like</button>
        </div>
           
        </div>

        </div>
        </>
    )
}