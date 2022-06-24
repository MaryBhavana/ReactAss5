import './ass5.css'

import React, { Component } from 'react'

 class Hcom extends Component {
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
        <div className='hcom'>
        <h1>High Order Component</h1>
        <ul>
            <li>A higher-order component (HOC) is an advanced technique in React for reusing component logic.</li>
            <li> HOCs are not part of the React API</li>
            <li>They are a pattern that emerges from React's compositional nature.</li>
            <li>Concretely, a higher-order component is a function that takes a component and returns a new component.</li>
            <li>The examples of HOCs are Redux's connect and Relay's createContainer.</li>
        </ul>
       <div className='example'>
        <h1>Examples for HOC</h1>
       <h2>Counter times:{count}</h2>
        <button onClick={this.incrementCount}>Clicked on button</button>
        
        
        </div> 
        
    </div>
    )
  }
}

export default Hcom