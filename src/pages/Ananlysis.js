import { TextField } from "@mui/material";
import { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";



const Analysis = () => {
    const [imageData, setImageData] = useState(null);
   


    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        setImageData(reader.result);
      };
  
      reader.readAsDataURL(file);
    };

   

  return (
    <div className="relative bg-whitesmoke-100 w-full h-[2276px] overflow-hidden text-left text-5xl text-dimgray font-poppins">
     

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
          <div className="absolute top-[44px] left-[994px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
            Maps
          </div>
          <div className="absolute top-[44px] left-[1096px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
            Feedback
          </div>
          <div className="absolute top-[44px] left-[1210px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
            Contact Us
          </div>
          <img
            className="absolute top-[30px] left-[1415px] w-[52px] h-[52px] object-cover"
            alt=""
            src="/ngoicon.svg"
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
    
        <div className="absolute top-[200px] left-[112px] rounded-lg bg-gold-100 w-[687px] h-[53px] overflow-hidden text-center text-lg text-gray-200 font-dm-sans">
  <label htmlFor="uploadImage" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-[24px] font-medium cursor-pointer">
    Upload Image
  </label>
  <input
    id="uploadImage"
    type="file"
    className="absolute opacity-0"
    onChange={handleImageUpload}
  />
</div>
{imageData && (
  <img
    className="absolute top-[300px] left-[112px] max-w-full overflow-hidden max-h-full"
    alt=""
    src={imageData}
  />
)}

<Link to={"/nutrition"}><button className="bg-seagreen-100 rounded-lg w-50 mt-[500px] h-10 ml-24" >Show Nutrient Analysis</button>
</Link>

    </div>
  );
};

export default Analysis;
