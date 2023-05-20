import React from "react"

const Annocument = () => {

  const headStyling = {
    textAlign:"start",
    left:"10px",
    position:"relative",
    margin:"10px 10px",
  }

  const style1 = {
    width: "30%",
    height: "400px",
  }
  const style2 = {
    width: "68%",
    height: "400px",
  }
  return (
    <>
      <section className='annocument background'>
      <h2 style={headStyling}>Renewed Devices Available</h2>
        <div className='container d_flex'>
          
          <div className='img' style={style1}>

            <img src='./images/mobile1.png' width='100%' height='100%' style={{borderRadius:"50px",}} alt="Banner 1"/>
          </div>
          <div className='img' style={style2}>
            <img src='./images/mobile2.png' width='100%' height='100%' style={{borderRadius:"50px",}} alt="Banner 2"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument
