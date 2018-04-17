import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: 'This is the state txt'
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount');

  }

  update(e) {
    this.setState({txt: e.target.value})
  }

  change() {
    this.setState({
      a: this.a.value,
      b: this.refs.b.value,
      c: ReactDOM.findDOMNode(this.c).value
    })
  }

  render() {
    // return <h1>Hello World</h1>
    let txt = this.props.txt
    console.log('render')
    return (
      <div>
        <h1>{txt}</h1>
        <Widget update={this.update.bind(this)}/>
        <h2>{this.state.txt}</h2>
        <Button>I <Heart text="123"></Heart> React</Button>
        <Event></Event>
        <div>
          <input ref={ node => this.a = node} type="text" onChange={this.change.bind(this)} /> {this.state.a}
          <hr/>
          <input ref="b" type="text" onChange={this.change.bind(this)} /> {this.state.b}
          <hr/>
          <Input ref={component => this.c = component} change={this.change.bind(this)} /> {this.state.c}
        </div>
      </div>
    )
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App></App>, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
      </div>
    )
  }
}

class Input extends React.Component {
  render() {
    return <input type="text" onChange={this.props.change} />
  }
}

// Define prop
App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.string
}

// Default prop
App.defaultProps = {
  txt: 'Default prop value'
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

class Event extends React.Component {
  constructor() {
    super()
    this.state = {
      currentEvent: '---'
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({currentEvent: e.type})
  }
  render() {
    return (
      <div>
        <textarea
          onClick={this.update}
          onCopy={this.update}
          onCut={this.update}
          onPaste={this.update}
          onKeyDown={this.update}
          onKeyPress={this.update}
          onKeyUp={this.update}
          onFocus={this.update}
          onBlur={this.update}
          cols="30"
          rows="10">
        </textarea>
        <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
}
export default Wrapper