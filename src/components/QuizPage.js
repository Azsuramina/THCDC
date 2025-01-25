import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

class QuizPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, world!",
    };
  }

  render() {
    return (
      <div className="quiz-page-container">
        <h1>{this.state.message}</h1>
        {/* Render child components */}
        {this.props.children}
      </div>
    );
  }
}

export default QuizPage;
