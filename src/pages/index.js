import React from "react"
import paper from "paper/dist/paper-core"

export default class index extends React.Component {
  componentDidMount() {
    let canvas = document.getElementById("myCanvas")
    paper.setup(canvas)
    let line = new paper.Path.Line({ x: 10, y: 10 }, { x: 40, y: 40 })
    line.style = {
      strokeWidth: 1,
      strokeColor: "black",
    }
  }
  render() {
    return (
      <div>
        <canvas id="myCanvas" data-paper-resize="true" />
      </div>
    )
  }
}
