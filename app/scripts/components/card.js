/**
 * This file will hold the Product content as Card view
 * Basically, it shows produts summary data like name and tags.
 *
 */
import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * Renders the product data in the Card class.
   *
   * @returns JSX
   * @memberof Card
   */
  render() {
    const cardItem = this.props.cardItem;
    const tagsString = this.props.cardItem.tags.join(", ");

    return (
      <div className="card" id={cardItem._id}>
        <div className="card-inner">
          <div className="information">
            <div className="label">{cardItem.name}</div>
            <div className="tags">{tagsString}</div>
            <img src={cardItem.picture} className="card-image" />
          </div>
        </div>
      </div>
    );
  }
}

// Export out the React Component
module.exports = Card;
