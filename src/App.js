import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import TopCate from "./components/top/TopCate"
import Wrapper from "./components/wrapper/Wrapper"
import AboutUs from "./components/About/AboutUs"
import Conatct from "./components/Contact/Conatct"

function App() {
  

  //1 : Data from database
  const { productItems } = Data
  const { shopItems } = Sdata

  // 2 :
  const [CartItem, setCartItem] = useState([])

  // 3 :
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
   
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } 
    else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  //: 4
  const decreaseQty = (product) => {
   
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }


  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>

          <Route path='/pages' >
            <TopCate/>
            <Wrapper/>
          </Route>
          <Route path='/user' >
            <AboutUs/>
          </Route>
          <Route path='/contact' >
            <Conatct/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
