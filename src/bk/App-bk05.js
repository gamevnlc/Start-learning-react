import React from 'react';
// import './App.css'
// import PropTypes from 'prop-types'
// import ReactDOM from 'react-dom';


class App extends React.Component {
  render() {
    return (
      <Parent>
        <div className="childA"></div>
        {/* <div className="childB"></div> */}
      </Parent>
    )
  }
}

class Parent extends React.Component {
  render() {
    console.log(this.props.children)
    // let items = React.Children.map(this.props.children, child => child)
    // let items = React.Children.toArray(this.props.children)
    // let items =  React.Children.forEach(this.props.children, child => console.log(child))
    let items = React.Children.only(this.props.children) // accept only a single React element child
    console.log(items)
    return null
  }
}



export default App;
