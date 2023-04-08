import React, { useState,useRef }  from 'react';
const Community = () => {
   
    const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    // TODO: Handle the selected file
    console.log('Selected file:', file);
  };

    return (
      <div className="relative bg-whitesmoke-100 w-full h-[1719px] overflow-hidden text-left text-sm text-gray-100 font-poppins">
        <img
          className="absolute top-[717px] left-[1321px] w-[129px] h-[131px] hidden"
          alt=""
          src="/ellipse-113.svg"
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
          <div className="absolute top-[44px] left-[984px] text-mini font-poppins text-black text-left flex items-center w-[110px]">
            Donation
          </div>
          <b className="absolute top-[44px] left-[1096px] text-mini flex font-poppins text-seagreen-100 text-left items-center w-[110px]">
            Community
          </b>
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
        <b className="absolute top-[189px] left-[57px] text-45xl flex font-playfair-display text-seagreen-100 items-center w-[508px] h-[89px]" style={{fontSize: "50px"}}>
          Explore
        </b>
        <div className="absolute top-[122px] left-[57px] rounded-3xs bg-white box-border w-[927px] h-[39px] border-[1px] border-solid border-seagreen-100" />
        <input 
  type="text" 
  className="absolute top-[133px] left-[119px] text-mini flex items-center w-[278px] h-[19px] focus:outline-none" 
  placeholder="Search for Donors" 
/>

        <img
          className="absolute h-[1.31%] w-[1.55%] top-[7.5%] right-[93.72%] bottom-[91.18%] left-[4.74%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/Vector4.svg"
        />
        <div className="absolute top-[316px] left-[54px] rounded-3xs bg-white w-[925px] h-[145px]" />
        <img
          className="absolute top-[340px] left-[72px] w-10 h-10 object-cover"
          alt=""
          src="/ellipse@2x.png"
        />
<input
  type="text"
  className="absolute top-[337px] left-[126px] pl-5 rounded-xl bg-lightcyan w-[811px] h-[46px] focus:outline-none"
  placeholder="Where did you donate today?"
/>

        
      <div>
      <img
        className="absolute top-[413px] left-[131px] w-5 h-5 overflow-hidden cursor-pointer"
        alt=""
        src="/image.svg"
        onClick={handleButtonClick}
      /><div style={{ 
        position: 'relative', 
        left: '160px', 
        top: '410px', 
        color: '#212121', 
        fontSize: '16px' 
      }}>Upload Image</div>
      
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
    </div>
        
        <button className="absolute top-[405px] left-[796px] z-10 font-bold hover:cursor-pointer rounded-xl bg-seagreen-100 w-40 h-[35px] text-base flex font-kumbh-sans text-whitesmoke-100 text-center items-center justify-center w-[162px] h-[13px]" >
    
          Post
    </button>
        <div className="absolute top-[316px] left-[1019px] rounded-3xs bg-white w-[461px] h-[1036px]" />
        <div className="absolute top-[489px] left-[54px] rounded-3xs bg-white w-[925px] h-[632px]" />
        <img
          className="absolute top-[515px] left-[72px] w-[50px] h-[50px] object-cover"
          alt=""
          src="/ellipse2@2x.png"
        />
        <img
          className="absolute top-[1010px] left-[94px] w-[30px] h-[30px] object-cover"
          alt=""
          src="/ellipse3@2x.png"
        />
        <div className="absolute top-[575px] left-[72px] font-medium text-gray-200 flex items-center w-[885px]">
          Spreading love, one meal at a time. Honored to have had the opportunity
          to donate food to those in need. Let's continue to support our community
          and make a difference together! #FoodDonation #CommunityService #GiveBack
        </div>
        <div className="absolute top-[548px] left-[163px] font-medium flex items-center w-[301px]">
          12 mins ago at We Can Foundation
        </div>
        <div className="absolute top-[1080px] left-[138px] font-medium font-kumbh-sans flex items-center w-[301px]">
          View All Comments...
        </div>
        <b className="absolute top-[970px] left-[138px] text-base flex text-seagreen-100 items-center w-[101px]">
          Like
        </b>
        <b className="absolute top-[969px] left-[278px] text-base flex text-seagreen-100 items-center w-[101px]">
          Comment
        </b>
        <b className="absolute top-[969px] left-[892px] text-base flex text-seagreen-100 items-center w-[101px]">
          Share
        </b>
        <div className="absolute top-[517px] left-[135px] text-base font-black text-darkslateblue-100 flex items-center w-[885px]">
          Rahul Khureshi
        </div>
        <img
          className="absolute top-[651px] left-[54px] w-[925px] h-[303px] object-cover"
          alt=""
          src="/rectangle-72@2x.png"
        />
        <img
          className="absolute top-[548px] left-[135px] w-5 h-5 object-cover"
          alt=""
          src="/alarm-clock@2x.png"
        />
        <img
          className="absolute h-[1.45%] w-[1.81%] top-[56.27%] right-[91.88%] bottom-[42.87%] left-[6.32%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector3.svg"
        />
        <img
          className="absolute top-[967px] left-[233px] w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/mode-comment.svg"
        />
        <img
          className="absolute top-[967px] left-[847px] w-[30px] h-[30px] overflow-hidden"
          alt=""
          src="/share.svg"
        />
        <div className="absolute top-[1005px] left-[138px] flex items-center w-[802px] text-darkslateblue-100">
          <span className="[line-break:anywhere] w-full">
            <span>
              <b>Sara Harvey</b>
              <span className="font-black font-poppins">{` `}</span>
            </span>
            <span className="text-black">
              Thank you for your selfless act of kindness, Rahul. Your dedication
              to helping those in need through food donation is truly inspiring.
              Let's all follow in your footsteps and make a positive impact on our
              community. Keep up the amazing work! #Grateful #Inspiring
              #CommunityMatters
            </span>
          </span>
        </div>
        <div className="absolute top-[340px] left-[1055px] text-5xl font-black text-darkslateblue-100 flex items-center w-[302px]">
          Impact Assessment
        </div>
        <div className="absolute top-[399px] left-[1055px] font-medium text-gray-200 flex items-center w-[364px]">
          Number of people fed
        </div>
        <div className="absolute top-[514px] left-[1055px] font-medium text-gray-200 flex items-center w-[364px]">
          Percentage of food waste reduction
        </div>
        <div className="absolute top-[888px] left-[1055px] font-medium text-gray-200 flex items-center w-[200px]">
          Amount of greenhouse gas emissions saved
        </div>
        <b className="absolute top-[941px] left-[1055px] text-seagreen-100 font-bold text-9xl flex text-dodgerblue items-center w-[364px]" style={{fontSize: '40px'}}>
          12 Ton
        </b>
        <div className="absolute top-[888px] left-[1280px] font-medium text-gray-200 flex items-center w-[364px]">
          Average cost per meal
        </div>
        <b className="absolute top-[941px] left-[1280px] text-seagreen-100 font-bold text-9xl flex text-dodgerblue items-center w-[364px]" style={{fontSize: '40px'}}>
          ₹ 150
        </b>
        <div className="absolute top-[688px] left-[1086px] font-medium text-gray-200 text-right flex items-center w-[364px]">
          Percentage of food donated that is nutrious
        </div>
        <b className="absolute top-[604px] left-[1118px] text-xl flex text-gray-200 text-center items-center justify-center w-[46px]">
          70%
        </b>
        <b className="absolute top-[768px] left-[1363px] text-xl flex text-gray-200 text-center items-center justify-center w-[46px]">
          70%
        </b>
        <div className="absolute top-[463px] left-[1386px] font-medium text-right flex items-center w-[58px]">
          80/100
        </div>
        <div className="absolute top-[590px] left-[1197px] font-medium text-right flex items-center w-[253px]">
          Loreum ipsum Loreum ipsum Loreum ipsum Loreum ipsumLoreum ipsum
        </div>
        <div className="absolute top-[754px] left-[1076px] font-medium flex items-center w-[253px]">
          Loreum ipsum Loreum ipsum Loreum ipsum Loreum ipsumLoreum ipsum
        </div>
        <div className="absolute top-[434px] left-[1055px] rounded-3xs bg-gainsboro w-[389px] h-4" />
        <div className="absolute top-[434px] left-[1055px] rounded-3xs bg-gold-100 w-[285px] h-4" />
        <img
          className="absolute top-[426.33px] left-[1324.28px] rounded-sm w-[41px] h-10"
          alt=""
          src="/star-2.svg"
        />
        <div className="absolute top-[1296px] left-[1040px] rounded-xl bg-seagreen-100 w-[419px] h-[35px]" />
        <b className="absolute top-[1307px] left-[1037px] text-base flex font-kumbh-sans text-whitesmoke-100 text-center items-center justify-center w-[425px] h-[13px]">
          Donate More
        </b>
        <img
          className="absolute top-[553px] left-[1076px] w-[129px] h-[131px]"
          alt=""
          src="/ellipse-113.svg"
        />
        <img
          className="absolute top-[717px] left-[1321px] w-[129px] h-[131px]"
          alt=""
          src="/ellipse-113.svg"
        />
        <img
          className="absolute top-[552.5px] left-[1075.5px] w-[130px] h-[104.93px]"
          alt=""
          src="/ellipse-112.svg"
        />
        <img
          className="absolute top-[716.5px] left-[1320.5px] w-[130px] h-[104.93px]"
          alt=""
          src="/ellipse-112.svg"
        />
        <div className="absolute top-[1378px] left-[1019px] rounded-3xs bg-white w-[461px] h-[308px]" />
        <div className="absolute top-[1631px] left-[1040px] rounded-xl bg-seagreen-100 w-[419px] h-[35px]" />
        <b className="absolute top-[1642px] left-[1037px] text-base flex font-kumbh-sans text-whitesmoke-100 text-center items-center justify-center w-[425px] h-[13px]">
          Claim Your Rewards
        </b>
        <div className="absolute top-[1395px] left-[1099px] text-5xl font-black text-darkslateblue-100 text-center flex items-center justify-center w-[302px]">
          Congratulations!
        </div>
        <div className="absolute top-[1566px] left-[1085px] text-base font-medium text-center flex items-center w-[329px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">{`Your previous donation was successful. `}</p>
            <p className="m-0">You can claim your rewards now</p>
          </span>
        </div>
        <img
          className="absolute top-[1443px] left-[1095px] w-[310px] h-[108px] object-cover"
          alt=""
          src="/rectangle-79@2x.png"
        />
      </div>
    );
  };
  
  export default Community;
  