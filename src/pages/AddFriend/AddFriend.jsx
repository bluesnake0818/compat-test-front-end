import { useState, useRef, useEffect } from "react"
import './AddFriend.css'
import { BirthData } from '../../components/SignupForm/BirthData';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import PersonIcon from '@mui/icons-material/Person'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import ListItemIcon from '@mui/material/ListItemIcon'

const zodiacData = [
	{'1980' : 'rat'}
]

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



	// if event.target.name 
	// use % of 12 
  const handleChange = evt => {
		if(evt.target.name === 'birthYear'){
			setFormData({...formData, 
				zodiac: 'rat',
				birthYear: evt.target.value
			})
		} else if(evt.target.name === 'name'){
			setFormData({...formData, 
				name: evt.target.value
			})
		}
  }

  // const handleChange = evt => {
	// 	setFormData({...formData, 
	// 		[evt.target.name]: evt.target.value
	// 	})

		// setFormData({...formData, 
		// 	zodiac: 'rat'
		// })

	// }
  





  const handleSubmit = evt => {
		evt.preventDefault()
		const friendFormData = new FormData()
    friendFormData.append('name', formData.name)
		friendFormData.append('birthYear', formData.birthYear)
		friendFormData.append('zodiac', formData.birthYear)
    props.handleAddFriend(friendFormData)		
  }


	return (
		<main>
			<h3>Enter your friend's date of birth 🎂</h3>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Friend's Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="zodiac-input" className="form-label">
						Friend's Zodiac (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="zodiac-input"
						name="zodiac"
            value={formData.zodiac}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="birthYear-input" className="form-label">
						Friend's Birth Year(required)
					</label>
					<select 
						type="text"
						className="form-control"
						id="birthYear-input"
						name="birthYear"
            value={formData.birthYear}
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
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Next
					</button>
				</div>
			</form>
		</main>
	)
}

export default AddFriend
