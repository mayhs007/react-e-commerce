import "./Rendering.css"
const Rendering = () => {
  let cars = ["Saab", "Volvo", "Benz"]
  let fruits = ["Banana", "Orange", "Apple", "Apple", "Mango", "Apple"]
  let vegetables = ["Carrot", "Raddish", "Cabbage", "Onion"]
  let seeds = ["pumpkin", "watermelon", "sunflowers", "flax"]

  let fruitObjects = [
    {
      name: "Apple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      price: 35,
    },
    {
      name: "Banana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
      price: 12,
    },
    {
      name: "Grapes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
      weight: 0.1,
      price: 45,
    },
    {
      name: "Pineapple",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
      price: 200,
    },
  ]
  const renderList = () => {
    let renderedFruits = fruits.map((value, index) => {
      return <li key={index}>{value}</li>
    })
    return <ul>{renderedFruits}</ul>
  }
  const renderFruits = () => {
    let renderedFruits = fruitObjects.map((value, index) => {
      return (
        <div className="card-container">
          <div className="image-container">
            <img src={value.image} alt={"image-of-" + value.name}></img>
          </div>
          <div className="bottom-container">
            <div className="name-container">{value.name}</div>
            <div className="price-container">{value.price}</div>
          </div>
        </div>
      )
    })
    return <div className="cards-container">{renderedFruits}</div>
  }
  return (
    <div>
      {/* <div>{renderList()}</div> */}
      <div>{renderFruits()}</div>
    </div>
  )
}

export default Rendering
