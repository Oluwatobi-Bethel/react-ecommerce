import React, { useState, useEffect } from 'react'
import { PaystackButton } from 'react-paystack'
import {useCart} from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Shipping = () => {
    const [form, setForm] = useState({
        address: '',
        city: '',
        postalCode: '',
        country: ''

    })

    const [errors, setErrors] = useState({})
    const [isFormValid, setIsFormValid] = useState(false)
    const { cartItems, clearCart } = useCart()
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
        // If shipping data exists in local storage, it overrides the initial state defined in useState.
        const saved = localStorage.getItem('shipping')
        if (saved) setForm(JSON.parse(saved))
    }, [])

    useEffect(() => {
        localStorage.setItem('shipping', JSON.stringify(form))
    }, [form])

    const handleChange = (e) => {
        //object destructuring 
        //e.target is the object representing the input that triggered the event, name and values are properties of that object that was why we could set the name and value to those incoming value
        const {name,value}=e.target
        //the setForm functions also ensure that there are no duplicate key : value pairs 
        setForm((prev)=>({...prev,[name]:value}))
        // setForm({ ...form, [e.target.name]: e.target.value })
    }

    const validate = () => {
        const errs = {}
        if (!form.address.trim()) errs.address = 'Address is required'
        if (!form.city.trim()) errs.city = 'City is required'
        if (!form.postalCode.trim()) errs.postalCode = 'Postal code is required'
        if (!form.country.trim()) errs.country = 'Country is required'
        return errs
    }

    const totalAmount = cartItems.reduce((acc, item) => acc + item.qty * item.new_price, 0) * 100

    const config = {
        reference: new Date().getTime().toString(),
        email: 'ashuaib1991@gmai.com',
        amount: totalAmount,
        publicKey: 'pk_test_99d8f5a23465707c659bcd34e4658cd6acddaffe'
    }

    const componentProps = {
        ...config,
        text: 'Pay Now',
        onSuccess: () => {
            clearCart()
            localStorage.setItem('orderComplete', JSON.stringify({ cartItems, Shipping: form }))
            navigate('/success')
        },
        onClose: () => alert('Payment closed')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // calls the validate function set the ruturn value to validationErrors
        //there is defference between calling a function that is assinged to a call back function and calling a function that is assigned to a callback
        const validationErrors = validate()
        setErrors(validationErrors)
        //check if the length of the objeck.key(validationError) array is ===0 if true setFormValid is set to true or if false same thing happens
        setIsFormValid(Object.keys(validationErrors).length === 0)
    }

    return (
        <div className='container py-5'>
            <h2 className='mb-4 text-center'>Shipping Details</h2>
            <form className='row justify-content-center' noValidate onSubmit={handleSubmit}>
                <div className='col-md-8 col-lg-6'>
                    <div className='mb-3'>
                        <label className='form-label'>Address</label>
                        <input
                            type='text'
                            name='address'
                            value={form.address}
                            className={`form-control ${errors.address && 'is-invalid'}`}
                            onChange={handleChange}
                        />
                        {errors.address && <div className='invalid-feedback'>{errors.address}</div>}
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>City</label>
                        <input
                            type='text'
                            name='city'
                            value={form.city}
                            className={`form-control ${errors.city && 'is-invalid'}`}
                            onChange={handleChange}
                        />

                        {errors.city && <div className='invalid-feedback'>{errors.city}</div>}
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Postal Code</label>
                        <input
                            type='text'
                            name='postalCode'
                            value={form.postalCode}
                            // the is-invalid class added to the list of classNames is a boostrap class that make the input part of the form red when there is error
                            className={`form-control ${errors.postalCode && 'is-invalid'}`}
                            onChange={handleChange}
                        />
                        {errors.postalCode && <div className='invalid-feedback'>{errors.postalCode}</div>}
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Country</label>
                        <input
                            type='text'
                            name='country'
                            value={form.country}
                            className={`form-control ${errors.country && 'is-invalid'}`}
                            onChange={handleChange}
                        />

                        {errors.country && <div className='invalid-feedback'>{errors.country}</div>}
                    </div>

                    {isFormValid ? (
                        <PaystackButton className='btn btn-success w-100' {...componentProps} />
                    ) : (
                        <button type='submit' className='btn btn-primary w-100'>Proceed to pay</button>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Shipping