import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const FirstScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (phoneNumber) {
      // Save phone number and proceed
      navigate("/second");
    }
  };

  const handleGuest = () => {
    // Proceed as guest
    navigate("/second");
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Proceeding as a guest will limit functionality and responses will not be
      recorded.
    </Tooltip>
  );

  return (
    <div className="container">
      <h2>Enter your phone number (optional)</h2>
      <input
        type="text"
        className="form-control"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button
        className="btn btn-primary"
        onClick={handleNext}
        disabled={!phoneNumber}
      >
        Next
      </button>
      <OverlayTrigger placement="right" overlay={renderTooltip}>
        <button className="btn btn-secondary" onClick={handleGuest}>
          Proceed as Guest
        </button>
      </OverlayTrigger>
    </div>
  );
};

export default FirstScreen;
