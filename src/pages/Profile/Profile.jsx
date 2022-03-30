import { ProfileData } from './ProfileData';


const Profile = (props) => {
  return (
      <div className='main'>
        <h3>{props.user.name}'s Profile</h3>
        {/* <p>Your zodiac is {props.friends[0].owner.zodiac}</p> */}

      </div>
  )
}

export default Profile;