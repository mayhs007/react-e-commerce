// function App() {
//   return <div>Hello World</div>
import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import Cards from "./components/Cards/Cards"
import "semantic-ui-css/semantic.min.css"

// }
const App = () => {
  return (
    <div className="app-container">
      <NavBar></NavBar>
      <Cards></Cards>
    </div>
  )
}
export default App
