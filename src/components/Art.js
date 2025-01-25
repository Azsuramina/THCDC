import React from "react";
import QuizPage from "./QuizPage";

class Art extends QuizPage {
  render() {
    return (
      <div>
        {super.render()}
        <p>This is the Art page.</p>
      </div>
    );
  }
}

export default Art;
