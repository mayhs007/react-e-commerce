import React from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { Icon, Label, Menu, Radio } from "semantic-ui-react"
import ThemeContext from "../../context/ThemeContext"
import "./NavBar.css"
const NavBar = Props => {
  const isDarkTheme = useContext(ThemeContext)
  return (
    <Menu fixed="top" size={"tiny"} inverted={isDarkTheme}>
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/shop">
          <Icon name={"home"} size="large" inverted={isDarkTheme}></Icon>
        </Menu.Item>
        <Menu.Item as={Link} to="/cart">
          <Icon
            name="shopping cart"
            className="shopping-cart-icon"
            size={"large"}
            inverted={isDarkTheme}
          ></Icon>
          <Label circular>
            <span style={{ fontSize: "10px" }}>{Props.carts.length}</span>
          </Label>
        </Menu.Item>
        <Menu.Item>
          <Icon name="sun" inverted={isDarkTheme}></Icon>
          <Radio toggle onClick={Props.toggleDarkTheme}></Radio>
          <Icon name="moon" inverted={isDarkTheme}></Icon>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
export default NavBar
