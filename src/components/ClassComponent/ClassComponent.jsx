import React from "react"

export default class ClassComponent extends React.Component {
  state = {
    count1: 0,
    count2: 0,
  }
  constructor() {
    super()
    console.log("I am from constructor")
  }
  componentWillMount() {
    console.log("I am from componentWillMount")
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("-------------------------------")
    console.log(nextState)
    console.log(this.state)
    console.log("I am from  should component update")
    if (nextState.count1 % 2 === 0) {
      return true
    } else {
      return false
    }
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("-------------------------------")
    console.log(nextState)
    console.log(this.state)
    console.log("I am from componentWillUPdate")
  }
  render() {
    console.log("-------------------------------")
    console.log("I am from render")
    console.log(this.state)
    return (
      <div>
        <div>
          <button
            type="submit"
            onClick={() => {
              this.setState({
                count1: this.state.count1 + 1,
              })
            }}
          >
            Add
          </button>
          <h1>Count {this.state.count1}</h1>
        </div>
      </div>
    )
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("-------------------------------")
    console.log(prevState)
    console.log(this.state)
    console.log("I am from component Did update")
  }
  componentDidMount() {
    console.log("I am from componentDidMount")
  }
}
// constructor -> component Will Mount -> Render -> component did mount
//should component update->component will update -> Render->component did update
