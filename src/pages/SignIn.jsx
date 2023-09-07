import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Home from './Home';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from '../Component/Footer';
import About from '../Component/About';
import Hero from '../Component/Hero';
import Nave from '../Component/Nave'
import Newsletter from '../Component/Newsletter';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function SignIn() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nave />
      < Hero />
      <About />
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Link to='/home'><p> Don't have an account? Sign Up</p></Link>
    </Form>
      <Newsletter />
      <Footer />
      
    </>
  )
}

export default SignIn
