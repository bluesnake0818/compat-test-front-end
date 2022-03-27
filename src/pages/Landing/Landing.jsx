import './Landing.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <main>
      <h3>hangfive compatibility test</h3>
      <h5>What's my relationship style and how compatible am I with my friends?</h5>
      <img src="/12_Earthly_Branches.png" alt="12 Zodiacs" />
      <Link to='/zodiac'><button className='btn'>Start</button></Link>
    </main>
  )
}

export default Landing
