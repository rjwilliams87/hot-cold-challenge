import React from "react";
import { connect } from "react-redux";
import "./feedback.css";

export function Feedback(props) {
  return (
    <div className="feedback-container">
      <h2>{props.feedback}</h2>
    </div>
  );
}

const mapStateToProps = state => ({
  feedback: state.feedback
});

export default connect(mapStateToProps)(Feedback);
