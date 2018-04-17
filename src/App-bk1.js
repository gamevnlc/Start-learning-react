import React from 'react';
// import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      increasing: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`);
  }

  componentWillReceiveProps(nexProps) {
    this.setState({ increasing: nexProps.val > this.props.val });
  }

  shouldComponentUpdate(nexProps, nexState) {
    return nexProps.val % 5 === 0;
  }

  update() {
    ReactDOM.render(
      <App val={this.props.val + 1} />,
      document.getElementById('root')
    );
  }

  render() {
    console.log(this.state.increasing);
    return <button onClick={this.update.bind(this)}>{this.props.val}</button>;
  }
}

App.defaultProps = { val: 0 };

export default App;
