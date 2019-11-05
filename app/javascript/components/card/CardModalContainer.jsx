import React, { Component } from "react";
import { connect } from "react-redux";
import CardModal from "./CardModal";
import BoardContainer from "../board/BoardContainer";
import { fetchCard } from "../../actions/cardActions";

const mapStateToProps = (state, ownProps) => {
  const currentCardModal = state.cards.find(card => {
    return card.id === +ownProps.match.params.id;
  });

  return {
    card: currentCardModal
    // list: (need list title inside card modal)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchCard: () => {
      dispatch(fetchCard(+ownProps.match.params.id));
    }
  };
};

class CardModalContainer extends Component {
  state = {};

  componentDidMount() {
    this.props.onFetchCard();
  }

  render() {
    if (this.props.card) {
      return <CardModal card={this.props.card} />;
    } else {
      return null;
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardModalContainer);
