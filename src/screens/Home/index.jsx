import React from "react";

import { ActionButton } from "components/ActionButton";

import icon from "assets/icon-1.svg";

import { useHistory } from "react-router-dom";

import "./styles.scss";

export const Home = () => {
  const history = useHistory();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    history.push("/register-name");
  };

  return (
    <main id="home">
      <div id="home-content">
        <p>Time de desenvolvimento</p>
        <p>Sua evolução começa agora</p>
        <p>
          Faça parte dessa jornada junto com a Oceaning e conquiste o <br />{" "}
          mundo com sua habilidades de programação
        </p>
      </div>
      <form onSubmit={handleSubmitForm}>
        <ActionButton color="#000" icon={icon} url="/register">
          COMEÇAR AGORA
        </ActionButton>
      </form>
    </main>
  );
};
