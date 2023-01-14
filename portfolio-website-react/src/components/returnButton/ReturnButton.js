import React, { useCallback } from 'react';
import './ReturnButton.css';

const ReturnButton = () => {
  const scrollUp = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="return-btn">
      <input id="btn-return" type="button" value="Return to Menu" onClick={scrollUp} />
    </div>
  );
};

export default ReturnButton;