import Cookies from "js-cookie"
import { useEffect } from "react"
import { useReducer } from "react"
import { useNavigate } from "react-router-dom"

import {
  Button,
  Grid,
  Header,
  Label,
  Segment,
  Icon,
  Form,
  Message,
  Input,
  Loader,
} from "semantic-ui-react"

const initalState = {
  phoneNumber: "7010534782",
  isPhoneNumberError: false,

  password: "123",
  isPasswordError: false,

  showPassword: false,
}
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PHONE_NUMBER": {
      state = {
        ...state,
        phoneNumber: action.value,
      }
      return state
    }
    case "SET_PASSWORD": {
      state = {
        ...state,
        password: action.value,
      }
      return state
    }
    case "SET_SHOW_PASSWORD": {
      state = {
        ...state,
        showPassword: action.value,
      }
      return state
    }
    case "SET_PHONE_ERROR": {
      state = {
        ...state,
        isPhoneNumberError: action.value,
      }
      return state
    }
    case "SET_PASSWORD_ERROR": {
      state = {
        ...state,
        isPasswordError: action.value,
      }
      return state
    }
    default:
      return state
  }
}
const Login = () => {
  let defaultPassword = "123"
  const [state, dispatch] = useReducer(reducer, initalState)
  const navigate = useNavigate()
  const isValidPhoneNumber = phoneNumber => {
    let pattern = /^[0-9]{10}$/gm
    let regex = new RegExp(pattern)
    if (regex.test(phoneNumber)) {
      return true
    }
    return false
  }
  const isValidPassword = password => {
    if (password === defaultPassword) {
      return true
    } else {
      return false
    }
  }
  const authenticateUser = () => {
    let isPhoneNumberError = false
    let isPasswordError = false
    if (isValidPhoneNumber(state.phoneNumber)) {
      isPhoneNumberError = false
      dispatch({ type: "SET_PHONE_ERROR", value: false })
    } else {
      isPhoneNumberError = true
      dispatch({ type: "SET_PHONE_ERROR", value: true })
    }
    if (isValidPassword(state.password)) {
      isPasswordError = false
      dispatch({ type: "SET_PASSWORD_ERROR", value: false })
    } else {
      dispatch({ type: "SET_PASSWORD_ERROR", value: true })
      isPasswordError = true
    }
    if (isPasswordError === false && isPhoneNumberError === false) {
      if (defaultPassword === state.password) {
        navigate("/shop")
        Cookies.set("isLoggedIn", true, { expires: 7 })
      }
    }
  }
  if (Cookies.get("isLoggedIn")) {
    navigate("/shop")
    return (
      <Grid style={{ height: "99vh" }}>
        <Grid.Row centered>
          <Grid.Column width={16} textAlign="center" verticalAlign="middle">
            <Loader active inline>
              Loading
            </Loader>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={6} textAlign="center">
          <Header>LOGIN</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={6}>
          <Form>
            <Segment as={Grid}>
              <Grid.Row>
                <Grid.Column>
                  <Form.Input
                    fluid
                    type="text"
                    value={state.phoneNumber}
                    iconPosition="left"
                    icon={"mobile alternate"}
                    placeholder="Enter your number"
                    onChange={event => {
                      dispatch({ type: "SET_PHONE_NUMBER", value: event.target.value })
                    }}
                    required
                    error={
                      state.isPhoneNumberError
                        ? {
                            content: "Please enter valid phone number",
                            pointing: "above",
                          }
                        : false
                    }
                  ></Form.Input>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Input
                    fluid
                    type={state.showPassword ? "text" : "password"}
                    value={state.password}
                    icon={"key"}
                    iconPosition="left"
                    label={
                      <Label
                        onClick={() => {
                          dispatch({
                            type: "SET_SHOW_PASSWORD",
                            value: !state.showPassword,
                          })
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <Icon name={state.showPassword ? "eye" : "eye slash"}></Icon>
                      </Label>
                    }
                    labelPosition="right"
                    placeholder="Enter your password"
                    onChange={event => {
                      dispatch({
                        type: "SET_PASSWORD",
                        value: event.target.value,
                      })
                    }}
                    required
                  ></Input>
                </Grid.Column>
              </Grid.Row>
              {state.isPasswordError ? (
                <Grid.Row>
                  <Grid.Column>
                    <Message negative content="Please enter valid password" />
                  </Grid.Column>
                </Grid.Row>
              ) : (
                ""
              )}
              <Grid.Row centered>
                <Grid.Column width={"4"}>
                  <Button fluid onClick={authenticateUser}>
                    Login
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default Login
