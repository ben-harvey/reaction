import React, { Component } from "react";
import CardsContainer from "./CardsContainer";

class List extends Component {
  state = {
    cardFormOpen: false
  };

  handleAddCard = e => {
    this.setState(prevState => {
      this.state.cardFormOpen = !prevState.cardFormOpen;
    });
  };

  render() {
    const divClass = this.state.cardFormOpen
      ? "list-wrapper add-dropdown-active"
      : "list-wrapper";
    return (
      <div className={divClass}>
        <div className="list-background">
          <div className="list">
            <a className="more-icon sm-icon" href=""></a>
            <div>
              <input
                type="text"
                className="list-title"
                value={this.props.list.title}
                autofocus="true"
              />
            </div>
            <div className="add-dropdown add-top">
              <div className="card"></div>
              <a className="button">Add</a>
              <i className="x-icon icon"></i>
              <div className="add-options">
                <span>...</span>
              </div>
            </div>
            <CardsContainer list={this.props.list} />
            <div className="add-dropdown add-bottom">
              <div className="card">
                <div className="card-info"></div>
                <textarea name="add-card"></textarea>
                <div className="members"></div>
              </div>
              <a className="button">Add</a>
              <i className="x-icon icon"></i>
              <div className="add-options">
                <span>...</span>
              </div>
            </div>
            <div className="add-card-toggle" data-position="bottom">
              Add a card...
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
