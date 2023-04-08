import React, { useState } from 'react';
import { TextField } from "@mui/material";

const NGOFeedback = () => {
    const [isStarFilled, setIsStarFilled] = useState(false);

    const handleStarClick = () => {
      setIsStarFilled(!isStarFilled);
    };
  return (
    <div className="relative bg-whitesmoke-100 w-full h-[710px] overflow-hidden text-left text-45xl text-seagreen-100 font-playfair-display">
      <b className="absolute top-[189px] left-[57px] flex items-center w-[1170px] h-[89px]" style={{fontSize: "50px"}}>
        Help us with your feedback
      </b>
      <div className="absolute top-[316px] left-[54px] rounded-3xs bg-white w-[818px] h-[358px]" />
      <img
        className="absolute top-[346px] left-[302px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src={isStarFilled ? "/star-filled.svg" : "/star-border-purple500.svg"}
        onClick={handleStarClick}
      />
      <img
        className="absolute top-[346px] left-[370px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src={isStarFilled ? "/star-filled.svg" : "/star-border-purple500.svg"}
        onClick={handleStarClick}
      />
      <img
        className="absolute top-[346px] left-[438px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src={isStarFilled ? "/star-filled.svg" : "/star-border-purple500.svg"}
        onClick={handleStarClick}
      />
      <img
        className="absolute top-[346px] left-[506px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src={isStarFilled ? "/star-filled.svg" : "/star-border-purple500.svg"}
        onClick={handleStarClick}
      />
       <img
        className="absolute top-[346px] left-[574px] w-[50px] h-[50px] overflow-hidden"
        alt=""
        src={isStarFilled ? "/star-filled.svg" : "/star-border-purple500.svg"}
        onClick={handleStarClick}
      />
      <div className="absolute top-[614px] left-[633px] rounded-xl bg-seagreen-100 w-[196px] h-[35px]" />
      <b className="absolute top-[625px] left-[632px] text-xl flex font-kumbh-sans text-whitesmoke-100 text-center items-center justify-center w-[197px] h-[13px]">
        Submit
      </b>
      <img
        className="absolute top-[240px] left-[812px] w-[708px] h-[392px] object-cover"
        alt=""
        src="/image-7@2x.png"
      />
      <TextField
        className="absolute top-[436px] left-[108px]"
        sx={{ width: 704 }}
        color="success"
        variant="outlined"
        multiline
        rows={5}
        label="Write your feedback"
        margin="none"
      />
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
        <div className="absolute top-[44px] left-[1004px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
         Maps
        </div>
        <div className="absolute top-[44px] left-[1096px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px] text-seagreen-100 font-bold">
          Feedback
        </div>
        <div className="absolute top-[44px] left-[1210px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
          Contact Us
        </div>
        <img
          className="absolute top-[30px] left-[1415px] w-[52px] h-[52px] object-cover"
          alt=""
          src="/NGOprofile.png"
        />
        <div className="absolute top-[44px] left-[892px] text-mini font-poppins text-gray-200 text-left flex items-center w-[55px]">
          Home
        </div>
        <img
          className="absolute h-[23.15%] w-[1.64%] top-[38.85%] right-[9.34%] bottom-[38%] left-[89.01%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
      </nav>
    </div>
  );
};

export default NGOFeedback;
