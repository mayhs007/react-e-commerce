import React, { useState } from "react"
export const Validation = () => {
  const [name, setName] = useState("Shyam")
  const [phoneNumber, setPhoneNumber] = useState("7010534782")
  const [email, setEmail] = useState("shyamoffical@gmail.com")
  const [institute, setInstitute] = useState("MEPCO")
  const [events, setEvents] = useState(["dancing", "drama", "singing"])
  const [data, setData] = useState([])

  const [isEmailError, setIsEmailError] = useState(false)
  const [isPhoneNumberError, setIsPhoneNumberError] = useState(false)
  const [isNameError, setIsNameError] = useState(false)
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
    var nameError = false
    var emailError = false
    var phoneError = false
    event.preventDefault()
    /*------------------------------------------------------- */
    /* Validation for Name */
    let namePattern = /^[a-zA-Z]+$/gm
    let nameRegex = new RegExp(namePattern)
    if (nameRegex.test(name)) {
      nameError = false
      setIsNameError(false)
    } else {
      nameError = true
      setIsNameError(true)
    }
    /*------------------------------------------------------- */
    /* Validation for Email */
    let emailPattern = /^[a-zA-Z0-9+_.]+@[a-z-A-z]+\.[a-zA-Z]{2,3}$/gm
    let emailRegex = new RegExp(emailPattern)
    if (emailRegex.test(email)) {
      emailError = false
      setIsEmailError(false)
    } else {
      emailError = true
      setIsEmailError(true)
    }
    /*------------------------------------------------------- */
    /* Validation for Phone */
    let phonePattern = /^[0-9]{1,10}$/gm
    let phoneRegex = new RegExp(phonePattern)
    if (phoneRegex.test(phoneNumber)) {
      phoneError = false
      setIsPhoneNumberError(false)
    } else {
      phoneError = true
      setIsPhoneNumberError(true)
    }
    /*------------------------------------------------------- */
    if (nameError == false && phoneError == false && emailError == false) {
      const newData = { name, phoneNumber, email, institute, events }
      setData(prevState => {
        return [...prevState, newData]
      })
    }
  }
  return (
    <div classNm="main-container">
      <form onSubmit={handleSubmit} className="form-container">
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
          <label>Enter your email address</label>
          <input
            type="text"
            placeholder="Enter your email:"
            value={email}
            onChange={event => {
              setEmail(event.target.value)
            }}
          ></input>
        </div>
        <div>
          <label>Enter your phone number</label>
          <input
            type="text"
            placeholder="Enter your phone number:"
            value={phoneNumber}
            onChange={event => {
              setPhoneNumber(event.target.value)
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
        <div class="error-container">
          <p>{isNameError ? "Name is not valid" : ""}</p>
          <p>{isEmailError ? "Email address is not valid" : ""}</p>
          <p>{isPhoneNumberError ? "Phone Number is not valid" : ""}</p>
        </div>
        <div>
          <button type="submit">Submit Form</button>
        </div>
      </form>
      <table className="table-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Institute</th>
            <th>Events</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={"row-" + index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.institute}</td>
              <td>{data.events.join(",")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
