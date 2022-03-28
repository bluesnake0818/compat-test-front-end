import { useState, useRef, useEffect } from "react"
import './AddFriend.css'
import { BirthData } from '../../components/SignupForm/BirthData';

function AddFriend(props) {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    birthYear: '',
  })

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
		const friendFormData = new FormData()
    friendFormData.append('name', formData.name)
		friendFormData.append('birthYear', formData.birthYear)
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
						<option value="1980">1980</option>
						<option value="1981">1981</option>
						<option value="1982">1982</option>
						<option value="1983">1983</option>
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

{/* <label for="mpaa-rating-select">MPAA Rating</label>
<select name="mpaaRating" id="mpaa-rating-select">
	<option value="G">G</option>
	<option value="PG">PG</option>
	<option value="PG-13">PG-13</option>
	<option value="R">R</option>
</select> */}