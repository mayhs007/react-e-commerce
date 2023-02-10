import Cookies from "js-cookie"
import { useEffect, useMemo } from "react"
import { useState } from "react"
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
  GridColumn,
} from "semantic-ui-react"

const initalState = {
  email: "eve.holt@reqres.in",
  isEmailError: false,

  password: "123",
  isPasswordError: false,

  showPassword: false,
  error: "",
}
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL": {
      state = {
        ...state,
        email: action.value,
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
    case "SET_EMAIL_ERROR": {
      state = {
        ...state,
        isEmailError: action.value,
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
    case "SET_ERROR": {
      state = {
        ...state,
        error: action.value,
      }
      return state
    }
    default:
      return state
  }
}
const Login = () => {
  const API_URL =
    process.env.REACT_APP_API_PROTOCOL +
    process.env.REACT_APP_API_HOST +
    process.env.REACT_APP_API_ENDPOINT
  let defaultPassword = "123"
  const [state, dispatch] = useReducer(reducer, initalState)
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const expensiveCalculation = num => {
    for (let i = 0; i < 100000000; i++) {
      num += 1
    }
    return num
  }
  // const calculation = expensiveCalculation(count)
  const calculation = useMemo(() => expensiveCalculation(count), [count])
  console.log(calculation)

  const isValidemail = email => {
    let pattern = /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+?\.[a-zA-z]{2,3}/gm
    let regex = new RegExp(pattern)
    if (regex.test(email)) {
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
    let isEmailError = false
    let isPasswordError = false

    if (isValidemail(state.email)) {
      isEmailError = false
      dispatch({ type: "SET_EMAIL_ERROR", value: false })
    } else {
      isEmailError = true
      dispatch({ type: "SET_EMAIL_ERROR", value: true })
    }
    if (isValidPassword(state.password)) {
      isPasswordError = false
      dispatch({ type: "SET_PASSWORD_ERROR", value: false })
    } else {
      dispatch({ type: "SET_PASSWORD_ERROR", value: true })
      isPasswordError = true
    }
    if (isPasswordError === false && isEmailError === false) {
      makeAPICall()
    }
  }
  const makeAPICall = async () => {
    const requestBody = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: state.email, password: state.password }),
    }
    const response = await fetch(API_URL + "/login", requestBody)
    const data = await response.json()
    if (data && data.token) {
      Cookies.set("isLoggedIn", true, { expires: 7 })
    } else if (data.error) {
      dispatch({ type: "SET_ERROR", value: data.error })
    }
  }
  if (Cookies.get("isLoggedIn")) {
    //   navigate("/shop")
    //   return (
    //     <Grid style={{ height: "99vh" }}>
    //       <Grid.Row centered>
    //         <Grid.Column width={16} textAlign="center" verticalAlign="middle">
    //           <Loader active inline>
    //             Loading
    //           </Loader>
    //         </Grid.Column>
    //       </Grid.Row>
    //     </Grid>
    //   )
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
                    value={state.email}
                    iconPosition="left"
                    icon={"mail outline"}
                    placeholder="Enter your email"
                    onChange={event => {
                      dispatch({ type: "SET_EMAIL", value: event.target.value })
                    }}
                    required
                    error={
                      state.isEmailError
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
                    // required
                  ></Input>
                </Grid.Column>
              </Grid.Row>
              {/* {state.isPasswordError ? (
                <Grid.Row>
                  <Grid.Column>
                    <Message negative content="Please enter valid password" />
                  </Grid.Column>
                </Grid.Row>
              ) : (
                ""
              )} */}
              {state.error ? (
                <Grid.Row>
                  <Grid.Column>
                    <Message negative content={state.error} />
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
              <Grid.Row centered>
                <Grid.Column width={"4"}>
                  <Button
                    fluid
                    onClick={() => {
                      setCount(count + 1)
                    }}
                  >
                    Add
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
