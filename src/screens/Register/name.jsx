import React from "react";
import { Input } from "components/Input";
import { ActionButton } from "components/ActionButton";

import icon from "assets/icon-1.svg";

import "./styles.scss";
import { useHistory } from "react-router-dom";

import Context from "context";

export const RegisterName = () => {
  const history = useHistory();

  const { setName } = React.useContext(Context);

  const [inputValue, setInputValue] = React.useState();
  const [invalid, setInvalid] = React.useState(false);

  const handleChangeInput = (e) => {
    const value = e.target.value;

    setInputValue(value);

    if (invalid && value) {
      setInvalid(!invalid);
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (inputValue) {
      setName(inputValue);
      history.push("/register-email");
    } else {
      setInvalid(!invalid);
    }
  };

  return (
    <main id="register">
      <div id="register-text">
        <p>Vamos começar</p>
        <p>Como devemos te chamar?</p>
        <p>
          Nos diga como devemos te chamar e qual é o seu e-mail
          <br />
          para que possamos te enviar novidades
        </p>
      </div>
      <form id="form-register" onSubmit={handleSubmitForm}>
        <Input
          handleChangeInput={handleChangeInput}
          placeholder="Digite seu nome"
          invalid={invalid}
        />
        <div>
          <ActionButton color="#000" icon={icon}>
            Continuar
          </ActionButton>
        </div>
      </form>
    </main>
  );
};
