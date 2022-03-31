import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
    birthYear: '',
    zodiac: '',
  })

  const handleChange = evt => {
    props.updateMessage('')
    if(evt.target.name === 'birthYear'){
			const numBirthYear = parseInt(evt.target.value)
			if(numBirthYear%12 === 0) {
				setFormData({...formData, 
					zodiac: 'monkey',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 1) {
				setFormData({...formData, 
					zodiac: 'rooster',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 2) {
				setFormData({...formData, 
					zodiac: 'dog',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 3) {
				setFormData({...formData, 
					zodiac: 'pig',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 4) {
				setFormData({...formData, 
					zodiac: 'rat',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 5) {
				setFormData({...formData, 
					zodiac: 'ox',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 6) {
				setFormData({...formData, 
					zodiac: 'tiger',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 7) {
				setFormData({...formData, 
					zodiac: 'rabbit',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 8) {
				setFormData({...formData, 
					zodiac: 'dragon',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 9) {
				setFormData({...formData, 
					zodiac: 'snake',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 10) {
				setFormData({...formData, 
					zodiac: 'horse',
					birthYear: evt.target.value
				})
			}
			if(numBirthYear%12 === 11) {
				setFormData({...formData, 
					zodiac: 'goat',
					birthYear: evt.target.value
				})
			}
		} else if(evt.target.name === 'email'){
			setFormData({...formData, 
				email: evt.target.value
			})
		} else if(evt.target.name === 'password'){
			setFormData({...formData, 
				password: evt.target.value
			})
		} else if(evt.target.name === 'passwordConf'){
			setFormData({...formData, 
				passwordConf: evt.target.value
			})
		} else if(evt.target.name === 'name'){
			setFormData({...formData, 
				name: evt.target.value
			})
		} 
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf, birthYear, zodiac } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf && birthYear && zodiac)
  }

  return (
    <main className={styles.container}>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={styles.container}
      >
        <div className={styles.inputContainer}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="confirm" className={styles.label}>
            Confirm Password
          </label>
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="birthYear-input" className={styles.label}>
            My Birth Year(required)
          </label>
          <select 
            type="text"
            className="form-control"
            id="birthYear-input"
            name="birthYear"
            value={birthYear}
            onChange={handleChange}
            required
          >
            <option value="1980" >1980</option>
            <option value="1981">1981</option>
            <option value="1982">1982</option>
            <option value="1983">1983</option>
            <option value="1984">1984</option>
            <option value="1985">1985</option>
            <option value="1986">1986</option>
            <option value="1987">1987</option>
            <option value="1988">1988</option>
            <option value="1989">1989</option>
            <option value="1990">1990</option>
            <option value="1991">1991</option>
            <option value="1992">1992</option>
            <option value="1993">1993</option>
            <option value="1994">1994</option>
            <option value="1995">1995</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="zodiac-input" className="form-label">
            My Zodiac (required)
          </label>
          <input 
            type="text"
            className="form-control"
            id="zodiac-input"
            name="zodiac"
            value={zodiac}
            onChange={handleChange}
            required
          />
        </div>
        <div className='button-area'>
            <button disabled={isFormInvalid()} className={styles.button}>
              Sign Up
            </button>
            <Link to="/">
              <button className={styles.button}>Cancel</button>
            </Link>
          </div>
      </form>
    </main>
  )
}

export default SignupForm
