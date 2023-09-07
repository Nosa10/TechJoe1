import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Footer.css'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
     <footer id='footer'>
        <p> Kharey Web Development, copyright &copy; 2023</p>
     </footer>
    </>
  )
}

export default Footer
