/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from "react";
import Card from "./Card";
import { Container, Row, Col } from "reactstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof Home
   */
  render() {
    // Reactstrap's container, row and col are used to list search results
    const listItems =
      this.props.data.length == 0 ? null : (
        <Container>
          <Row>
            {this.props.data.map(item => (
              <Col key={item._id} xs="3">
                <Card cardItem={item}></Card>
              </Col>
            ))}
          </Row>
        </Container>
      );

    const searchresults =
      this.props.data.length == 0 ? null : <h2>Search Results</h2>;

    return (
      <section id="home">
        <div className="content">
          <div className="searchresults">{searchresults}</div>
          <div className="cards">{listItems}</div>
        </div>
      </section>
    );
  }
}

// Export out the React Component
module.exports = Home;
