import React from "react"
import Dcard from "./Dcard"

const Discount = () => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt="gift-img"/>
              <h2>Heavy Discounts</h2>
            </div>
           
          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount
