import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { LoginContext } from '../Contexts/LoginContext'
// import hzlogin from "../images/hzlogin.png"
import { Link } from 'react-router-dom';
import { TextField } from "@mui/material";

const UserLogin = () => {

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
        url: 'http://127.0.0.1:8000/LoginReg/login/',
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
          navigate('/userhome')
        })
        .catch((error) => {
          console.log(error);
          alert('The username or password entered is wrong')
          navigate('/userhome')
        });

    }
  }

  return (
    <div className="relative bg-whitesmoke-100 w-full h-[710px] overflow-hidden text-left text-xl text-gray-200 font-kumbh-sans">
    <img
      className="absolute top-[21px] left-[28px] w-20 h-[68.49px] object-cover"
      alt=""
      src="/image-3@2x.png"
    />
    <div className="absolute top-[40px] left-[115px] text-5xl flex items-center w-[234px]">
      HungerZero
    </div>
    <b className="absolute top-[157px] left-[252px] text-29xl inline-block text-seagreen-100 w-[402px] h-[54px]">
      Login
    </b>
    <form  onSubmit={handleLogin}>
    <TextField
      className="[border:none] bg-[transparent] absolute top-[392px] left-[200px]"
      sx={{ width: 220 }}
      color="primary"
      variant="standard"
      type="password"
      label="Password"
      size="medium"
      margin="none"
      value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
    <TextField
      className="[border:none] bg-[transparent] absolute top-[277px] left-[-20px]"
      sx={{ width: 220 }}
      color="success"
      variant="standard"
      type="text"
      label="Username"
      size="medium"
      margin="none"
      value={username}
    onChange={(e) => setUsername(e.target.value)}
    />
     <button className="absolute top-[527px] left-[130px] rounded-3xs bg-seagreen-100 w-[368px] h-[52px] text-whitesmoke-100 font-bold" >
   
   Sign In
   </button>
   </form>
    <img
      className="absolute top-[0px] left-[634px] w-[886px] h-[710px] object-cover"
      alt=""
      src="/loginimg.png"
    />
   <button className="absolute top-[594px] left-[130px] rounded-3xs bg-white box-border w-[368px] h-[52px] border-[1px] border-solid border-seagreen-100 text-black font-bold" >
   
   Sign In with Google

 </button>
 <img
        className="absolute h-[3.41%] w-[3.25%] top-[85.61%] right-[75.28%] bottom-[10.99%] left-[28.47%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/google.svg"
      />
   
   
    <div className="absolute top-[673px] left-[190px] text-sm font-semibold inline-block w-[348px] h-3.5 text-orange">
    <p className='' >Don't have an account? <Link to='/userregister'> <button className='bg-transparent'>Sign up</button></Link></p>
    </div>
  </div>
    // <div className='flex flex-row'>
    //   <div>

      
    //   <form onSubmit={handleLogin}>
    //     <p className=''>LOGIN</p>
    //     <label className=''>Username</label>
    //     <input className=''
    //       type='text'
    //       placeholder='username'
    //       name='username'
    //       aria-label='Username'
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}></input>



    //     <br />
    //     <label className=' '>Password</label>
    //     <input className=''
    //       placeholder='password'
    //       type='password'
    //       name='password'
    //       aria-label='Password'
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}></input>

    //     <button className=''>Forgot Password?</button>

    //     <br />
    //     <button className=''>LOGIN</button>

    //   </form>
    //   <br />


    //   <p className='' >Don't have an account? <Link to='/userregister'> <button className=''
    //    >Sign up</button></Link></p>
    //    </div>
    // </div>
  )
}

export default UserLogin