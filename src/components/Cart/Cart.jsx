import React from "react"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import {
  Grid,
  Icon,
  Item,
  Segment,
  Rating,
  Header,
  ItemExtra,
  Button,
} from "semantic-ui-react"

const Cart = ({ carts, fruits, removeFromCart }) => {
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()
  var sum = 0
  const renderContainer = () => {
    if (carts && carts.length > 0) {
      return carts.map(cart => {
        sum += fruits[cart].price
        return (
          <Item key={cart}>
            <Item.Image src={fruits[cart].image} />
            <Item.Content>
              <Item.Header as="a">{fruits[cart].name}</Item.Header>

              <Item.Meta>
                <Rating icon="star" defaultRating={3} maxRating={5}></Rating>
              </Item.Meta>
              <Item.Description>{"Fruits is healthy"}</Item.Description>
              <Item.Extra>
                <Button
                  size="mini"
                  onClick={() => {
                    removeFromCart(cart)
                  }}
                >
                  Delete
                </Button>
                <Header floated="right"> ₹ {fruits[cart].price}</Header>
              </Item.Extra>
            </Item.Content>
          </Item>
        )
      })
    } else {
      return (
        <Header as="h4" textAlign="center">
          No item added in the cart
        </Header>
      )
    }
  }
  const renderTotal = () => {
    if (carts && carts.length > 0) {
      // var sum = 0
      // carts.map(cart => (sum = sum + fruits[cart].price))
      return (
        <Item>
          <ItemExtra>
            <Header>TOTAL</Header>
            <Header floated="right">₹ {sum}</Header>
          </ItemExtra>
        </Item>
      )
    }
  }
  return (
    <Grid.Row centered>
      <Grid.Column width={14}>
        <Segment>
          <Item.Group divided>
            {renderContainer()}
            {renderTotal()}
            <Item>
              <Item.Extra>
                <Button
                  floated="right"
                  onClick={() => {
                    navigate("/check-out")
                  }}
                >
                  Checkout
                </Button>
              </Item.Extra>
            </Item>
          </Item.Group>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  )
}
export default Cart
