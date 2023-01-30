import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import Cards from "./components/Cards/Cards"
import "semantic-ui-css/semantic.min.css"
import { useState } from "react"
import { Grid, GridRow } from "semantic-ui-react"

const App = () => {
  const [fruitObjects, setFruitObjects] = useState([
    {
      name: "Apple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      price: 35,
      like: false,
      quantity: 0,
    },
    {
      name: "Banana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
      price: 12,
      like: false,
      quantity: 0,
    },
    {
      name: "Grapes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
      weight: 0.1,
      price: 45,
      like: false,
      quantity: 0,
    },
    {
      name: "Pineapple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
      price: 200,
      like: false,
      quantity: 0,
    },
    {
      name: "Apple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      price: 35,
      like: false,
      quantity: 0,
    },
    {
      name: "Banana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
      price: 12,
      like: false,
      quantity: 0,
    },
    {
      name: "Grapes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
      weight: 0.1,
      price: 45,
      like: false,
      quantity: 0,
    },
    {
      name: "Pineapple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
      price: 200,
      like: false,
      quantity: 0,
    },
    {
      name: "Apple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      price: 35,
      like: false,
      quantity: 0,
    },
    {
      name: "Banana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
      price: 12,
      like: false,
      quantity: 0,
    },
    {
      name: "Grapes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
      weight: 0.1,
      price: 45,
      like: false,
      quantity: 0,
    },
    {
      name: "Pineapple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
      price: 200,
      like: false,
      quantity: 0,
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
    let newValue = fruitObjects.map((fruit, index) =>
      index === listIndex ? { ...fruit, quantity: fruit.quantity + 1 } : { ...fruit }
    )
    setCarts([...carts, listIndex])
    //[1,4,6,8,2,9,7]
    setFruitObjects(newValue)
  }
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <NavBar carts={carts}></NavBar>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Cards
            list={fruitObjects}
            setLike={setLike}
            addItemToCart={addItemToCart}
          ></Cards>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default App
