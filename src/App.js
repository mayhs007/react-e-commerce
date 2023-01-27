import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import Cards from "./components/Cards/Cards"
import "semantic-ui-css/semantic.min.css"
import { useState } from "react"

const App = () => {
  const [fruitObjects, setFruitObjects] = useState([
    {
      name: "Apple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      price: 35,
      like: false,
    },
    {
      name: "Banana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
      price: 12,
      like: false,
    },
    {
      name: "Grapes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
      weight: 0.1,
      price: 45,
      like: false,
    },
    {
      name: "Pineapple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
      price: 200,
      like: false,
    },
    {
      name: "Apple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      price: 35,
      like: false,
    },
    {
      name: "Banana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
      price: 12,
      like: false,
    },
    {
      name: "Grapes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
      weight: 0.1,
      price: 45,
      like: false,
    },
    {
      name: "Pineapple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
      price: 200,
      like: false,
    },
    {
      name: "Apple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      price: 35,
      like: false,
    },
    {
      name: "Banana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
      price: 12,
      like: false,
    },
    {
      name: "Grapes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
      weight: 0.1,
      price: 45,
      like: false,
    },
    {
      name: "Pineapple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
      price: 200,
      like: false,
    },
  ])
  const [carts, setCarts] = useState([])
  const setLike = likedIndex => {
    let updatedValue = fruitObjects.map((fruit, index) =>
      likedIndex === index ? { ...fruit, like: !fruit.like } : { ...fruit }
    )
    setFruitObjects(updatedValue)
  }
  const addItemToCart = listIndex => {
    let newValue = fruitObjects.filter((fruit, index) => index === listIndex)
    setCarts([...carts, ...newValue])
  }
  return (
    <div className="app-container">
      <NavBar carts={carts}></NavBar>
      <Cards list={fruitObjects} setLike={setLike} addItemToCart={addItemToCart}></Cards>
    </div>
  )
}
export default App
