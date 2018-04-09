import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {
  render() {
    // return <h1>Hello World</h1>
    let txt = this.props.txt
    return (
      <div>
        <h1>{txt}</h1>
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