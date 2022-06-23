import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const addressRef = useRef()
    const nameRef = useRef()
    const phoneRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError("")
            setloading(true)
            await signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value, addressRef.current.value, phoneRef.current.value )   
            navigate("/login");
        } catch {
            setError('Failed to create an account')
        }

        setloading(false)
    }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert vairant ="danger">{error}</Alert> }
                <Form onSubmit={ handleSubmit }>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required />
                    </Form.Group>
                    <Form.Group id="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" ref={addressRef} required />
                    </Form.Group>
                    <Form.Group id="phone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" ref={phoneRef} maxLength = "11" required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt -2">
            Already have an acount? <Link to="/login">Log In</Link>
        </div>
    </>
  )
}
