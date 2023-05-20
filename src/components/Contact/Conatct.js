import React from 'react'
import './Contact.css'

function Conatct() {

  const labelH = {
    textAlign:" left",
    left: "20px",
    padding: "4px 7px",
    display: "inline-block",
    color: "gray",
    fontWeight: "700",
    fontSize: "large"
  }

   
  return (
    <>
    <h2 style={{textAlign:"center",fontWeight:"5rem",fontWeight:"bolder",lineHeight:"5rem"}}>
        Conatct with us
    </h2>
    <p style={{textAlign:"center",fontWeight:"2rem",fontWeight:"bold",lineHeight:"5rem",color:"grey"}}>
        With Signing-up here, We will contact you within 24hrs 👍.
    </p>



<form action="https://formspree.io/f/xgeqgrkd" method="POST" style={{boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",padding:"10px 35px",textAlign:"center",overflow:"hidden"}}>
  
  <div className='Formargin'>
  <label style={labelH}>Your email:</label>
  <input type="email" name="email" placeholder='Enter Your Right Email Here' className='inputH' required/>
  </div>

  <div className='Formargin'>
  <label style={labelH}>Your Name</label>
  <input type="text" name="name" placeholder='Enter Your Name Here' className='inputH' required/>
  </div>

  <div className='Formargin'>
  <label style={labelH}>Your Message:</label>
  <textarea name="message"  className='inputH'  required> </textarea>
  </div>

  <div className='Formargin'>
  <label style={labelH}>Any Inportant or Urgent Request (optional)</label>
  <input type="text" name="name" placeholder='Enter Here ' className='inputH'/>
  </div>
 
  <button type="submit" className='buttonContact'>Send</button>

</form>
    </>
  )
}

export default Conatct