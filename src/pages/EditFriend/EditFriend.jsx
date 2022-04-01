import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
import styles from './EditFriend.module.css'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

function EditFriend(props) {
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.friend)
	const [validForm, setValidForm] = useState(true)
  const formElement = useRef()

	useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleChange = evt => {
		if(evt.target.name === 'birthYear'){
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
		} else if(evt.target.name === 'name'){
			setFormData({...formData, 
				name: evt.target.value
			})
		}
  }


	const handleSubmit = evt => {
		evt.preventDefault()
		const friendFormData = new FormData()
		friendFormData.append('_id', formData._id) 
		friendFormData.append('name', formData.name)
		friendFormData.append('birthYear', formData.birthYear)
		friendFormData.append('zodiac', formData.zodiac)
		props.handleUpdateFriend(friendFormData)
	}

	return (
		<main className={styles.container}>
			<h2 className={styles.title}>Edit your friend's info.</h2>
			<Box
				display="flex" 
				justifyContent="center" 
				alignItems="center"
				sx={{ width: "50%", mt: '5rem' }}
			>
				<Paper elevation={4} sx={{ width: "100%", p: "1rem" }}>
					<form className={styles.form} autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
						<TextField
							autoComplete="off"
							margin="normal"
							fullWidth
							required
							type="text"
							name="name"
							label="Name"
							value={formData.name}
							onChange={handleChange}
						/>
						<TextField
							autoComplete="off"
							margin="normal"
							fullWidth
							required
							type="number"
							name="birthYear"
							label="Birth Year"
							value={formData.birthYear}
							onChange={handleChange}
						/>
						<TextField
							autoComplete="off"
							margin="normal"
							fullWidth
							required
							type="text"
							name="zodiac"
							label="Zodiac"
							value={formData.zodiac}
							onChange={handleChange}
						/>
						<Button
							className={styles.editButton}
							type="submit"
							variant="contained"
							fullWidth
							disabled={!validForm}
						>
							Save Friend
						</Button>
						<Link
							to="/compat"
							className={styles.link}
						>
							<Button
								className={styles.cancelButton}
								variant="contained"
								fullWidth
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

export default EditFriend