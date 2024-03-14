import React from 'react'
import { Link } from 'react-router-dom'

function Loginpage() {
  return (
    <>
      <section className='login'>
        <div className="container">
          <div className="bb">
          <div className="box">
            <form action="">
              <input type="text" className='input' placeholder='username'/><br />
              
            <input type="password" className='input' placeholder='Password'/>
            </form>
            <button>Login in</button>
            
            <p>Not registered? <Link to={``}>Create an Account</Link></p>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Loginpage



