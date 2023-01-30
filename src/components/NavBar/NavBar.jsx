import React from "react"
import { Icon, Label, Menu } from "semantic-ui-react"
import "./NavBar.css"
const NavBar = Props => {
  return (
    <Menu fixed="top" size={"tiny"}>
      <Menu.Menu position="right">
        <Menu.Item>
          <Icon name="shopping cart" className="shopping-cart-icon" size={"large"}></Icon>
          <Label circular>
            <span style={{ fontSize: "10px" }}>{Props.carts.length}</span>
          </Label>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
export default NavBar
