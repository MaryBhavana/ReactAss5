import React, { Component } from 'react'
import './ass5.css'
class Hover extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCount = () =>{
        this.setState(prevState => {
            return {count: prevState.count + 1}
    })
}

  render() {
    const {count} = this.state
    return (
      <div className='hover'>
        <h2 onMouseOver={this.incrementCount}>Hovered on heading times:{count}</h2>
      </div>
    )
  }
}

export default Hover