import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { LoginContext } from '../Contexts/LoginContext'

const UserRegister = () => {

  const {username, setUsername}= useContext(LoginContext)

  const [user, setUser] = useState("")
  const [fname, setFName] = useState("")
  const [lname, setLName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  const isInvalid = password === "" || fname === "" || email === "" || lname === "" || username === "" || phone === "" || address === "";

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
      data.append('phone', phone);
      data.append('address', address);

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://rishh.pythonanywhere.com/LoginReg/register/',
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

      setUser({ fname: fname, lname: lname, email: email, password: password, username: username, phone: phone, address: address });
      console.log(user)
      navigate('/userlogin')
    }
  }



  return (
    <div className='flex flex-row'>
      <div>

    
      <form>

        <div>
          <p><label classname="labels" for="fname">First Name</label></p>
          <input className='textfield' type="text" name="firstname" placeholder='First Name' value={fname} onChange={(e) => setFName(e.target.value)}></input>
        </div>
        <br />

        <div>
          <p><label classname="labels" for="lname">Last Name</label></p>
          <input className='textfield' type="text" name="lastname" placeholder='Last Name' value={lname} onChange={(e) => setLName(e.target.value)}></input>
        </div>

        <br />

        <div>
          <p><label classname="labels" for="username"> Username</label></p>
          <input className='textfield' type="text" name="username" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
        </div>

        <br />


        <div>
          <p><label classname="labels" for="email">Email</label></p>
          <input className='textfield' type="text" name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>

        <br />


        <div>
          <p><label classname="labels" for="password">Password</label></p>
          <input className='textfield' type="password" name="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>

        <br />


        <div>
          <p><label classname="labels" for="phone">Phone</label></p>
          <input className='textfield' type="phone" name="phone" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
        </div>

        <div>
          <p><label classname="labels" for="address">Address</label></p>
          <input className='textfield' type="address" name="address" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)}></input>
        </div>

        <button type='submit' onClick={handleSignup} >Sign up</button>



      </form>
      <br/>
      <p className='' >Already have an account? <Link to='/userlogin'> <button className=''
       >Sign in</button></Link></p>
         </div>
        
    </div>
  )
}

export default UserRegister