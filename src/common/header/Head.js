import React from "react"
import { Link } from "react-router-dom"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <a href="tel:9873564374" ><label style={{cursor:"pointer"}}> +88012 3456 7894</label></a>
            <i className='fa fa-envelope'></i>
          <Link to="/contact">
            <label style={{cursor:"pointer"}}> support@ui-lib.com</label>
          </Link> 
          </div>
          <div className='right row RText'>
          <Link to="/contact">
            <label style={{cursor:"pointer"}}>Any Help?</label>
          </Link>
            <span className="for_mobile">🏳️‍🌈</span>
            <label className="for_mobile">USD</label>
            <span className="for_mobile">🏳️‍⚧️</span>
            <label className="for_mobile">EN</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
