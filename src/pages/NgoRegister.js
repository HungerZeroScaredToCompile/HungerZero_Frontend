import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { LoginContext } from '../Contexts/LoginContext'

const NgoRegister = () => {

  const {username, setUsername}= useContext(LoginContext)

  const [user, setUser] = useState("")
  const [companyname, setCompanyName] = useState("")
  const [companydomain, setCompanyDomain] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAdress] = useState("")

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
      data.append('companyname', companyname);
      data.append('companydomain', companydomain);
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

      setUser({ companyname: companyname, companydomain: companydomain, email: email, password: password, username: username, phone: phone, address: address });
      console.log(user)
      navigate('/ngologin')
    }
  }



  return (
    <div className='flex flex-row'>
      <div>

    
      <form>

        <div>
          <p><label classname="labels" for="companyname">Company Name</label></p>
          <input className='textfield' type="text" name="companyname" placeholder='companyname' value={companyname} onChange={(e) => setCompanyName(e.target.value)}></input>
        </div>
        <br />

        <div>
          <p><label classname="labels" for="companydomain">Company Domain</label></p>
          <input className='textfield' type="text" name="companydomain" placeholder='companydomain' value={companydomain} onChange={(e) => setCompanyDomain(e.target.value)}></input>
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
          <input className='textfield' type="address" name="address" placeholder='address' value={address} onChange={(e) => setAddress(e.target.value)}></input>
        </div>

        <button type='submit' onClick={handleSignup} >Sign up</button>



      </form>
      <br/>
      <p className='' >Already have have an account? <Link to='/ngologin'> <button className=''
       >Sign in</button></Link></p>
         </div>
        
    </div>
  )
}

export default NgoRegister