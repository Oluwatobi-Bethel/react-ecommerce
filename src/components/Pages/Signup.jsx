import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Signup = () => {
  // Form state for all input fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  // State to manage validation errors
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Form validation logic
  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.email.includes('@')) errs.email = 'Valid email is required'
    if (formData.password.length < 6) errs.password = 'Password must be at least 6 characters'
    if (formData.password !== formData.confirmPassword) errs.confirmPassword = 'Passwords do not match'
    return errs
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      // Save user info to localStorage
      localStorage.setItem('user', JSON.stringify({
        name: formData.name,
        email: formData.email
      }))

      // Show success message and redirect
      toast.success('Signup successful! Redirecting...', {
        position: 'top-center',
        autoClose: 2000,
        onClose: () => navigate('/shipping')
      })
    }
  }

  return (
    <div className='container py-5'>
      <ToastContainer />
      <h2 className='mb-4 text-center'>Create an Account</h2>
      <form className='row justify-content-center' onSubmit={handleSubmit}>
        <div className='col-md-8 col-lg-6'>
          <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input
              type='text'
              name='name'
              className={`form-control ${errors.name && 'is-invalid'}`}
              onChange={handleChange}
            />
            {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
          </div>

          <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input
              type='email'
              name='email'
              className={`form-control ${errors.email && 'is-invalid'}`}
              onChange={handleChange}
            />
            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
          </div>

          <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input
              type='password'
              name='password'
              className={`form-control ${errors.password && 'is-invalid'}`}
              onChange={handleChange}
            />
            {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
          </div>

          <div className='mb-3'>
            <label className='form-label'>Confirm Password</label>
            <input
              type='password'
              name='confirmPassword'
              className={`form-control ${errors.confirmPassword && 'is-invalid'}`}
              onChange={handleChange}
            />
            {errors.confirmPassword && <div className='invalid-feedback'>{errors.confirmPassword}</div>}
          </div>

          <button className='btn btn-primary w-100' type='submit'>Signup</button>
        </div>
      </form>
    </div>
  )
}




  

export default Signup