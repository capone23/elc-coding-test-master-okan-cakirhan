/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React from "react";

// import axios for API calls to backend
const axios = require("axios");
let baseURL = "";

//import general.config for server URL data
const config = require("../../../config/general.config");

class Menu extends React.Component {
  /**
   * Main constructor for the Menu Class
   * @memberof Menu
   */
  constructor(props) {
    super(props);
    this.getBaseURL();
    this.state = {
      showingSearch: false,
      searchText: ""
    };
  }

  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */
  showSearchContainer(e) {
    e.preventDefault();
    if (this.state.showingSearch) {
      // clear data and screen
      this.props.onChangeHandler([]);
      this.setState({
        searchText: ""
      });
    }
    this.setState({
      showingSearch: !this.state.showingSearch
    });
  }

  getBaseURL() {
    // If the ENV is undefined we accept it as local environment
    if (process.env.NODE_ENV == undefined) {
      baseURL = config.local_server;
    } else {
      // To be filled in the future according to relevant environment
    }
  }

  /**
   * Calls upon search change
   * @memberof Menu
   * @param e [Object] - the event from a text change handler
   */
  onSearch(e) {
    let searchData =
      e.target.value !== null || e.target.value != undefined
        ? e.target.value
        : "";

    if (searchData == "") {
      this.props.onChangeHandler([]); // clear content
      this.setState({
        searchText: ""
      });
    } else {
      // Store search text
      this.setState({
        searchText: searchData
      });
      // Server configuration is stored in general.config.js file
      // After getting server address make an API call to retrieve data.
      // This call is basically a HTTP GET Request and done by axios library
      axios.get(baseURL + "?param=" + searchData).then(resp => {
        this.props.onChangeHandler(resp.data);
      });
    }
  }

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  render() {
    return (
      <header className="menu">
        <div className="menu-container">
          <div className="menu-holder">
            <h1>ELC</h1>
            <nav>
              <a href="#" className="nav-item">
                HOLIDAY
              </a>
              <a href="#" className="nav-item">
                WHAT'S NEW
              </a>
              <a href="#" className="nav-item">
                PRODUCTS
              </a>
              <a href="#" className="nav-item">
                BESTSELLERS
              </a>
              <a href="#" className="nav-item">
                GOODBYES
              </a>
              <a href="#" className="nav-item">
                STORES
              </a>
              <a href="#" className="nav-item">
                INSPIRATION
              </a>

              <a href="#" onClick={e => this.showSearchContainer(e)}>
                <i className="material-icons search">search</i>
              </a>
            </nav>
          </div>
        </div>
        <div
          className={
            (this.state.showingSearch ? "showing " : "") + "search-container"
          }
        >
          <input
            type="text"
            onChange={e => this.onSearch(e)}
            value={this.state.searchText}
          />
          <a href="#" onClick={e => this.showSearchContainer(e)}>
            <i className="material-icons close">close</i>
          </a>
        </div>
      </header>
    );
  }
}

// Export out the React Component
module.exports = Menu;
