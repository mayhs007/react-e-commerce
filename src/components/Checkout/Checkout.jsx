import React from "react"
import {
  Grid,
  Segment,
  Form,
  Label,
  Item,
  Button,
  Header,
  Rating,
} from "semantic-ui-react"
class Checkout extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      mobile: "",
      emailAddress: "",
      address: "",
    }
    var sum = 0
  }
  renderContainer = () => {
    var sum = 0
    console.log(this.props.fruits)
    if (this.props.carts && this.props.carts.length > 0) {
      return this.props.carts.map(cart => {
        sum += this.props.fruits[cart].price
        return (
          <Item key={cart}>
            <Item.Image src={this.props.fruits[cart].image} />
            <Item.Content>
              <Item.Header as="a">{this.props.fruits[cart].name}</Item.Header>

              <Item.Meta>
                <Rating icon="star" defaultRating={3} maxRating={5}></Rating>
              </Item.Meta>
              <Item.Description>{"Fruits is healthy"}</Item.Description>
              <Item.Extra>
                <Button
                  size="mini"
                  onClick={() => {
                    this.props.removeFromCart(cart)
                  }}
                >
                  Delete
                </Button>
                <Header floated="right"> ₹ {this.props.fruits[cart].price}</Header>
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
  render() {
    return (
      <Grid.Row centered>
        <Grid.Column width={14}>
          <Segment as={Grid}>
            <Grid.Row>
              <Grid.Column width={4}>
                <Form>
                  <Form.Input
                    label="Name"
                    icon="user outline"
                    iconPosition="left"
                    value={this.state.name}
                    onChange={event => {
                      this.setState({ ...this.state, name: event.target.value })
                    }}
                  ></Form.Input>
                  <Form.Input
                    label="Mobile"
                    icon={"mobile alternate  "}
                    iconPosition="left"
                    value={this.state.mobile}
                    onChange={event => {
                      this.setState({ ...this.state, mobile: event.target.value })
                    }}
                  ></Form.Input>
                  <Form.Input
                    label="Email"
                    icon="mail outline"
                    iconPosition="left"
                    value={this.state.email}
                    onChange={event => {
                      this.setState({ ...this.state, email: event.target.value })
                    }}
                  ></Form.Input>
                  <Form.TextArea
                    label="Address"
                    icon="address card outline"
                    iconPosition="left"
                    onChange={event => {
                      this.setState({
                        ...this.setState({
                          ...this.state,
                          address: event.target.value,
                        }),
                      })
                    }}
                  ></Form.TextArea>
                </Form>
              </Grid.Column>
              <Grid.Column width={8} floated="right">
                <Item.Group divided>{this.renderContainer()}</Item.Group>
              </Grid.Column>
            </Grid.Row>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }
}
export default Checkout
