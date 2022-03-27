import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
import './EditFriend.css'

function EditFriend(props) {
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.friend)
	const [validForm, setValidForm] = useState(true)
  const formElement = useRef()

	const handleChange = evt => {
		setFormData({...formData, [evt.target.name]: evt.target.value })
	}

	useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

	const handleSubmit = evt => {
		evt.preventDefault()
		const friendFormData = new FormData()
		friendFormData.append('name', formData.name)
		friendFormData.append('dob', formData.dob)
		friendFormData.append('_id', formData._id) 
		props.handleUpdateFriend(friendFormData)
	}

	return (
		<>
			<h1>Edit Friend</h1>
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
				<div className="d-grid mb-3">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Save Friend
					</button>
				</div>
        <div className="d-grid">
					<Link
						to="/compat"
						className="btn btn-danger btn-fluid"
					>
						Cancel
					</Link>
				</div>
			</form>
		</>
	)
}

export default EditFriend