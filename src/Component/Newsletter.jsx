import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Newsletter.css'



function Newsletter() {

  return (
    
    <Container fluid>
      <div id='newsletter'>
        <Row>
            <Col xs={12} md={6}>
            <h1>Subscribe to Our Newsletter </h1>
            </Col>
            <Col xs={12} md={6}>
            <Row>
            <form>
                
                <input type='email' placeholder='Enter Email'/>
                <button type='submit'>Subscribe</button>
            </form>
            </Row>
            </Col>
        </Row>
      </div>
      
    </Container>
  )
}

export default Newsletter
