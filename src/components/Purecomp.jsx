import './ass5.css'

import React, { PureComponent } from 'react'

 class Purecomp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    onIncrement = () =>{
      this.setState({count: this.state.count +1})
    }
  render() {
    console.log("Pure component render method called")
    return (
        <div div className='pure'>
        <h1>Pure Component</h1>
        <ul>
            <li>
            A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React. PureComponent class are treated as pure components.
             </li>
             <li>PureComponent Is Primarily Used for Performance Optimization. As outlined in the React docs: If your React component's render() function renders the same result given the same props and state, you can use React. PureComponent for a performance boost in some cases.</li>
        </ul>
    <div className='ex'>
        <h2> PureComponent</h2>
        {this.state.count}
        <button onClick={this.onIncrement}>Increment</button>
    </div>
    </div>
    )
  }
}

export default Purecomp