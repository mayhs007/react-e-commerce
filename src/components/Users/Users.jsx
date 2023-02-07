import React, { useEffect, useReducer } from "react"
import {
  Grid,
  Segment,
  Item,
  Loader,
  Pagination,
  Button,
  Dropdown,
} from "semantic-ui-react"
const initalState = {
  page: 1,
  totalPages: 0,
  limit: 5,
  users: [],
  isLoading: false,
}
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PAGE": {
      return {
        ...state,
        page: action.value,
      }
    }
    case "SET_LIMIT": {
      return {
        ...state,
        limit: action.value,
      }
    }
    case "SET_TOTAL": {
      return {
        ...state,
        totalPages: action.value,
      }
    }
    case "SET_USERS": {
      return {
        ...state,
        users: action.value,
      }
    }
    case "SET_IS_LOADING": {
      return {
        ...state,
        isLoading: action.value,
      }
    }
    default:
      return state
  }
}
const Users = () => {
  const [state, dispatch] = useReducer(reducer, initalState)
  const API_URL =
    process.env.REACT_APP_API_PROTOCOL +
    process.env.REACT_APP_API_HOST +
    process.env.REACT_APP_API_ENDPOINT

  const getUsers = async () => {
    dispatch({ type: "SET_IS_LOADING", value: true })
    const response = await fetch(
      API_URL + "/users?page=" + state.page + "&per_page=" + state.limit
    )
    const data = await response.json()
    if (data && data.data && data.data.length > 0) {
      dispatch({ type: "SET_USERS", value: data.data })
    } else {
      dispatch({ type: "SET_USERS", value: [] })
    }
    dispatch({ type: "SET_TOTAL", value: data.total_pages })
    dispatch({ type: "SET_IS_LOADING", value: false })
  }
  useEffect(() => {
    getUsers()
  }, [state.page, state.limit])

  const renderUserItem = () => {
    if (state.isLoading) {
      return (
        <Item>
          <Loader active inline></Loader>
        </Item>
      )
    } else if (state.users.length > 0) {
      return state.users.map(user => (
        <Item key={user.id}>
          <Item.Image src={user.avatar} size="tiny" avatar></Item.Image>
          <Item.Content>
            <Item.Header>
              {user.first_name} {user.last_name}
            </Item.Header>
            <Item.Meta>{user.email}</Item.Meta>
          </Item.Content>
        </Item>
      ))
    }
  }
  const options = [
    { key: "1", text: "1", value: 1 },
    { key: "2", text: "2", value: 2 },
    { key: "3", text: "3", value: 3 },
    { key: "4", text: "4", value: 4 },
    { key: "5", text: "5", value: 5 },
    { key: "6", text: "6", value: 6 },
  ]
  return (
    <React.Fragment>
      <Grid.Row centered>
        <Grid.Column width={14}>
          <Button.Group color="teal" floated="right">
            <Button>Limit {state.limit}</Button>
            <Dropdown
              className="button icon"
              floating
              options={options}
              trigger={<></>}
              value={state.limit}
              onChange={(e, { value }) => {
                dispatch({ type: "SET_PAGE", value: 1 })
                dispatch({ type: "SET_LIMIT", value: value })
              }}
              loading={state.isLoading}
            />
          </Button.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={14}>
          <Segment>
            <Item.Group divided>{renderUserItem()}</Item.Group>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={14}>
          <Pagination
            activePage={state.page}
            totalPages={state.totalPages}
            onPageChange={(e, { activePage }) => {
              dispatch({ type: "SET_PAGE", value: activePage })
            }}
          ></Pagination>
        </Grid.Column>
      </Grid.Row>
    </React.Fragment>
  )
}
export default Users
