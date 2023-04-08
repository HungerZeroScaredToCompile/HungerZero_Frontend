import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotificationUser = () => {
  // const [notifications, setNotifications] = useState([]);

  // useEffect(() => {
  //   axios.get('https://rishh.pythonanywhere.com/user/notifications/list')
  //     .then(response => {
  //       setNotifications(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching notifications:', error);
  //     });
  // }, []);

  return (
    
    <div className="relative bg-whitesmoke-100 w-full h-[1144px] overflow-hidden text-left text-sm text-darkslateblue-100 font-poppins">
      <b className="absolute top-[189px] left-[57px] text-45xl flex font-playfair-display text-seagreen-100 items-center w-[1170px] h-[89px]"style={{fontSize: "50px"}}>
        Notifications
      </b>
      <div className="absolute top-[311px] left-[57px] rounded-3xs bg-white w-[1408px] h-[95px]" />
      <img
        className="absolute top-[334px] left-[86px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/Yoda.png"
      />
      <div className="absolute top-[334px] left-[172px] text-base inline-block w-[1261px]">
        <span className="font-extrabold">{`Youth for Defence in Animals `}</span>
        <b className="text-gray-100">
          has posted a requirement of food for 25 people
        </b>
      </div>
      <div className="absolute top-[367px] left-[200px] font-medium text-gray-100 flex items-center w-[301px]">
        12 mins ago
      </div>
      <img
        className="absolute top-[367px] left-[172px] w-5 h-5 object-cover"
        alt=""
        src="/alarm-clock@2x.png"
      />
      <div className="absolute top-[336px] left-[1257px] rounded-3xs bg-seagreen-100 w-[185px] h-[38px]" />
      <b className="absolute top-[337px] left-[1283px] flex font-kumbh-sans text-whitesmoke-100 text-center items-center justify-center w-[134px] h-9">
        Donate Now
      </b>
      <div className="absolute top-[439px] left-[57px] rounded-3xs bg-white w-[1408px] h-[95px]" />
      <img
        className="absolute top-[462px] left-[86px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/Ellipse.png"
      />
      <div className="absolute top-[462px] left-[172px] text-base inline-block w-[1261px]">
        <span className="font-extrabold">{`Myna Mahila Foundation `}</span>
        <b className="text-gray-100">
          has given a positive feedback to your previous donation
        </b>
      </div>
      <div className="absolute top-[495px] left-[200px] font-medium text-gray-100 flex items-center w-[301px]">
        48 mins ago
      </div>
      <img
        className="absolute top-[495px] left-[172px] w-5 h-5 object-cover"
        alt=""
        src="/alarm-clock@2x.png"
      />
      <div className="absolute top-[468px] left-[1257px] rounded-3xs bg-seagreen-100 w-[185px] h-[38px]" />
      <b className="absolute top-[469px] left-[1273px] flex font-kumbh-sans text-whitesmoke-100 text-center items-center justify-center w-[154px] h-9">
        Claim Your Reward
      </b>
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
        <div className="absolute top-[44px] left-[984px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
          Donation
        </div>
        <div className="absolute top-[44px] left-[1096px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
          Community
        </div>
        <div className="absolute top-[44px] left-[1210px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
          Contact Us
        </div>
        <img
          className="absolute top-[30px] left-[1415px] w-[52px] h-[52px] object-cover"
          alt=""
          src="/ellipse1@2x.png"
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

export default NotificationUser;
