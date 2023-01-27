import { useState } from "react"
import { Icon } from "semantic-ui-react"

import "./Cards.css"
const Cards = () => {
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
  const setLike = likedIndex => {
    let updatedValue = fruitObjects.map((fruit, index) =>
      likedIndex === index ? { ...fruit, like: !fruit.like } : { ...fruit }
    )
    setFruitObjects(updatedValue)
  }
  const renderFruits = () => {
    let renderedFruits = fruitObjects.map((value, index) => {
      return (
        <div className="card-container">
          <div className="image-container">
            <div className="icon-container" onClick={() => setLike(index)}>
              <Icon
                name={value.like ? "heart" : "heart outline"}
                color={value.like ? "red" : ""}
              ></Icon>
            </div>
            <img src={value.image} alt={"image-of-" + value.name}></img>
          </div>
          <div className="detail-container">
            <div className="name-container">{value.name}</div>
            <div className="price-container">{value.price}</div>
          </div>
          <div className="button-container"></div>
        </div>
      )
    })
    return <div className="cards-container">{renderedFruits}</div>
  }
  return <>{renderFruits()}</>
}

export default Cards
