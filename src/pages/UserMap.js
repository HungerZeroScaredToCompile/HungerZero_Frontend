import React from 'react'

const UserMap = () => {
  return (
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15085.607746368512!2d72.86232612772322!3d19.046057767890304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sngo!5e0!3m2!1sen!2sin!4v1681015164258!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              allowFullScreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              style={{ position: "absolute", top: "0", left: "0", border: "none" }}>
      </iframe>
    </div>
  )
}

export default UserMap