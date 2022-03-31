import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'


const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/compat')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <main className={styles.container}>
      <Box
				display="flex" 
				justifyContent="center" 
				alignItems="center"
				sx={{ width: "50%", mt: '5rem' }}
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
							name="email"
							label="Email"
							value={formData.email}
							onChange={handleChange}
						/>
            <TextField
              className={styles.inputField}
							autoComplete="off"
							margin="normal"
							fullWidth
							required
							type="password"
							name="pw"
							label="Password"
							value={formData.pw}
							onChange={handleChange}
						/>
            <Button
							className={styles.button}
              type="submit"
							variant="contained"
							fullWidth
						>
							Log In
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

export default LoginForm
