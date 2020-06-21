import React from "react";

function Emoji(props) {
  const { emoji, label, fontSize = "" } = props;
  return (
    <span role="img" aria-label={label} style={{ fontSize: fontSize }}>
      {emoji}
    </span>
  );
}

export default Emoji;
