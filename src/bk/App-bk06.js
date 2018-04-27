import React from 'react';
// import './App.css'
// import PropTypes from 'prop-types'
// import ReactDOM from 'react-dom';


class App extends React.Component {
  render() {
    return (
      <div>
        <Button>
          <button value="A">A</button>
          <button value="B">B</button>
          <button value="C">C</button>
        </Button>
      </div>
    )
  }
}

class Button extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: 'None'
    }
  }
  selecteItem(selected) {
    this.setState({selected : selected})
  }
  render() {
    // let items = this.props.children
    let fn = child => {
      
      let i = React.cloneElement(child, {
        onClick: this.selecteItem.bind(this, child.props.value)
      })
      return i
    }
    let items = React.Children.map(this.props.children, fn)
    return (
      <div>
        <h2>You have Selected: {this.state.selected}</h2>
        {items}
      </div>
    )
  }
}


export default App;
