import React from 'react'
import ReactDOM from 'react-dom/client'
import './Hero.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero() {

  return (
    <Container className ="hero" id='hero'>
      <Row>
        <Col xs={12} md={8}>
          <h2>The Tale of Uzumaki Naruto</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Modi, dolores itaque fugiat voluptatibus libero harum ex 
            impedit voluptas ducimus debitis hic assumenda magni? 
            Consequatur temporibus ab repudiandae sapiente non sint!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Modi, dolores itaque fugiat voluptatibus libero harum ex 
            impedit voluptas ducimus debitis hic assumenda magni? 
            Consequatur temporibus ab repudiandae sapiente non sint!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Modi, dolores itaque fugiat voluptatibus libero harum ex 
            impedit voluptas ducimus debitis hic assumenda magni? 
            Consequatur temporibus ab repudiandae sapiente non sint!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Modi, dolores itaque fugiat voluptatibus libero harum ex 
            impedit voluptas ducimus debitis hic assumenda magni? 
            Consequatur temporibus ab repudiandae sapiente non sint!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Modi, dolores itaque fugiat voluptatibus libero harum ex 
            impedit voluptas ducimus debitis hic assumenda magni? 
            Consequatur temporibus ab repudiandae sapiente non sint!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Modi, dolores itaque fugiat voluptatibus libero harum ex 
            impedit voluptas ducimus debitis hic assumenda magni? 
            Consequatur temporibus ab repudiandae sapiente non sint!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Modi, dolores itaque fugiat voluptatibus libero harum ex 
            impedit voluptas ducimus debitis hic assumenda magni? 
            Consequatur temporibus ab repudiandae sapiente non sint!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Modi, dolores itaque fugiat voluptatibus libero harum ex 
            impedit voluptas ducimus debitis hic assumenda magni? 
            Consequatur temporibus ab repudiandae sapiente non sint!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Modi, dolores itaque fugiat voluptatibus libero harum ex 
            impedit voluptas ducimus debitis hic assumenda magni? 
            Consequatur temporibus ab repudiandae sapiente non sint!</p>
        </Col>
        <Col xs={12} md={4}>
          <img src="NineTailFox-transformed.png"></img>
        </Col>
      </Row>

    </Container>
  )
}

export default Hero


