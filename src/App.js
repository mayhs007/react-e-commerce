import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import Cards from "./components/Cards/Cards"
import "semantic-ui-css/semantic.min.css"
import { useReducer } from "react"
import { Grid } from "semantic-ui-react"
import Login from "./components/Login/Login"
import ThemeContext from "./context/ThemeContext"
import { Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./Route/PrivateRoute"
import { NotFound } from "./components/NotFound/NotFound"
import Detail from "./components/Detail/Detail"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import Users from "./components/Users/Users"
// import PrivateRoute from "./Route/PrivateRoute"
const initalState = {
  fruitObjects: [],
  carts: [],
  isDarkTheme: false,
}
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let updatedValue = state.fruitObjects.map((value, index) =>
        index === action.value ? { ...value, quantity: value.quantity + 1 } : { ...value }
      )
      return {
        ...state,
        fruitObjects: updatedValue,
        carts: [...state.carts, action.value],
      }
    }
    case "REMOVE_FROM_CART": {
      let updatedValue = state.fruitObjects.map((value, index) =>
        index === action.value ? { ...value, quantity: 0 } : { ...value }
      )
      let filteredCart = state.carts.filter(value => value !== action.value)
      return {
        ...state,
        fruitObjects: updatedValue,
        carts: filteredCart,
      }
    }
    case "SET_LIST": {
      state = {
        ...state,
        fruitObjects: action.value,
      }
      return state
    }
    case "TOGGLE_DARK_THEME": {
      state = {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      }
      return state
    }
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initalState)
  if (state.fruitObjects.length == 0) {
    setTimeout(() => {
      dispatch({
        type: "SET_LIST",
        value: [
          {
            name: "Apple",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apples.jpg",
            price: 35,
            isLiked: false,
            quantity: 0,
          },
          {
            name: "Banana",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
            price: 12,
            isLiked: false,
            quantity: 0,
          },
          {
            name: "Grapes",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
            weight: 0.1,
            price: 45,
            isLiked: false,
            quantity: 0,
          },
          {
            name: "Pineapple",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
            price: 200,
            isLiked: false,
            quantity: 0,
          },
          {
            name: "Apple",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apples.jpg",
            price: 35,
            isLiked: true,
            quantity: 0,
          },
          {
            name: "Banana",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
            price: 12,
            isLiked: false,
            quantity: 0,
          },
          {
            name: "Grapes",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
            weight: 0.1,
            price: 45,
            isLiked: false,
            quantity: 0,
          },
          {
            name: "Pineapple",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
            price: 200,
            isLiked: false,
            quantity: 0,
          },
          {
            name: "Apple",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apples.jpg",
            price: 35,
            isLiked: false,
            quantity: 0,
          },
          {
            name: "Banana",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
            price: 12,
            isLiked: false,
            quantity: 0,
          },
          {
            name: "Grapes",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
            weight: 0.1,
            price: 45,
            isLiked: false,
            quantity: 0,
          },
          {
            name: "Pineapple",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
            price: 200,
            isLiked: false,
            quantity: 0,
          },
        ],
      })
    }, 2000)
  }

  const renderShop = () => {
    return (
      <Grid
        style={
          state.isDarkTheme
            ? { backgroundColor: "#282C34" }
            : { backgroundColor: "#f2f2f2" }
        }
      >
        <Grid.Row>
          <Grid.Column>
            <NavBar
              carts={state.carts}
              toggleDarkTheme={() => {
                dispatch({ type: "TOGGLE_DARK_THEME", value: !state.isDarkTheme })
              }}
            ></NavBar>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Cards
              list={state.fruitObjects}
              addItemToCart={listIndex => {
                dispatch({ type: "ADD_TO_CART", value: listIndex })
              }}
            ></Cards>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
  const renderDetail = () => {
    return (
      <Grid
        style={
          state.isDarkTheme
            ? { backgroundColor: "#282C34" }
            : { backgroundColor: "#f2f2f2" }
        }
      >
        <Grid.Row>
          <Grid.Column>
            <NavBar
              carts={state.carts}
              toggleDarkTheme={() => {
                dispatch({ type: "TOGGLE_DARK_THEME", value: !state.isDarkTheme })
              }}
            ></NavBar>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>

        <Detail
          fruits={state.fruitObjects}
          carts={state.carts}
          addItemToCart={listIndex => {
            dispatch({ type: "ADD_TO_CART", value: listIndex })
          }}
        ></Detail>
      </Grid>
    )
  }
  const renderCart = () => {
    return (
      <Grid
        style={
          state.isDarkTheme
            ? { backgroundColor: "#282C34" }
            : { backgroundColor: "#f2f2f2" }
        }
      >
        <Grid.Row>
          <Grid.Column>
            <NavBar
              carts={state.carts}
              toggleDarkTheme={() => {
                dispatch({ type: "TOGGLE_DARK_THEME", value: !state.isDarkTheme })
              }}
            ></NavBar>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>

        <Cart
          fruits={state.fruitObjects}
          carts={state.carts}
          removeFromCart={fruitIndex => {
            dispatch({ type: "REMOVE_FROM_CART", value: fruitIndex })
          }}
        ></Cart>
      </Grid>
    )
  }
  const renderCheckout = () => {
    return (
      <Grid
        style={
          state.isDarkTheme
            ? { backgroundColor: "#282C34" }
            : { backgroundColor: "#f2f2f2" }
        }
      >
        <Grid.Row>
          <Grid.Column>
            <NavBar
              carts={state.carts}
              toggleDarkTheme={() => {
                dispatch({ type: "TOGGLE_DARK_THEME", value: !state.isDarkTheme })
              }}
            ></NavBar>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Checkout
          carts={state.carts}
          fruits={state.fruitObjects}
          removeFromCart={fruitIndex => {
            dispatch({ type: "REMOVE_FROM_CART", value: fruitIndex })
          }}
        ></Checkout>
      </Grid>
    )
  }
  const renderUsers = () => {
    return (
      <Grid
        style={
          state.isDarkTheme
            ? { backgroundColor: "#282C34" }
            : { backgroundColor: "#f2f2f2" }
        }
      >
        <Grid.Row>
          <Grid.Column>
            <NavBar
              carts={state.carts}
              toggleDarkTheme={() => {
                dispatch({ type: "TOGGLE_DARK_THEME", value: !state.isDarkTheme })
              }}
            ></NavBar>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Users></Users>
      </Grid>
    )
  }
  return (
    <ThemeContext.Provider value={state.isDarkTheme}>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/shop" element={<PrivateRoute>{renderShop()}</PrivateRoute>}></Route>
        <Route
          path="/detail/:fruitId"
          element={<PrivateRoute>{renderDetail()}</PrivateRoute>}
        ></Route>
        <Route path="/cart" element={<PrivateRoute>{renderCart()}</PrivateRoute>}></Route>
        <Route
          path="/check-out"
          element={<PrivateRoute>{renderCheckout()}</PrivateRoute>}
        ></Route>
        <Route path="/users" element={renderUsers()}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </ThemeContext.Provider>
  )
}
export default App
