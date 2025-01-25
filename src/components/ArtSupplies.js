import React from "react";
import QuizPage from "./QuizPage";

class ArtSupplies extends QuizPage {
  render() {
    return (
      <div>
        {super.render()}
        <p>This is the Art Supplies page.</p>
      </div>
    );
  }
}

export default ArtSupplies;
