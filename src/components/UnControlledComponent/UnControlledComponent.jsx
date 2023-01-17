import React from "react"
import { useRef } from "react"
import { useState } from "react"
export const UnControlledComponent = () => {
  const [name, setName] = useState("")
  let nameRef = useRef()
  return (
    <div>
      <div>
        {/* Controlled component */}
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        ></input>
      </div>
      <div>
        {/* Uncontrolled component */}
        <input type="text" ref={nameRef}></input>
        {/* nameRef.current.value */}
      </div>
    </div>
  )
}
