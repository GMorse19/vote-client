import React from 'react'
import { withRouter } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const AuthForm = ({ email, password, passwordConfirmation, onSignIn, onSignUp, handleChange }) => (
  <div className="row body">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <h3>{onSignUp ? 'Sign Up' : 'Sign In'}</h3>
      <Form onSubmit={passwordConfirmation ? onSignUp : onSignIn}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        {onSignUp && <Form.Group controlId="passwordConfirmation">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </Form.Group>}
        <Button
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  </div>
)

export default withRouter(AuthForm)
