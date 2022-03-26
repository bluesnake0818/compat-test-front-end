import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <div className='navBarMain'>
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
      <p className='title'>
        hangfive
      </p>
      <div className='profile'>
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
    </div>
  )
}

export default NavBar
