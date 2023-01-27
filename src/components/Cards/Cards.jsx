import { Icon } from "semantic-ui-react"

import "./Cards.css"
const Cards = Props => {
  const renderFruits = () => {
    let renderedFruits = Props.list.map((value, index) => {
      return (
        <div className="card-container">
          <div className="image-container">
            <div className="icon-container" onClick={() => Props.setLike(index)}>
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
          <div className="button-container">
            <button
              onClick={() => {
                Props.addItemToCart(index)
              }}
              className="button-primary"
            >
              <Icon name="shopping cart" color="black"></Icon>
            </button>
          </div>
        </div>
      )
    })
    return <div className="cards-container">{renderedFruits}</div>
  }
  return <>{renderFruits()}</>
}

export default Cards
