import React from "react"

import { useParams } from "react-router-dom"
import {
  Grid,
  Image,
  Segment,
  Header,
  Rating,
  Label,
  Button,
  Loader,
} from "semantic-ui-react"
class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fruit: {},
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log(props)
    return { fruit: props.fruits[parseInt(props.params.fruitId)] }
  }

  render() {
    if (this.state.fruit && this.state.fruit.hasOwnProperty("image")) {
      return (
        <Grid.Row centered>
          <Grid.Column width={10}>
            <Segment as={Grid}>
              <Grid.Row>
                <Grid.Column width={6}>
                  <Image src={this.state.fruit.image}></Image>
                </Grid.Column>
                <Grid.Column as={Grid} width="10">
                  <Grid.Row>
                    <Grid.Column width="16">
                      <Header as="h1">{this.state.fruit.name}</Header>
                      <Rating defaultRating={5} maxRating={5} icon="star"></Rating>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Label> ₹ {this.state.fruit.price}</Label>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Button
                        positive
                        onClick={() => {
                          if (this.state.fruit.quantity === 0)
                            this.props.addItemToCart(parseInt(this.props.params.fruitId))
                        }}
                      >
                        {this.props.carts.includes(parseInt(this.props.params.fruitId))
                          ? "Added"
                          : "Add to Cart"}
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid.Column>
              </Grid.Row>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      )
    } else {
      return (
        <Grid.Row centered>
          <Grid.Column width={16} textAlign="center">
            <Loader active inline>
              Loading...
            </Loader>
          </Grid.Column>
        </Grid.Row>
      )
    }
  }
}
export default props => <Detail {...props} params={useParams()}></Detail>
