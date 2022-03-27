import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import './App.css'
import * as friendService from './services/friends'
import * as authService from './services/authService'
import Compat from './pages/Compat/Compat'
import AddFriend from './pages/AddFriend/AddFriend'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import Zodiac from './pages/Zodiac/Zodiac'
import SignupOrLogin from './pages/SignupOrLogin/SignupOrLogin'
import ChangePassword from './pages/ChangePassword/ChangePassword'

const App = () => {
  const [friends, setFriends] = useState([])
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())

  useEffect(()=> {
    if(user) {
      friendService.getAll()
      .then(allFriends => setFriends(allFriends))
    }
  }, [user])

  const handleAddFriend = async newFriendData => {
    const newFriend = await friendService.create(newFriendData)
    setFriends([...friends, newFriend])
    navigate('/compat')
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <div className='mainBody'>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route 
          path="/" 
          element={<Landing />} 
        />
        <Route
          path="/zodiac"
          element={<Zodiac />}
        />
        <Route
          path="/signupOrLogin"
          element={<SignupOrLogin />}
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
          <Route
            path="/compat"
            element={
              <Compat 
                friends={friends}
                user={user}
              />
            }
          />
        <Route
          path="/AddFriend"
          element={<AddFriend handleAddFriend={handleAddFriend} />}
        />
      </Routes>
    </div>
  )
}

export default App
