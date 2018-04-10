import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: 'This is the state txt'
    }
  }

  update(e) {
    this.setState({txt: e.target.value})
  }

  render() {
    // return <h1>Hello World</h1>
    let txt = this.props.txt
    return (
      <div>
        <h1>{txt}</h1>
        <Widget update={this.update.bind(this)}/>
        <br />
        <Button>I <Heart text="123"></Heart> React</Button>
        <h2>{this.state.txt}</h2>
        <b>Bold</b>
      </div>
    )
  }
}

// Define prop
App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.string.isRequired
}

// Default prop
App.defaultProps = {
  txt: 'HIhi'
}

// const App = () => <h1>Hello Stateless</h1>

// React Components as children
const Widget = (props) =>
  <input type="text" onChange={props.update}/>

// Access nested data with Reacts props.children
const Button = (props) =>
  <button>{props.children}</button>

// Access nested data with Reacts props.children
class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}

Heart.propTypes = {
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`Missing prop ${propName}`)
    }
    if(props[propName].length < 1) {
      return new Error(`${propName} was too short`)
    }
  }
}
export default App