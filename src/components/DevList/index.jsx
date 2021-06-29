import React from "react";

import "./styles.scss";

export const DevList = ({ devs = [] }) => {
  return (
    <main id="dev-list">
      <div id="dev-list-itens">
        {devs.map((dev) => (
          <div className="dev-list-item" key={dev.name}>
            <p className="dev-name text-dev-list">{dev.name}</p>
            <p className="dev-email text-dev-list">{dev.email}</p>
            <p className="dev-skills text-dev-list">
              {dev.skills.length} Habilidades
            </p>
            <p className="dev-date text-dev-list">Recebido em {dev.date}</p>
            <button>VER HABILIDADES</button>
          </div>
        ))}
      </div>
    </main>
  );
};
