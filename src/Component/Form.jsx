import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Form.css'
import { Link } from 'react-router-dom';


function Form() {
  const [count, setCount] = useState(0)

  return (
    < div className='co' id='form'>
      <div className='contain'>
        <div className='header'>
            <h2>Create account</h2>
        </div>
        <form>
        <div className='form-control'>
        <label htmlFor='text'>Username: </label>
        <input typeof='text' placeholder='Username' id='username'/>
        </div>
        <div className='form-control'>
        <label htmlFor='email'>Email: </label>
        <input typeof='email' placeholder='Email address' id='email'/>
        </div>
        <div className='form-control'>
        <label htmlFor='password'>Password: </label>
        <input typeof='password' placeholder='password' id='password'/>
        </div>
        <div className='form-control'>
        <label htmlFor='confirmPassword'>Confirm password: </label>
        <input typeof='password' placeholder='Confirm password' id='confirmPassword'/>
        </div>
        <button>Submit</button>

        <a href='/signin'><p>Already have an account? Sign in</p></a>
      </form>
      </div>
    </div>
  )
}

export default Form
