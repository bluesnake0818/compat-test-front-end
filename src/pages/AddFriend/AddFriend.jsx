import { useState, useRef, useEffect } from "react"
import './AddFriend.css'
import { BirthData } from '../../components/SignupForm/BirthData';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select';
// import MenuItem  from '@material-ui/core/MenuItem';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import PersonIcon from '@mui/icons-material/Person'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import ListItemIcon from '@mui/material/ListItemIcon'


function AddFriend(props) {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    birthYear: '',
		zodiac: '',
  })

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
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
		} else if(evt.target.name === 'name'){
			setFormData({...formData, 
				name: evt.target.value
			})
		}
  }


  const handleSubmit = evt => {
		evt.preventDefault()
		const friendFormData = new FormData()
    friendFormData.append('name', formData.name)
		friendFormData.append('birthYear', formData.birthYear)
		friendFormData.append('zodiac', formData.zodiac)
    props.handleAddFriend(friendFormData)		
  }


	return (
		<main>
			<h3>Enter your friend's date of birth 🎂</h3>
			<Box
			display="flex" 
			justifyContent="center" 
			alignItems="center"
			sx={{ width: "50%", mt: '2rem' }}
			>
				<Paper elevation={4} sx={{ width: "100%", p: "1rem" }}>
					<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
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
							type="text"
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
							type="submit"
							variant="contained"
							fullWidth
							disabled={!validForm}
						>
							Next
						</Button>
					</form>
				</Paper>
			</Box>
		</main>
	)
}

export default AddFriend


{/* <Select
autoComplete="off"
margin="normal"
fullWidth
required
type="text"
name="birthYear"
label="Birth Year"
value={formData.birthYear}
onChange={handleChange}
>


	<option value={"1980"}>1980</option>
	<option value={"1981"}>1981</option>
	<option value={"1982"}>1982</option>
	<option value={"1983"}>1983</option>
	<option value={"1984"}>1984</option>
	<option value={"1985"}>1985</option>
	<option value={"1986"}>1986</option>
	<option value={"1987"}>1987</option>
	<option value={"1988"}>1988</option>
	<option value={"1989"}>1989</option>
	<option value={"1990"}>1990</option>
	<option value={"1991"}>1991</option>
	<option value={"1992"}>1992</option>
	<option value={"1993"}>1993</option>
	<option value={"1994"}>1994</option>
	<option value={"1995"}>1995</option>
	<option value={"1996"}>1996</option>
	<option value={"1997"}>1997</option>
	<option value={"1998"}>1998</option>
	<option value={"1999"}>1999</option>
	<option value={"2000"}>2000</option>
	<option value={"2001"}>2001</option>
	<option value={"2002"}>2002</option>
	<option value={"2003"}>2003</option>
	<option value={"2004"}>2004</option>
	<option value={"2005"}>2005</option>
	<option value={"2006"}>2006</option>
	<option value={"2007"}>2007</option>
	<option value={"2008"}>2008</option>
	<option value={"2009"}>2009</option>
	<option value={"2010"}>2010</option>
	<option value={"2011"}>2011</option>
	<option value={"2012"}>2012</option>
	<option value={"2013"}>2013</option>
	<option value={"2014"}>2014</option>
	<option value={"2015"}>2015</option>
	<option value={"2016"}>2016</option>
	<option value={"2017"}>2017</option>
	<option value={"2018"}>2018</option>
	<option value={"2019"}>2019</option>
	<option value={"2020"}>2020</option>

</Select> */}