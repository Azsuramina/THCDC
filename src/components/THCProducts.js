import React from "react";
import QuizPage from "./QuizPage";

class THCProducts extends QuizPage {
  render() {
    return (
      <div>
        {super.render()}
        <p>This is the THC Products page.</p>
      </div>
    );
  }
}

export default THCProducts;
