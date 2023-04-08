import React, {useContext, useState} from 'react'
import { LoginContext  } from '../Contexts/LoginContext'
import { useNavigate, Link } from 'react-router-dom'
import logo from "../images/logo.png"
import bell from "../images/bell.png"
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
       <div className='flex flex-row'>
       <img
          className="absolute top-[21px] left-[28px] w-20 h-[68.49px] object-cover"
          alt=""
          src={logo}
        />
        <div className="absolute top-[40px] left-[115px] text-5xl font-kumbh-sans text-gray-200 flex items-center w-[234px]">
          HungerZero
        </div>

        <div className='ml-[1000px] mt-[10px] flex flex-row justify-between'>
            <p className='m-2'>
                Home
            </p>
            <p className='m-2'>
                Donation
            </p>
            <p className='m-2'>
               Community
            </p>
            <p className='m-2'>
                Contact Us
            </p>
            <p className='m-2'>
                Contact Us
            </p>
            {/*bell icon */}
            <img className='h-5 w-5 m-2' src={bell}>

            </img>

            {/*profile icon */}
            <img src={ellipse}>

            </img>
       </div>

        </div>


        <div className="absolute top-[315px] left-[1127px] rounded-3xs bg-gold-100 w-[356px] h-[1117px]" />
        <div className="absolute top-[1342px] left-[1225px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Lorem ipsum
        </div>
        <div className="absolute top-[1255px] left-[1225px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Lorem ipsum
        </div>
        <div className="absolute top-[961px] left-[1225px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Lorem ipsum
        </div>
        <div className="absolute top-[858px] left-[1225px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Lorem ipsum
        </div>
        <div className="absolute top-[753px] left-[1225px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Lorem ipsum
        </div>
        <div className="absolute top-[1061px] left-[1177px]">6</div>
        <div className="absolute top-[661px] left-[1177px]">2</div>
        <div className="absolute top-[961px] left-[1181px]">2</div>
        <div className="absolute top-[499px] left-[1264px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Lorem ipsum
        </div>
        <img
          className="absolute top-[499px] left-[1388px] w-[52px] h-[58px] object-cover"
          alt=""
          src="/ellipse3@2x.png"
        />
        <img
          className="absolute top-[1339.47px] left-[1161.38px] rounded-sm w-[50px] h-[50px]"
          alt=""
          src="/star-9.svg"
        />
        <img
          className="absolute top-[1250.47px] left-[1161.38px] rounded-sm w-[50px] h-[50px]"
          alt=""
          src="/star-9.svg"
        />
        <img
          className="absolute top-[1150.47px] left-[1161.38px] rounded-sm w-[50px] h-[50px]"
          alt=""
          src="/star-9.svg"
        />
        <img
          className="absolute top-[1050.47px] left-[1161.38px] rounded-sm w-[50px] h-[50px]"
          alt=""
          src="/star-9.svg"
        />
        <img
          className="absolute top-[850.47px] left-[1161.38px] rounded-sm w-[50px] h-[50px]"
          alt=""
          src="/star-9.svg"
        />
        <img
          className="absolute top-[950.47px] left-[1161.38px] rounded-sm w-[50px] h-[50px]"
          alt=""
          src="/star-9.svg"
        />
        <img
          className="absolute top-[750.47px] left-[1161.38px] rounded-sm w-[50px] h-[50px]"
          alt=""
          src="/star-9.svg"
        />
        {/* <div className="absolute top-[133px] left-[119px] text-mini text-gray-100 flex items-center w-[278px] h-[19px]">
          Search for NGOs
        </div> */}

{/* Search bar */}
<div className="w-[600px] mt-[70px]  ml-[48px] p-1 pr-0 flex items-center">
      <input
        className="appearance-none rounded-lg bg-white border-none w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Search"
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

   

        <b className="absolute top-[170px] left-[46px] text-[50px] flex font-playfair-display items-center w-[508px] h-[89px]">
          Top NGOs
        </b>
        <br/>
        <br/>
        <img
          className="absolute top-[499px] left-[1181px] w-[52px] h-[58px] object-cover"
          alt=""
          src="/ellipse4@2x.png"
        />
        <img
          className="absolute top-[432px] left-[1293px] w-[52px] h-[58px] object-cover"
          alt=""
          src="/ellipse5@2x.png"
        />
        <div className="absolute top-[336px] left-[1206px] text-[32px] font-semibold text-darkslateblue-100 flex items-center w-[277px] h-11">
          Leaderboard
        </div>
        <div className="absolute top-[562px] left-[1162px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Lorem ipsum
        </div>
        <div className="absolute top-[562px] left-[1368px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Lorem ipsum
        </div>
        <div className="absolute top-[658px] left-[1225px] text-base text-darkslateblue-100 flex items-center w-[143px]">
          Lorem ipsum
        </div>
        <img
          className="absolute top-[650.47px] left-[1161.38px] rounded-sm w-[50px] h-[50px]"
          alt=""
          src="/star-9.svg"
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
        <img
          className="absolute h-[1.89%] w-[1.64%] top-[3.17%] right-[9.34%] bottom-[94.95%] left-[89.01%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
        />
        <img
          className="absolute h-[1.52%] w-[1.55%] top-[8.69%] right-[93.72%] bottom-[89.79%] left-[4.74%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector2.svg"
        />
       

{/* Card*/}
        <div className="bg-white w-[300px] ml-8 mt-28 rounded-lg shadow-lg p-2">
      <img
        className="w-[300px] h-48 object-cover rounded-lg"
        src="https://source.unsplash.com/random"
        alt="Card"
      />
      <div className="mt-4">
        <div className='flex flex-row'>
        <h3 className="text-lg font-medium text-gray-700">Card Title</h3>
        <button className=" ml-16 bg-[#06906F] cursor:pointer text-white font-bold py-2 px-2 rounded-full">
          Donate Now
        </button>
        </div>
       
        <p className="mt-2 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis mauris velit, in faucibus arcu tincidunt a. Vestibulum eu tellus quam.
        </p>
       
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

  export default UserHome;

