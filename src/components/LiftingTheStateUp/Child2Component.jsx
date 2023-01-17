import React from "react"
export const Child2Component = Props => {
  const handleChange = event => {
    Props.handleParentChange(event.target.value)
  }
  return (
    <div>
      <label>Input Filed in the child </label>
      <input
        value={Props.value}
        placeholder="Enter your amount"
        onChange={handleChange}
      ></input>
    </div>
  )
}
