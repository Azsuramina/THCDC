import React from "react";
import QuizPage from "./QuizPage";

class TrinketsSwag extends QuizPage {
  render() {
    return (
      <div>
        {super.render()}
        <p>This is the Trinkets / Swag page.</p>
      </div>
    );
  }
}

export default TrinketsSwag;
