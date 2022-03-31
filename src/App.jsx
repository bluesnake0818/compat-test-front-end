import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import styles from './App.module.css'
import * as friendService from './services/friends'
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import Compat from './pages/Compat/Compat'
import Profile from './pages/Profile/Profile'
import ShowCompat from './pages/ShowCompat/ShowCompat'
import AddFriend from './pages/AddFriend/AddFriend'
import EditFriend from './pages/EditFriend/EditFriend'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Zodiac from './pages/Zodiac/Zodiac'
import SignupOrLogin from './pages/SignupOrLogin/SignupOrLogin'
import ChangePassword from './pages/ChangePassword/ChangePassword'


const App = () => {
  const [friends, setFriends] = useState([])
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState({
    name: ''
    }
  )

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => {
      setProfile(profiles.find(profile => profile._id === user.profile))
  })
  }, [])

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

  const handleDeleteFriend = id => {
    friendService.deleteOne(id)
    .then(deletedFriend => setFriends(friends.filter(friend => friend._id !== deletedFriend._id)))
  }

  const handleUpdateFriend =  updatedFriendData => {
    friendService.update(updatedFriendData)
    .then(updatedFriend => {
      const newFriendsArray = friends.map(friend => friend._id === updatedFriend._id ? updatedFriend : friend)
      setFriends(newFriendsArray)
      navigate('/compat')
    })
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
    <main className={styles.container}>
      <NavBar user={user}  />
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
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        <Route
          path="/compat"
          element={
            <Compat 
              handleDeleteFriend={handleDeleteFriend}
              friends={friends}
              user={user}
            />
          }
        />
        <Route
          path="/showCompat"
          element={
            <ShowCompat 
              // handleDeleteFriend={handleDeleteFriend}
              friends={friends}
              user={user}
            />
          }
        />
        <Route
          path="/AddFriend"
          element={<AddFriend handleAddFriend={handleAddFriend} />}
        />
        <Route 
          path='/edit'
          element={
            <EditFriend
              handleUpdateFriend={handleUpdateFriend}
            />
          }
        />
        <Route
          path="/profile"
          element={user ?
            <Profile 
              friends={friends}
              user={user}
              profile={profile}
              handleLogout={handleLogout}
            />
            : 
            <Navigate to="/login" />
          }
        />
      </Routes>
    </main>
  )
}

export default App
