import React from "react"
import { Icon } from "semantic-ui-react"
import "./NavBar.css"
const NavBar = Props => {
  return (
    <div className="nav-container">
      <Icon name="shopping cart" className="shopping-cart-icon"></Icon>
      {Props.carts.length}
    </div>
  )
}
export default NavBar
