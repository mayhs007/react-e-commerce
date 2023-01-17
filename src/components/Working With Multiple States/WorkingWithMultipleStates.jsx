import { useState } from "react"

export const WorkingWithMultipleStates = () => {
  const [name, setName] = useState("Shyam")
  const [institute, setInstitute] = useState("MEPCO")
  const [events, setEvents] = useState(["dancing", "drama", "singing"])
  const [data, setData] = useState([])
  let eventOptions = [
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
  const handleSubmit = event => {
    event.preventDefault()
    //     const newData = {
    //       name: name,
    //       institute: institute,
    //       events: events,
    //     }
    const newData = { name, institute, events }
    setData(prevState => {
      return [...prevState, newData]
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter your name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={event => {
              setName(event.target.value)
            }}
          ></input>
        </div>
        <div>
          <label>Enter your institute</label>
          <input
            type="text"
            placeholder="Enter your institute name:"
            value={institute}
            onChange={event => {
              setInstitute(event.target.value)
            }}
          ></input>
        </div>
        <div>
          <label>Select the events</label>
          <select
            multiple
            value={events}
            onChange={event => {
              let values = [...event.target.selectedOptions].map(option => option.value)
              setEvents(values)
            }}
          >
            {eventOptions.map(option => (
              <option key={option.key} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Submit Form</button>
        </div>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Institute</th>
              <th>Events</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
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
