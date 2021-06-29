import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

export const ActionButton = ({ children, color, background, icon }) => {
  return (
    <button type="submit" id="button" style={{ background: background }}>
      <span style={{ color: color }}>{children}</span> <img src={icon} alt="" />
    </button>
  );
};

ActionButton.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  background: PropTypes.string,
};
