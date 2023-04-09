import React, {useContext, useState} from 'react'
import { LoginContext  } from '../Contexts/LoginContext'
import { useNavigate, Link } from 'react-router-dom'
import logo from "../images/logo.jpg"
import bell from "../images/bell.jpg"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ellipse from "../images/Ellipse.png"



const UserHome = () => {

    const { username, setLogged } = useContext(LoginContext)

    const navigate= useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('accesstoken')
    localStorage.removeItem('refreshtoken')
    setLogged(false)
    navigate('/')
  }
    return (
      <div className="relative bg-whitesmoke-100 w-full h-[1484px] overflow-hidden text-left text-smi text-seagreen-100 font-poppins ">
       {/* <div className='flex flex-row'>
       <img
          className="absolute top-[21px] left-[28px] w-20 h-[68.49px] object-cover"
          alt=""
          src={logo}
        />
        <div className="absolute top-[40px] left-[115px] text-5xl font-kumbh-sans text-gray-200 flex items-center w-[234px]">
          HungerZero
        </div> */}

        {/* <div className='ml-[1030px] mt-[14px] flex flex-row justify-between'>
          <Link to={"/userhome"} ><p className='m-3 text-[15px] font-extrabold'>
                Home
            </p></Link> 
            <p className='m-3 text-[15px]'>
                Donation
            </p>
            <p className='m-3 text-[15px]'>
               Community
            </p>
            <p className='m-3 text-[15px]'>
                Contact Us
            </p>
            */}
            {/*bell icon */}
        {/* <Link to={'notificationuser'}><img className='h-5 w-5 m-2' src={bell}>

</img></Link>     */}

            {/*profile icon */}
        {/* <Link to={"/userprofile"}> <img className='h-7 w-7 m-2' src={ellipse}>

</img></Link>    */}
       {/* </div>

        </div> */}
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
      <Link to={"/userhome/donations"}><div className="absolute top-[44px] left-[984px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
          Donation
        </div></Link>  
       <Link to={"/userhome/community"}> <div className="absolute top-[44px] left-[1096px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
          Community
        </div></Link>
        <Link to={"/userhome/contact"}><div className="absolute top-[44px] left-[1210px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
          Contact Us
        </div></Link>
        <img
          className="absolute top-[30px] left-[1415px] w-[52px] h-[52px] object-cover"
          alt=""
          src="/ellipse1@2x.png"
        />
      <Link to={"/userhome"} ><div className="absolute top-[44px] text-seagreen-100 font-bold left-[892px] text-mini font-poppins text-gray-200 text-left flex items-center w-[55px]">
          Home
        </div></Link> 
    <Link to={"/userhome/notificationuser"}> <img
          className="absolute h-[23.15%] w-[1.64%] top-[38.85%] right-[9.34%] bottom-[38%] left-[89.01%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        /></Link>   
      </nav>


        <div className="absolute top-[315px] left-[1127px] rounded-3xs bg-gold-100 w-[356px] h-[1117px]" />
        <div className="absolute top-[1342px] left-[1225px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Preet Hingad
        </div>
        <div className="absolute top-[1255px] left-[1225px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Sarah Dama
        </div>
        <div className="absolute top-[961px] left-[1225px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Shriya Shah
        </div>
        <div className="absolute top-[858px] left-[1225px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Harsh Mehta
        </div>
        <div className="absolute top-[753px] left-[1225px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Ishaan Chaskar
        </div>
        <div className="absolute top-[1061px] left-[1177px]">6</div>
        <div className="absolute top-[661px] left-[1177px]">2</div>
        <div className="absolute top-[961px] left-[1181px]">2</div>
        <div className="absolute top-[499px] left-[1264px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Devanshi Muchhala
        </div>
        <img
          className="absolute top-[499px] left-[1388px] w-[52px] h-[58px] object-cover"
          alt=""
          src={ellipse}
        />
        <img
          className="absolute top-[1339.47px] left-[1161.38px] rounded-sm w-[50px] h-[50px]"
          alt=""
          src={ellipse}
        />
        <img
          className="absolute top-[1250.47px] left-[1161.38px] rounded-sm w-[50px] h-[50px]"
          alt=""
          src={ellipse}
        />
        <img
          className="absolute top-[1150.47px] left-[1161.38px] rounded-sm w-[50px] h-[50px]"
          alt=""
          src={ellipse}
        />
        <img
          className="absolute top-[1050.47px] left-[1161.38px] rounded-sm w-[50px] h-[50px]"
          alt=""
          src={ellipse}
        />
        <img
          className="absolute top-[850.47px] left-[1161.38px] rounded-sm w-[50px] h-[50px]"
          alt=""
          src={ellipse}
        />
        <img
          className="absolute top-[950.47px] left-[1161.38px] rounded-sm w-[50px] h-[50px]"
          alt=""
          src={ellipse}
        />
        <img
          className="absolute top-[750.47px] left-[1161.38px] rounded-sm w-[50px] h-[50px]"
          alt=""
          src={ellipse}
          ></img>
        {/* <div className="absolute top-[133px] left-[119px] text-mini text-gray-100 flex items-center w-[278px] h-[19px]">
          Search for NGOs
        </div> */}

{/* Search bar */}
<div className="w-[600px] mt-[120px]  ml-[48px] p-1 pr-0 flex items-center">
      <input
        className="appearance-none rounded-lg bg-white border-none w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Search for Ngos"
        // value={searchTerm}
        // onChange={handleSearch}
      />
      <button
        className="flex-shrink-0 bg-[#06906F]  text-sm border-4 text-white py-1 px-2 rounded-lg"
        type="button"
      >
        Search
      </button>
    </div>

   

        <b className="absolute top-[190px] left-[54px] text-[50px] flex font-playfair-display items-center w-[508px] h-[89px]">
          Top NGOs
        </b>
        <br/>
        <br/>
        <img
          className="absolute top-[499px] left-[1181px] w-[52px] h-[58px] object-cover"
          alt=""
          src={ellipse}
        />
        <img
          className="absolute top-[432px] left-[1293px] w-[52px] h-[58px] object-cover"
          alt=""
          src={ellipse}
        />
        <div className="absolute top-[336px] left-[1206px] text-[32px] font-semibold text-darkslateblue-100 flex items-center w-[277px] h-11">
          Leaderboard
        </div>
        <div className="absolute top-[562px] left-[1162px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Hemang Soneji
        </div>
        <div className="absolute top-[562px] left-[1368px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Aarya Kamdar
        </div>
        <div className="absolute top-[658px] left-[1225px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Sanjana Shah
        </div>
        <img
          className="absolute top-[650.47px] left-[1161.38px] rounded-sm w-[50px] h-[50px]"
          alt=""
          src={ellipse}
        />
        <div className="absolute top-[667px] left-[1182px]">4</div>
        <div className="absolute top-[869px] left-[1182px]">6</div>
        <div className="absolute top-[1170px] left-[1184px]">9</div>
        <div className="absolute top-[1267px] left-[1180px]">
          <p className="m-0">10</p>
        </div>
        <div className="absolute top-[1358px] left-[1182px]">11</div>
        <div className="absolute top-[1070px] left-[1184px]">8</div>
        <div className="absolute top-[967px] left-[1182px]">7</div>
        <div className="absolute top-[769px] left-[1183px]">5</div>
        <div className="absolute top-[1061px] left-[1225px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Lorem ipsum
        </div>
        <div className="absolute top-[1158px] left-[1225px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Lorem ipsum
        </div>
        {/* <img
          className="absolute h-[1.89%] w-[1.64%] top-[3.17%] right-[9.34%] bottom-[94.95%] left-[89.01%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
        /> */}
        {/* <img
          className="absolute h-[1.52%] w-[1.55%] top-[8.69%] right-[93.72%] bottom-[89.79%] left-[4.74%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector2.svg"
        /> */}
       

{/* Card*/}
<div className='flex flex-wrap ml-10'>
<div className="bg-white w-[320px] ml-8 mt-28 rounded-lg shadow-lg p-2">
      <img
        className="w-[300px] h-48 object-cover rounded-lg"
        src="https://source.unsplash.com/random"
        alt="Card"
      />
      <div className="mt-4">
        <div className='flex flex-row'>
        <h3 className="text-lg font-medium text-gray-700">BABY CARE FOUNDATION</h3>
     <Link to={"/userhome/ngoprofileuser"}><button className=" ml-10 -mt-1 bg-[#06906F] cursor:pointer text-white w-[120px] font-bold h-10 rounded-full">
          Donate Now
        </button></Link>   
        </div>
       
        <p className="mt-2 text-sm text-gray-500">
       Address: Unit no. 20/5, 3rd Floor Sainath Niwas Building, New Ayre Rd, Dombivali (E), Mumbai, Maharashtra 421201
        </p>
       
      </div>
    </div>

    <div className="bg-white w-[320px] ml-8 mt-28 rounded-lg shadow-lg p-2">
      <img
        className="w-[300px] h-48 object-cover rounded-lg"
        src="https://source.unsplash.com/random"
        alt="Card"
      />
      <div className="mt-4">
        <div className='flex flex-row'>
        <h3 className="text-lg font-medium text-gray-700">SMILE FOUNDATION</h3>
     <Link to={"/userhome/ngoprofileuser"}><button className=" ml-16 -mt-1 bg-[#06906F] cursor:pointer text-white w-[120px] font-bold h-10 rounded-full">
          Donate Now
        </button></Link>   
        </div>
       
        <p className="mt-2 text-sm text-gray-500">
     Address:   H. No. · 101, First Floor Gladdiola Above Kotak Bank, Hanuman Road, Ville Parle East, Mumbai - 400 057
        </p>
       
      </div>
    </div>

    <div className="bg-white w-[320px] ml-8 mt-28 rounded-lg shadow-lg p-2">
      <img
        className="w-[300px] h-48 object-cover rounded-lg"
        src="https://source.unsplash.com/random"
        alt="Card"
      />
      <div className="mt-4">
        <div className='flex flex-row'>
        <h3 className="text-lg font-medium text-gray-700">WE CAN WE WILL FOUNDATION</h3>
     <Link to={"/userhome/ngoprofileuser"}><button className=" ml-16 -mt-1 bg-[#06906F] cursor:pointer text-white w-[120px] font-bold h-10 rounded-full">
          Donate Now
        </button></Link>   
        </div>
       
        <p className="mt-2 text-sm text-gray-500">
        Address: Plot No /193 Ratna Ganga Bunglow, next to Oxford School, Sector 5 Charkop, Kandivali West, Mumbai, Maharashtra 400067
        </p>
       
      </div>
    </div>
<br/>
<br/>
    <div className="bg-white w-[320px] ml-8 mt-28 rounded-lg shadow-lg p-2">
      <img
        className="w-[300px] h-48 object-cover rounded-lg"
        src="https://source.unsplash.com/random"
        alt="Card"
      />
      <div className="mt-4">
        <div className='flex flex-row'>
        <h3 className="text-lg font-medium text-gray-700">NATURALIST FOUNDATION</h3>
     <Link to={"/userhome/ngoprofileuser"}><button className=" ml-16 -mt-1 bg-[#06906F] cursor:pointer text-white w-[120px] font-bold h-10 rounded-full">
          Donate Now
        </button></Link>   
        </div>
       
        <p className="mt-2 text-sm text-gray-500">
        Address: A/92 2nd floor, Shivshakti Bldg, Old Teligali, Chinchpokli, Vishnu Ganesh Pingle Marg, Lalbaug, Old Teligali, Chinchpokli, Mumbai, Maharashtra 400012
        </p>
       
      </div>
    </div>

    <div className="bg-white w-[320px] ml-8 mt-28 rounded-lg shadow-lg p-2">
      <img
        className="w-[300px] h-48 object-cover rounded-lg"
        src="https://source.unsplash.com/random"
        alt="Card"
      />
      <div className="mt-4">
        <div className='flex flex-row'>
        <h3 className="text-lg font-medium text-gray-700">NATURALIST FOUNDATION</h3>
     <Link to={"/userhome/ngoprofileuser"}><button className=" ml-16 -mt-1 bg-[#06906F] cursor:pointer text-white w-[120px] font-bold h-10 rounded-full">
          Donate Now
        </button></Link>   
        </div>
       
        <p className="mt-2 text-sm text-gray-500">
        Address: A/92 2nd floor, Shivshakti Bldg, Old Teligali, Chinchpokli, Vishnu Ganesh Pingle Marg, Lalbaug, Old Teligali, Chinchpokli, Mumbai, Maharashtra 400012
        </p>
       
      </div>
    </div>

    <div className="bg-white w-[320px] ml-8 mt-28 rounded-lg shadow-lg p-2">
      <img
        className="w-[300px] h-48 object-cover rounded-lg"
        src="https://source.unsplash.com/random"
        alt="Card"
      />
      <div className="mt-4">
        <div className='flex flex-row'>
        <h3 className="text-lg font-medium text-gray-700">SAMTA FOUNDATION</h3>
     <Link to={"/userhome/ngoprofileuser"}><button className=" ml-16 -mt-1 bg-[#06906F] cursor:pointer text-white w-[120px] font-bold h-10 rounded-full">
          Donate Now
        </button></Link>   
        </div>
       
        <p className="mt-2 text-sm text-gray-500">
        Address: 7 th Floor, Gala Impecca, Andheri - Kurla Rd, Andheri (E), Mumbai, Maharashtra 400058
        </p>
       
      </div>
    </div>

    <div className="bg-white w-[320px] ml-8 mt-28 rounded-lg shadow-lg p-2">
      <img
        className="w-[300px] h-48 object-cover rounded-lg"
        src="https://source.unsplash.com/random"
        alt="Card"
      />
      <div className="mt-4">
        <div className='flex flex-row'>
        <h3 className="text-lg font-medium text-gray-700">ABHILASHA FOUNDATION</h3>
     <Link to={"/userhome/ngoprofileuser"}><button className=" ml-16 -mt-1 bg-[#06906F] cursor:pointer text-white w-[120px] font-bold h-10 rounded-full">
          Donate Now
        </button></Link>   
        </div>
       
        <p className="mt-2 text-sm text-gray-500">
      Address:  Abhilasha Foundation NGO, Laxmi Chhaya Bungalow, Plot No. 27-27, RSC 11, Gorai 2, Borivali West, Mumbai, Maharashtra 400091
        </p>
       
      </div>
    </div>

</div>
      

        <img
          className="absolute top-[132px] left-[1071px] w-5 h-5 overflow-hidden"
          alt=""
          src="/keyboard-arrow-down.svg"
        />
      </div>
    );
  };

  export default UserHome;