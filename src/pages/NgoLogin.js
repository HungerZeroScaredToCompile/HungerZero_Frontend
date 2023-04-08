import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { LoginContext } from '../Contexts/LoginContext'
import { Link } from 'react-router-dom'

const NgoLogin = () => {

  const {username, setUsername}= useContext(LoginContext)
  const { setLogged}= useContext(LoginContext)
  const [password, setPassword] = useState("");
  const storageemail = localStorage.getItem("email")

  const navigate = useNavigate()

  const isInvalid = password === "" || username === "";

  const handleLogin = (e) => {
    e.preventDefault();
    if (isInvalid) {
      console.log("Error")
      alert("Error! Please fill the fields")
    }
    else {

      var data = new FormData();
      data.append('username', username);
      data.append('password', password);

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://rishh.pythonanywhere.com/LoginReg/login/',
        headers: {},
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));

          localStorage.setItem("username", username)
          localStorage.setItem("password", password)
          localStorage.setItem("accesstoken", response.data.access)
          localStorage.setItem("refreshtoken", response.data.refresh)
          setLogged(true)
          navigate('/ngohome')
        })
        .catch((error) => {
          console.log(error);
          alert('The username or password entered is wrong')
        });

    }
  }

  return (
    <div className='flex flex-row'>
      <div>

      
      <form onSubmit={handleLogin}>
        <p className=''>LOGIN</p>
        <label className=''>Username</label>
        <input className=''
          type='text'
          placeholder='username'
          name='username'
          aria-label='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}></input>



        <br />
        <label className=' '>Password</label>
        <input className=''
          placeholder='password'
          type='password'
          name='password'
          aria-label='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}></input>

        <button className=''>Forgot Password?</button>

        <br />
        <button className=''>LOGIN</button>

      </form>
      <br />


      <p className='' >Don't have an account? <Link to='/ngoregister'> <button className=''
       >Sign up</button></Link></p>
       </div>

    </div>
  )
}

export default NgoLogin