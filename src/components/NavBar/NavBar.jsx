import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <main className={styles.container}>
      {/* <div className='navLinks'>
        {user ?
          <nav>
            <ul>
              <li>Welcome, {user.name}</li>
              <li><Link to="/changePassword">Change Password</Link></li>
            </ul>
          </nav>
        :
          <nav>

          </nav>
        }
      </div> */}
      <p className={styles.title}>
        hangfive
      </p>
      <div className={styles.profile}>
        {user ?
          <nav>
            <ul>
              <li><Link to="/profiles">Profiles</Link></li>
              <li><Link to="" onClick={handleLogout}>Log Out</Link></li>
            </ul>
          </nav>
        :
          <nav>
            <ul>
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </nav>
        } 
      </div>
    </main>
  )
}

export default NavBar
