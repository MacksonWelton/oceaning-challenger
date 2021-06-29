import React from "react";

import "./styles.scss";

export const Input = ({ handleChangeInput, placeholder, invalid }) => {
  const refEl = React.useRef(null);

  React.useEffect(() => {
    if (invalid) {
      refEl.current.classList.add("input-invalid");
    } else {
      refEl.current.classList.remove("input-invalid");
    }
  }, [invalid]);

  return (
    <div id="input">
      <input
        ref={refEl}
        onChange={handleChangeInput}
        placeholder={placeholder}
        autoFocus
      />
      {invalid && <small>Preencha esse campo</small>}
    </div>
  );
};
