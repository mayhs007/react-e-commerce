import React from "react"

export default class WorkingWithMultipleStatesClass extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "Shyam",
      institute: "Mepco Schlenk",
      events: ["dancing", "mono-act"],
      data: [],
    }
  }
  eventOptions = [
    {
      key: "dancing",
      value: "dancing",
    },
    {
      key: "drama",
      value: "drama",
    },
    {
      key: "mono-act",
      value: "mono-act",
    },
    {
      key: "singing",
      value: "singing",
    },
  ]
  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      ...this.state,
      data: [
        ...this.state.data,
        {
          name: this.state.name,
          institute: this.state.institute,
          events: this.state.events,
        },
      ],
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Enter your Name:</label>
            <input
              type="text"
              value={this.state.name}
              onChange={event => {
                this.setState({
                  ...this.state,
                  name: event.target.value,
                })
              }}
            />
          </div>
          <div>
            <label>Enter your institute:</label>
            <input
              type={"text"}
              value={this.state.institute}
              onChange={event => {
                this.setState({
                  ...this.state,
                  institute: event.target.value,
                })
              }}
            ></input>
          </div>
          <div>
            <label>Select Events</label>
            <select
              multiple
              value={this.state.events}
              onChange={event => {
                const values = [...event.target.selectedOptions].map(
                  option => option.value
                )
                this.setState({
                  ...this.state,
                  events: values,
                })
              }}
            >
              {this.eventOptions.map(event => (
                <option value={event.value} key={event.key}>
                  {" "}
                  {event.value}
                </option>
              ))}
              {/* {eventOptions.map(event => {
                      return <option>{event.value}</option>
                    })} */}
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>

        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Insitute</th>
                <th>Events</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((data, index) => (
                <tr key={"row-" + index}>
                  <td>{data.name}</td>
                  <td>{data.institute}</td>
                  <td>{data.events.join(",")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
