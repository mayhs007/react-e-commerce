import React from "react"
export const Child1Component = Props => {
  if (Props.price >= 200) {
    return <p>Congrats you can buy the football</p>
  }
  return <p>Sorry! you cannot buy the football</p>
}
