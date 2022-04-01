import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
    birthYear: null,
    zodiac: '',
  })

  const handleChange = evt => {
    props.updateMessage('')
    if(evt.target.name === 'birthYear'){
			// const numBirthYear = parseInt(evt.target.value)
			const numBirthYear = evt.target.value
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
      navigate('/PremiumContent')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf, birthYear, zodiac } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf && (birthYear <2021) && (birthYear>1899) && zodiac)
  }

  return (
    <main className={styles.container}>
      <Box
				display="flex" 
				justifyContent="center" 
				alignItems="center"
				sx={{ width: "200%", }}
			>
        <Paper elevation={4} sx={{ width: "100%", p: "1rem" }}>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <TextField
              className={styles.inputField}
							autoComplete="off"
							margin="normal"
							fullWidth
							required
							type="text"
							name="name"
							label="Name"
							value={name}
							onChange={handleChange}
						/>
            <TextField
              className={styles.inputField}
							autoComplete="off"
							margin="normal"
							fullWidth
							required
							type="text"
							name="email"
							label="Email"
							value={email}
							onChange={handleChange}
						/>
            <TextField
              className={styles.inputField}
							autoComplete="off"
							margin="normal"
							fullWidth
							required
							type="password"
							name="password"
							label="Password"
							value={password}
							onChange={handleChange}
						/>
            <TextField
              className={styles.inputField}
							autoComplete="off"
							margin="normal"
							fullWidth
							required
							type="password"
							name="passwordConf"
							label="Password Confirmation"
							value={passwordConf}
							onChange={handleChange}
						/>
            <TextField
              className={styles.inputField}
							autoComplete="off"
							margin="normal"
							fullWidth
							placeholder="between 1900 & 2020"
							required
							type="number"
							name="birthYear"
							label="Birth Year"
							value={birthYear}
							onChange={handleChange}
						/>
            <TextField
              className={styles.inputField}
							autoComplete="off"
							margin="normal"
							fullWidth
							placeholder="automatically updated"
							required
							type="text"
							name="zodiac"
							label="Zodiac Sign"
							value={zodiac}
							onChange={handleChange}
						/>
            <Button 
							type="submit"
							disabled={isFormInvalid()} 
							variant="contained"
							fullWidth
							className={styles.button}>
                  Sign Up
            </Button>
            <Link to="/" className={styles.link}>
              <Button 
								variant="contained"
								fullWidth
								className={styles.button}
							>
								Cancel
							</Button>
            </Link>
          </form>
        </Paper>
      </Box>
    </main>
  )
}

export default SignupForm
