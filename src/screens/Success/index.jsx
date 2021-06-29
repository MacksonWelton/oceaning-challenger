import React from "react";

import "./styles.scss";

import { ActionButton } from "components/ActionButton";

import icon from "assets/icon-2.svg";

import { useHistory } from "react-router";

export const Success = () => {
  const history = useHistory();

  const handleChangePage = () => {
    history.push("/list");
  };

  return (
    <div id="success">
      <p>Parabéns!</p>
      <p>Suas habilidades foram enviadas</p>
      <p>
        Faça parte dessa jornada junto com a Oceaning e conquiste o <br /> mundo
        com suas habilidades de programação.
      </p>
      <div id="success-button" onClick={handleChangePage}>
        <ActionButton icon={icon} color="#fff" background="#201F26">
          VER TODOS
        </ActionButton>
      </div>
    </div>
  );
};
