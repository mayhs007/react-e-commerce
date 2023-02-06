import Cookies from "js-cookie"
import React from "react"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Icon, Label, Menu, Radio } from "semantic-ui-react"
import ThemeContext from "../../context/ThemeContext"
import "./NavBar.css"
const NavBar = Props => {
  const isDarkTheme = useContext(ThemeContext)
  const navigate = useNavigate()
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
          <Icon name="sun" size="large" inverted={isDarkTheme}></Icon>
          <Radio toggle onClick={Props.toggleDarkTheme}></Radio>
          <Icon name="moon" size="large" inverted={isDarkTheme}></Icon>
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            Cookies.set("isLoggedIn", false, { expires: 7 })
            navigate("/login")
          }}
        >
          <Icon name="sign-out" size="large" inverted={isDarkTheme}></Icon>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
export default NavBar
