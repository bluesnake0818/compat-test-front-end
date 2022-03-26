import { useState, useRef, useEffect } from "react"
import './AddFriend.css'

function AddFriend(props) {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    dob: null,
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
					<label htmlFor="dob-input" className="form-label">
						Friend's Date of Birth (required)
					</label>
					<input 
						type="date"
						className="form-control"
						id="dob-input"
						name="dob"
            value={formData.dob}
            onChange={handleChange}
						required
					/>
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