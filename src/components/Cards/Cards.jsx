import { Icon, Card, Image, Button } from "semantic-ui-react"

import "./Cards.css"
const Cards = Props => {
  const renderFruits = () => {
    let renderedFruits = Props.list.map((value, index) => {
      return (
        <Card>
          <Image src={value.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{value.name}</Card.Header>
            <Card.Description>{value.price}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui one buttons">
              <Button
                basic={value.quantity === 0}
                color="green"
                onClick={() => {
                  if (value.quantity === 0) Props.addItemToCart(index)
                }}
              >
                {value.quantity > 0 ? "Added" : "Add to cart"}
              </Button>
            </div>
          </Card.Content>
        </Card>
      )
    })
    return <Card.Group itemsPerRow={"4"}>{renderedFruits}</Card.Group>
  }
  return <>{renderFruits()}</>
}

export default Cards
