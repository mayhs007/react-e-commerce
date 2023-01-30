import { useState } from "react"
import { Button, Grid, Header, Input, Label, Segment, Icon } from "semantic-ui-react"

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={6} textAlign="center">
          <Header>LOGIN</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={6}>
          <Segment as={Grid}>
            <Grid.Row>
              <Grid.Column>
                <Input
                  fluid
                  type="text"
                  value={phoneNumber}
                  iconPosition="left"
                  icon={"mobile alternate"}
                  placeholder="Enter your number"
                  onChange={event => {
                    setPhoneNumber(event.target.value)
                  }}
                ></Input>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Input
                  fluid
                  type={showPassword ? "text" : "password"}
                  value={password}
                  icon={"key"}
                  iconPosition="left"
                  label={
                    <Label
                      onClick={() => {
                        setShowPassword(!showPassword)
                      }}
                    >
                      <Icon name={showPassword ? "eye" : "eye slash"}></Icon>
                    </Label>
                  }
                  labelPosition="right"
                  placeholder="Enter your password"
                  onChange={event => {
                    setPassword(event.target.value)
                  }}
                ></Input>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column width={"4"}>
                <Button fluid>Login</Button>
              </Grid.Column>
            </Grid.Row>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default Login
