import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import PersonIcon from '@mui/icons-material/Person'
import ExtensionIcon from '@mui/icons-material/Extension';

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
      <Link to="/" className={styles.title}>
        <p >hangfive</p>
      </Link>
      <div className={styles.profile}>
        {user ?
          <nav>
            <ul className={styles.userNavLinks}>
              {/* <li className={styles.listItem}><Link to="/profile">{user.name}'s Profile</Link></li> */}
              <li className={styles.listItem}><Link to="/profile"><PersonIcon /> {user.name}'s Profile</Link></li>
              <li className={styles.listItem}><Link to="/compat"><ExtensionIcon /> Compatibility</Link></li>
            </ul>
          </nav>
        :
          <nav>
            <ul className={styles.guestNavLinks}>
              <li className={styles.listItem}><Link to="/login">Log In</Link></li>
              <li className={styles.listItem}><Link to="/signup">Sign Up</Link></li>
            </ul>
          </nav>
        } 
      </div>
    </main>
  )
}

export default NavBar
