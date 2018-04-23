import React from 'react';
// import PropTypes from 'prop-types'
// import ReactDOM from 'react-dom';

const HOC = InnerComponent => class extends React.Component {
  constructor() {
    super()
    this.state = {count: 0}
  }
  update() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <InnerComponent {...this.props} {...this.state} update={this.update.bind(this)}/>
    )
  }
}

class App extends React.Component {

  render() {
    return (
      <div>
        <Button>button</Button>
        <hr/>
        <Label>label</Label>
      </div>
    )
  }
}

const Button = HOC((props) => <button onClick={props.update}>{props.children} - {props.count}</button>)

class Label extends React.Component {
  render() {
    return (
      <label>{this.props.children}</label>
    )
  }
}

export default App;
