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
        <input type="text" onChange={this.update.bind(this)}/>
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

export default App