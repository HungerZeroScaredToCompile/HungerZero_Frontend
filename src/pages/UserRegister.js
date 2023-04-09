import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { LoginContext } from '../Contexts/LoginContext';
import { TextField } from "@mui/material";

const UserRegister = () => {

  const {username, setUsername}= useContext(LoginContext)

  const [user, setUser] = useState("")
  const [fname, setFName] = useState("")
  const [lname, setLName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
//   const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  const isInvalid = password === "" || fname === "" || email === "" || lname === "" || username === "" || address === "";

  const navigate = useNavigate()


  const handleSignup = (e) => {
    e.preventDefault();


    if (isInvalid) {
      console.log("Error")
      alert("Error! Please fill the fields")
    }
    else {
      let data = new FormData();
      data.append('password', password);
      data.append('First_name', fname);
      data.append('Last_name', lname);
      data.append('email', email);
      data.append('username', username);
    //   data.append('phone', phone);
      data.append('address', address);

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/LoginReg/register/',
        // headers: { 
        //   ...data.getHeaders()
        // },

        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      setUser({ fname: fname, lname: lname, email: email, password: password, username: username, address: address });
      console.log(user)
      navigate('/userlogin')
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
      <img
        className="absolute top-[0px] left-[680px] w-[840px] h-[710px] object-cover"
        alt=""
        src="/katt-yukawa-K0E6E0a0R3A-unsplash1.png"
      />
      
      <button className="absolute top-[594px] left-[130px] rounded-3xs bg-white box-border w-[368px] h-[52px] border-[1px] border-solid border-seagreen-100 text-black font-bold" >
   
        Sign up with Google
      </button>
      
      <b className="absolute top-[134px] left-[120px] text-17xl inline-block text-seagreen-100 w-[602px] h-[54px]"style={{fontSize: "50px"}}>
        Create an account
      </b>
      <img
        className="absolute h-[1.69%] w-[0.79%] top-[86.9%] right-[69.01%] bottom-[11.41%] left-[30.2%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector11.svg"
      />
      <img
        className="absolute h-[3.41%] w-[3.25%] top-[85.61%] right-[75.28%] bottom-[10.99%] left-[28.47%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/google.svg"
      />
     <form >
      <TextField
        className="[border:none] bg-[transparent] absolute top-[224px] left-[86px]"
        sx={{ width: 220 }}
        color="success"
        variant="standard"
        type="text"
        label="First Name"
        size="medium"
        margin="none"
        value={fname} onChange={(e) => setFName(e.target.value)}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[319px] left-[-135px]"
        sx={{ width: 220 }}
        color="success"
        variant="standard"
        type="email"
        label="Email"
        size="medium"
        margin="none"
        value={email} onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[414px] left-[-355px]"
        sx={{ width: 220 }}
        color="success"
        variant="standard"
        type="text"
        label="Address"
        size="medium"
        margin="none"
        value={address} onChange={(e) => setAddress(e.target.value)}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[413px] left-[-260px]"
        sx={{ width: 220 }}
        color="success"
        variant="standard"
        type="password"
        label="Password"
        size="medium"
        margin="none"
        value={password} onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[317px] left-[-480px]"
        sx={{ width: 220 }}
        color="success"
        variant="standard"
        type="text"
        label="Username"
        size="medium"
        margin="none"
        value={username} onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[222px] left-[-700px]"
        sx={{ width: 220 }}
        color="success"
        variant="standard"
        type="text"
        label="Last Name"
        size="medium"
        margin="none"
        value={lname} onChange={(e) => setLName(e.target.value)}
      />
      <button className="absolute top-[527px] left-[130px] rounded-3xs bg-seagreen-100 w-[368px] h-[52px] text-whitesmoke-100 font-bold" onClick={handleSignup}>
   
   Create Account
 </button>
 </form>
      <div className="absolute top-[673px] left-[190px] text-sm font-semibold inline-block w-[348px] h-3.5 text-orange">
      <p className='' >Already have an account? <Link to='/userlogin'> <button className='bg-transparent'    >Sign in</button></Link></p>
      </div>
    </div>

    // <div className='flex flex-row'>
    //   <div>

    
    //   <form>

    //     <div>
    //       <p><label classname="labels" for="fname">First Name</label></p>
    //       <input className='textfield' type="text" name="firstname" placeholder='First Name' value={fname} onChange={(e) => setFName(e.target.value)}></input>
    //     </div>
    //     <br />

    //     <div>
    //       <p><label classname="labels" for="lname">Last Name</label></p>
    //       <input className='textfield' type="text" name="lastname" placeholder='Last Name' value={lname} onChange={(e) => setLName(e.target.value)}></input>
    //     </div>

    //     <br />

    //     <div>
    //       <p><label classname="labels" for="username"> Username</label></p>
    //       <input className='textfield' type="text" name="username" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
    //     </div>

    //     <br />


    //     <div>
    //       <p><label classname="labels" for="email">Email</label></p>
    //       <input className='textfield' type="text" name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
    //     </div>

    //     <br />


    //     <div>
    //       <p><label classname="labels" for="password">Password</label></p>
    //       <input className='textfield' type="password" name="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
    //     </div>

    //     <br />


    //     <div>
    //       <p><label classname="labels" for="phone">Phone</label></p>
    //       <input className='textfield' type="phone" name="phone" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
    //     </div>

    //     <div>
    //       <p><label classname="labels" for="address">Address</label></p>
    //       <input className='textfield' type="address" name="address" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)}></input>
    //     </div>

    //     <button type='submit' onClick={handleSignup} >Sign up</button>



    //   </form>
    //   <br/>
    //   <p className='' >Already have an account? <Link to='/userlogin'> <button className=''
    //    >Sign in</button></Link></p>
    //      </div>
        
    // </div>
  )
}

export default UserRegister