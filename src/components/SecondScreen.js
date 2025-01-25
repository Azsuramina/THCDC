import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SecondScreen = () => {
  const [selection, setSelection] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (selection) {
      switch (selection) {
        case "THC Products":
          navigate("/thc-products");
          break;
        case "Art":
          navigate("/art");
          break;
        case "Art Supplies":
          navigate("/art-supplies");
          break;
        case "Trinkets / Swag":
          navigate("/trinkets-swag");
          break;
        case "Something Else":
          navigate("/suggestions");
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="container">
      <h2>What are you looking for?</h2>
      <select
        className="form-control"
        value={selection}
        onChange={(e) => setSelection(e.target.value)}
      >
        <option value="">Select an option</option>
        <option value="THC Products">THC Products</option>
        <option value="Art">Art</option>
        <option value="Art Supplies">Art Supplies</option>
        <option value="Trinkets / Swag">Trinkets / Swag</option>
        <option value="Something Else">Something Else</option>
      </select>
      <button
        className="btn btn-primary"
        onClick={handleNext}
        disabled={!selection}
      >
        Next
      </button>
    </div>
  );
};

export default SecondScreen;
