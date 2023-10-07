import React, { useState } from 'react';
import './login.css'


function Login(){

  const [forms, setForm] = useState({});

  function sendotp(){
    prompt("Enter OTP")
  }

  const [fullname,updatefullname]=useState("")

  //For Geeting data from input tags
  function handleForm(e){
    updatefullname(e.target.value);
    setForm({
      ...forms,
      [e.target.name] : e.target.value
    })

  }

  // const signUpButton = document.getElementById('signUp');
  // const signInButton = document.getElementById('signIn');
  // const container = document.getElementById('container');

  // signUpButton.addEventListener('click', () =>
  // container.classList.add('right-panel-active'));

  // signInButton.addEventListener('click', () =>
  // container.classList.remove('right-panel-active'));
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);

  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/signup', {
      method: 'POST',
      body:JSON.stringify(forms),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
  }
  
  return(
    <div className='loginpage'>    
     <div className='pageemojis'> 
    <img
    height={'84px'} 
    left={'4px'}
    src='' />

    </div>
    <div>
    
     <div className='title'>
    <img src='' alt=''/>
    </div>
    <div className='heading'>
      <h1>Department of Information Technology</h1>
      
    </div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
        <div className={isSignUpActive ? 'right-panel-active container' : 'container'} id="container">
          <div className="form-container sign-up-container">
            <form onSubmit={handleSubmit}>
              <h1>Create Account</h1>
              <div className='hello'>
              <h2>Hello... {fullname} !</h2>
              {/* Used for debuging */}
              {/* <p>{JSON.stringify(forms)}</p> */}
              </div>
              
              
              <input type="text" onChange={handleForm} name="fullName" placeholder="Full Name" />
              <input type="text" onChange={handleForm} name="rollNo" placeholder="Roll Number" />
              <input type="email" onChange={handleForm} name="email" placeholder="Email" />
              <button onClick={sendotp} id="OTP">Send OTP</button>
              <input type="password" placeholder="Password" />
              <input type="password" onChange={handleForm} name="password" placeholder="Confirm Password" />
              <button type='submit' id="signUp">Sign Up</button>
            </form>
          </div>

          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div className='hello'>
              <h2>Hello... {fullname} !</h2>

              </div>
              
              
              <input onChange={handleForm} type="text" placeholder="Full Name" />
              <input type="text" placeholder="Roll Number" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button id="signIn">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>Already having an account? <br></br>Sign in here...</p>
                <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, IT Entusiast ..!</h1>
                <p>Enter your details and be Eligible</p>
                <button className="ghost" id="signUp"  onClick={handleSignUpClick}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
  
      </div>
  )
}
  

export default Login;