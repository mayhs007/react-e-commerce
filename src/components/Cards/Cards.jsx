import { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import { Icon, Card, Image, Button, Placeholder, Loader } from "semantic-ui-react"
import ThemeContext from "../../context/ThemeContext"

import "./Cards.css"
const Cards = Props => {
  const [isLoading, setLoading] = useState(false)
  const isDarkTheme = useContext(ThemeContext)
  useEffect(() => {
    if (Props.list.length > 0) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [Props.list])

  const renderFruits = () => {
    let renderedFruits = []
    if (Props.list && Props.list.length > 0) {
      renderedFruits = Props.list.map((value, index) => {
        return (
          <Card color={isDarkTheme ? "black" : "default"} key={index}>
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
                  loading={isLoading}
                >
                  {value.quantity > 0 ? "Added" : "Add to cart"}
                </Button>
              </div>
            </Card.Content>
          </Card>
        )
      })
    } else {
      return (
        <Loader active inline>
          Loading...
        </Loader>
      )
    }

    return <Card.Group itemsPerRow={"5"}>{renderedFruits}</Card.Group>
  }
  return <>{renderFruits()}</>
}

export default Cards
