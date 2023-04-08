import { TextField } from "@mui/material";
import React,{ useState } from 'react';



const ContactUs = () => {

 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailBody = `${message}`;
    const mailToLink = `mailto:hungerzero123@gmail.com?subject=New message from ${name}&body=${emailBody}`;

    window.open(mailToLink, '_blank');
  };
  const openWhatsapp = () => {
    window.open("https://wa.me/9372022651", "_blank");
  }
  return (
    <div className="relative bg-whitesmoke-100 w-full h-[950px] overflow-hidden text-left text-45xl text-white font-poppins">
      <div className="absolute top-[249px] left-[77px] rounded-3xs bg-white w-[1361px] h-[650px]" />
      <img
        className="absolute top-[737px] left-[-126px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/ellipse@2x.png"
      />
      <b className="absolute top-[135px] left-[80px] flex font-playfair-display text-seagreen-100 items-center w-[508px] h-[89px]" style={{fontSize: "50px"}}>
        Contact Us
      </b>
      <div className="absolute top-[1193px] left-[146px] text-xl font-medium flex items-center w-[324px] h-1.5">
        Calender
      </div>
      <form onSubmit={handleSubmit}>
      <TextField
        className="[border:none] bg-[transparent] absolute top-[315px] left-[129px]"
        sx={{ width: 417 }}
        color="success"
        variant="outlined"
        type="text"
        name="Your Name"
        label="Your Name"
        size="medium"
        margin="none"
        value={name} onChange={(e) => setName(e.target.value)}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[415px] left-[-290px]"
        sx={{ width: 417 }}
        color="success"
        variant="outlined"
        type="email"
        label="Email"
        size="medium"
        margin="none"
        value={email} onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[515px] left-[-710px]"
        sx={{ width: 417 }}
        color="success"
        variant="outlined"
        type="tel"
        label="Contact Number"
        size="medium"
        margin="none"
        value={phone} onChange={(e) => setPhone(e.target.value)} 
      />
      <TextField
        className="absolute top-[557px] left-[125px]"
        sx={{ width: 417 }}
        color="success"
        variant="outlined"
        multiline
        rows={5}
        label="Send your message"
        margin="none"
        value={message} onChange={(e) => setMessage(e.target.value)}
      />
      <button className="absolute top-[793px] left-[129px] z-10 rounded-3xs bg-seagreen-100  w-[417px] h-[52px] text-base flex font-kumbh-sans text-whitesmoke-100 font-bold text-center items-center justify-center w-[229px] hover:cursor-pointer" >
        Submit
      </button>
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
        <div className="absolute top-[44px] left-[984px] text-mini font-poppins text-black text-left flex items-center w-[110px]">
          Donation
        </div>
        <div className="absolute top-[44px] left-[1096px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px]">
          Community
        </div>
        <div className="absolute top-[44px] left-[1210px] text-mini font-poppins text-gray-200 text-left flex items-center w-[110px] text-seagreen-100 font-bold">
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
      <div style={{ position: "relative" }}>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4455553666457!2d72.83466427487511!3d19.131964382084206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6266473b28f%3A0xfeceacda6d0ba826!2sTextile%20Technician%20Co-operative%20Housing%20Society!5e0!3m2!1sen!2sin!4v1680939358348!5m2!1sen!2sin"
        width="750"
        height="530"
        style={{
            position: "absolute",
            top: "110px",
            left: "620px",
            zIndex: 1,
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>



</div>
<div style={{ position: 'relative' }}>
      <button
        onClick={openWhatsapp}
        style={{
          position: 'absolute',
          top: '670px',
          left: '1430px',
          borderRadius: '50%',
          backgroundColor: 'transparent'
        }}
      >
        <img src="/whatsapp.png" alt="whatsapp" style={{ width: 60, height: 60,  borderRadius: '50%' }} />
      </button>
    </div>

    </div>
  );
};

export default ContactUs;
