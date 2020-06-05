/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */
import React from "react";
import ReactDOM from "react-dom";

import Menu from "./components/menu";
import Home from "./components/home";

/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {
  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  changeHandler(data) {
    this.setState({
      data: data
    });
  }

  render() {
    // Search data is stored an rendered in 'data' state variable
    // This state is manupilated by changeHandler function
    // and this function is triggered by child component 'Menu' class
    return (
      <div className="App">
        <Menu onChangeHandler={this.changeHandler.bind(this)} />
        <Home data={this.state.data} />
      </div>
    );
  }
}

// Render this out
ReactDOM.render(<App />, document.getElementById("root"));
