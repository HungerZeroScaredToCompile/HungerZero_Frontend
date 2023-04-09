import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

const Donations = () => {

  const [user, setUser] = useState('');
  const [grains, setGrains] = useState('');
  const [cookedFood, setCookedFood] = useState('');
  const [dal, setDal] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [ngo, setNGO] = useState('');
  const [chapatis, setChapatis] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://127.0.0.1:8000/user/donations/', {
      user: user,
      grains: grains,
      cooked_food: cookedFood,
      quantity: quantity,
      ngo: ngo,
      dal: dal
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    setUser('');
    setDal('');
    setGrains('');
    setCookedFood('');
    setQuantity(0);
    setNGO('');
    setChapatis('');
  };

  return (
    <div className="relative bg-whitesmoke-100 w-full h-[1379px] overflow-hidden text-left text-5xl text-darkslateblue-100 font-poppins">
      <img
        className="absolute top-[315px] left-[908px] rounded-11xl w-[557px] h-[1005px] object-cover"
        alt=""
        src="/rectangle-57@2x.png"
      />
      <div className="absolute top-[310Px] left-[54px] rounded-3xs bg-white w-[818px] h-[1014px]" />
      <img
        className="absolute top-[737px] left-[-126px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/ellipse8@2x.png"
      />
      <b className="absolute top-[528px] left-[112px] flex items-center w-[444px]">
        Enter Quantity of donated food
      </b>
      <b className="absolute top-[189px] left-[57px] text-45xl flex font-playfair-display text-seagreen-100 items-center w-[508px] h-[89px]" style={{fontSize: "50px"}}>
        Donate Now
      </b>
      <div className="absolute top-[1104px] left-[112px] rounded-lg bg-gold-100 w-[687px] h-[53px] overflow-hidden text-center text-lg text-gray-200 font-dm-sans">
  <label htmlFor="uploadImage" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-[24px] font-medium cursor-pointer">
    Upload Image
  </label>
  <input
    id="uploadImage"
    type="file"
    className="absolute opacity-0"
    onChange={(e) => console.log(e.target.files)}
  />
  <img
    className="absolute h-[56.6%] w-[4.37%] top-[23.9%] right-[87.89%] bottom-[19.5%] left-[7.74%] max-w-full overflow-hidden max-h-full"
    alt=""
    src="/Vector6.svg"
  />
</div>

      <img
        className="absolute h-[0.67%] w-[2.63%] top-[89.87%] right-[23.55%] bottom-[9.46%] left-[73.82%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/-icon-options-horizontal.svg"
      />
      <img
        className="absolute h-[0.67%] w-[2.63%] top-[89.87%] right-[20.59%] bottom-[9.46%] left-[76.78%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/-icon-options-horizontal.svg"
      />
      <img
        className="absolute h-[0.67%] w-[2.63%] top-[89.87%] right-[17.63%] bottom-[9.46%] left-[79.74%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/-icon-options-horizontal.svg"
      />
      <img
        className="absolute h-[1.35%] w-[1.32%] top-[61.59%] right-[5.13%] bottom-[37.06%] left-[93.55%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/-icon-circle-arrow-right.svg"
      />
      
      <form onSubmit={handleSubmit}>
      <button type="submit" className="absolute top-[1232px] left-[113px] rounded-xl bg-seagreen-100 w-[686px] h-[50px] flex font-kumbh-sans text-whitesmoke-100 text-center items-center justify-center w-[691px] h-[18px]" >

        Submit
      </button>

      <TextField
        className="[border:none] bg-[transparent] absolute top-[440px] left-[115px]"
        sx={{ width: 684 }}
        color="success"
        variant="outlined"
        type="text"
        label="Name of NGO"
        size="medium"
        margin="none"
        value={ngo} onChange={(event) => setNGO(event.target.value)} 
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[350px] left-[-570px]"
        sx={{ width: 684 }}
        color="success"
        variant="outlined"
        type="text"
        label="Your Name"
        size="medium"
        margin="none"
        value={user} onChange={(event) => setUser(event.target.value)} 
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[540px] left-[115px]"
        sx={{ width: 684 }}
        color="success"
        variant="outlined"
        type="number"
        label="Number of Chapattis"
        size="medium"
        margin="none"
        value={chapatis} onChange={(event) => setChapatis(event.target.value)}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[630px] left-[-570px]"
        sx={{ width: 684 }}
        color="success"
        variant="outlined"
        type="number"
        label="Quantity (kg) of Sabzi"
        size="medium"
        margin="none"
        value={cookedFood} onChange={(event) => setCookedFood(event.target.value)}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[670px] left-[115px]"
        sx={{ width: 684 }}
        color="success"
        variant="outlined"
        type="number"
        label="Quantity (kg) of Rice"
        size="medium"
        margin="none"
        value={grains} onChange={(event) => setGrains(event.target.value)}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[770px] left-[-570px]"
        sx={{ width: 684 }}
        color="success"
        variant="outlined"
        type="number"
        label="Quantity (kg) of Dal"
        size="medium"
        margin="none"
        value={dal} onChange={(event) => setDal(event.target.value)}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[820px] left-[115px]"
        sx={{ width: 684 }}
        color="success"
        variant="outlined"
        type="text"
        label="Number of plates of food another than one mentioned above"
        size="medium"
        margin="none"
      />
      </form>
      
      <nav
        className="absolute top-[0px] left-[0px] w-[1520px] h-28 overflow-hidden"
        id="navbar"
      >
        <img
          className="absolute top-[21px] left-[28px] w-20 h-[68.49px] object-cover"
          alt=""
          src="/image-3@2x.png"
        />
        <div className="absolute top-[40px] left-[115px] text-5xl font-kumbh-sans text-gray-200 text-left flex items-center w-[234px]">
          HungerZero
        </div>
      <Link to={"/userhome/donations"}><b className="absolute top-[44px] left-[984px] text-mini flex font-poppins text-seagreen-100 text-left items-center w-[110px]">
          Donation
        </b></Link>  
     <Link to={"/userhome/community"}><div className="absolute top-[44px] left-[1096px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
          Community
        </div></Link>   
       <Link to={"/userhome/contact"}><div className="absolute top-[44px] left-[1210px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
          Contact Us
        </div></Link> 
       <Link to={"/userprofile"} ><img
          className="absolute top-[30px] left-[1415px] w-[52px] h-[52px] object-cover"
          alt=""
          src="/ellipse1@2x.png"
        /></Link>
       <Link to={"/userhome"}><div className="absolute top-[44px] left-[892px] text-mini font-poppins text-gray-200 text-left flex items-center w-[55px]">
          Home
        </div></Link> 
      <Link to={"/userhome/notificationuser"}> <img
          className="absolute h-[23.15%] w-[1.64%] top-[38.85%] right-[9.34%] bottom-[38%] left-[89.01%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        /></Link> 
      </nav>
    </div>
  );
};

export default Donations;
