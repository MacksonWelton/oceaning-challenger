import React from "react";

import { ActionButton } from "components/ActionButton";

import "./styles.scss";

import icon from "assets/icon-1.svg";

import { DevList } from "components/DevList";
import { useHistory } from "react-router-dom";

export const List = () => {
  const history = useHistory();

  const devs = Object.keys(localStorage).map((item) => {
    return { ...JSON.parse(localStorage[item]), name: item };
  });

  const handleChangePage = () => {
    history.push("/register-name");
  };

  return (
    <main>
      <div id="list">
        <p>{devs.length} desenvolvedores encontrados</p>
        <div onClick={handleChangePage}>
          <ActionButton
            color="#131218"
            icon={icon}
          >
            ADICIONAR
          </ActionButton>
        </div>
      </div>
      <DevList devs={devs} />
    </main>
  );
};
