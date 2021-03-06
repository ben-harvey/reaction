import AddListForm from "./AddListForm";
import { connect } from "react-redux";
import { createList } from "../../actions/ListActions";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (title, callback) => {
      dispatch(createList({ title: title }, ownProps.boardId, callback));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddListForm);
