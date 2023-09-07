import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../App.css'
import Footer from '../Component/Footer';
import About from '../Component/About';
import Hero from '../Component/Hero';
import Form from '../Component/Form';
import Nave from '../Component/Nave'
import Newsletter from '../Component/Newsletter';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from '../pages/SignIn';


function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nave />
      < Hero />
      <About />
      <Form />
      <Newsletter />
      <Footer />
      
    </>
  )
}

export default Home