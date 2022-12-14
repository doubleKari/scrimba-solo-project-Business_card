import React from "react";

const Button = ({ value, styling, children, link }) => {
  return (
    <a href={link}>
      <button className={styling}>
        {children} {value}
      </button>
    </a>
  );
};

export default Button;
