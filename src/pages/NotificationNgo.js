const NotificationNgo = () => {
    return (
      <div className="relative bg-whitesmoke-100 w-full h-[1144px] overflow-hidden text-left text-sm text-darkslateblue-100 font-poppins">
        <b className="absolute top-[189px] left-[57px] text-45xl flex font-playfair-display text-seagreen-100 items-center w-[1170px] h-[89px]"style={{fontSize: "50px"}}>
          Notifications
        </b>
        <div className="absolute top-[311px] left-[57px] rounded-3xs bg-white w-[1408px] h-[95px]" />
        <img
          className="absolute top-[334px] left-[86px] w-[50px] h-[50px] object-cover"
          alt=""
          src="/Dinesh.png"
        />
        <div className="absolute top-[334px] left-[172px] text-base inline-block w-[1261px]">
          <span className="font-extrabold">{`Dinesh Khatri `}</span>
          <b className="text-gray-100">
            has applied to be a volunteer at your organization
          </b>
        </div>
        <div className="absolute top-[367px] left-[200px] font-medium text-gray-100 flex items-center w-[301px]">
          5 mins ago
        </div>
        <img
          className="absolute top-[367px] left-[172px] w-5 h-5 object-cover"
          alt=""
          src="/alarm-clock@2x.png"
        />
        <div className="absolute top-[439px] left-[57px] rounded-3xs bg-white w-[1408px] h-[95px]" />
        <img
          className="absolute top-[462px] left-[86px] w-[50px] h-[50px] object-cover"
          alt=""
          src="/shanaya.png"
        />
        <div className="absolute top-[462px] left-[172px] text-base inline-block w-[1261px]">
          <span className="font-extrabold">{`Shanaya Singh `}</span>
          <b className="text-gray-100">
            has donated food for 35 people in your organization
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
        <b className="absolute top-[469px] left-[1283px] flex font-kumbh-sans text-whitesmoke-100 text-center items-center justify-center w-[134px] h-9">
          Give Feedback
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
          <div className="absolute top-[44px] left-[959px] text-mini font-poppins text-gray-200 text-center flex items-center justify-center w-[110px]">
            Maps
          </div>
          <div className="absolute top-[44px] left-[1085px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
            Feedback
          </div>
          <div className="absolute top-[44px] left-[1210px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
            Contact Us
          </div>
          <img
            className="absolute top-[30px] left-[1416px] w-[50px] h-[50px] object-cover"
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
  
  export default NotificationNgo;
  