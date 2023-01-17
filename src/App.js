import logo from "./logo.svg"
import "./App.css"
import { WorkingWithMultipleStates } from "./components/Working With Multiple States/WorkingWithMultipleStates"
import WorkingWithMultipleStatesClass from "./components/Working With Multiple States/WorkingWithMultipleStatesClass"
import { LiftingTheStateUp } from "./components/LiftingTheStateUp/LifitingTheStateUp"

function App() {
  return (
    <div>
      {/* <WorkingWithMultipleStates></WorkingWithMultipleStates> */}
      {/* <WorkingWithMultipleStatesClass></WorkingWithMultipleStatesClass> */}
      <LiftingTheStateUp></LiftingTheStateUp>
    </div>
  )
}

export default App
