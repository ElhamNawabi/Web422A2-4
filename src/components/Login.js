import React from 'react';
import '../assets/css/App.css';

function Login(){
  return (
    <section id="login-section">

    <div className= "container">
    
        <h1>Login</h1>

        <form action="">

            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
            </div>


            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="text" id="password" />
            </div>


           
                <button className="btn" type="submit">Login</button>
                <br>
                </br>
                <br></br>
        </form>

    </div>

</section>
  )
}

export default Login