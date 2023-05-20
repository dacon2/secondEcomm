import React from 'react'

function AboutUs() {
  const main = {
    display: "block",
    justifyContent: "center",
    textAlign: "center",
    lineHeight: "1rem",
    padding: "10px 5px",
    fontFamily: "sans-serif",
    borderRadius: "0 0 20px 20px",
  }
  const headT = {
    textAlign: "center",
    fontWeight: "10rem",
    fonSize: "5rem",
    fontWeight: "800",
    color: "blue",
    lineHeight: "5rem",
    textShadow: "4px 1px 5px 5px blue",
  }
  const para1 = {
    textAlign: "center",
    fontWeight: "500",
    fonSize: "2rem",
    color: "gray",
    lineHeight: "2rem",
  }
  const box = {
    boxShadow: " rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
    borderRadius: "0 0 25px 25px",

  }
  const specialWord = {
    fontWeight: "900",
    fontSize: "3rem",
    color: "#ff2020",

  }
  const dummy = {
    textAlign: "center",
    fontWeight: "500",
    fonSize: "1.75rem",
    color: "black",
    lineHeight: "1.5rem",
    marginTop: "30px",
  }

  const dummy1 = {
    background: "#4b93ff",
    color: "#fff",
    fontWeight: "600",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    lineHeight: "3rem",
    borderRadius: "30px",
    marginTop: "20px",
  }
  const formap = {
    width: "90%",
    height: "30rem",
    border: "0",
  }
  return (
    <>

      <div style={main}>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.336549697401!2d77.30518449306408!3d28.409100080636065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cddcf2608c1d1%3A0x488bf789dabe469f!2sGandhi%20Colony%2C%20New%20Industrial%20Twp%2C%20Faridabad%2C%20Haryana%20121001!5e0!3m2!1sen!2sin!4v1670759035737!5m2!1sen!2sin"
          style={formap}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <h1 style={headT}>We are for your Service 😀👌</h1>
        <div style={box}>
          <p style={para1}>We have more than <span style={specialWord}>50+</span> years of experience with a huge Customer satifaction. <br />
            Our Returning returning rate also 70%. Now we are provide you with a better quality & efficiency.
          </p>
          <p style={dummy}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, tempora nesciunt. Laudantium aliquam numquam id dolore ducimus, aperiam ratione odit rerum, dignissimos beatae hic, sed error nemo eum maiores saepe!.
          </p>
          <p style={dummy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi iure unde hic repellendus labore dolore ab sunt tenetur nam officiis quas cumque optio, fuga minima iusto architecto, officia eius.</p>

          <p style={dummy1}>
            Doperoat is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Doperoat strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work. Customer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by Doperoat, AWS, Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire TV, Doperoat Echo, Alexa, Just Walk Out technology, Doperoat Studios, and The Climate Pledge are some of the things pioneered by Doperoat.</p>
        </div>



      </div>

    </>
  )
}

export default AboutUs
