import React from "react"
import { useState } from "react"
import { Child1Component } from "./Child1Component"
import { Child2Component } from "./Child2Component"

export const LiftingTheStateUp = () => {
  const [price, setPrice] = useState(0)
  const handleParentChange = newText => {
    setPrice(newText)
  }
  return (
    <div>
      <h2>Price of the football is 200 INR</h2>
      <Child2Component
        handleParentChange={handleParentChange}
        price={price}
      ></Child2Component>
      <Child1Component price={price}></Child1Component>
    </div>
  )
}
