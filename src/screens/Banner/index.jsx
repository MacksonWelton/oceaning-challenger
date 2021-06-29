import React from "react";
import "./styles.scss";

import { ActionButton } from "components/ActionButton";

import icon from "assets/icon-1.svg";
import { useHistory } from "react-router-dom";

export const Banner = () => {
  const history = useHistory();

  const days = [22, 23, 24];

  const handleSubmitForm = (e) => {
    e.preventDefault();

    history.push("/home");
  };

  return (
    <>
      <main id="banner">
        <h1>Developers Oceaning</h1>
        <h2>Faça parte do time de desenvolvimento da agência Oceaning</h2>
      </main>

      <section className="calendar">
        {days.map((day) => (
          <div key={day} className="date">
            <div className="date-text">
              <span>{day}</span>
              <span>JUN</span>
            </div>
            <div className="rectangle"></div>
          </div>
        ))}
        <div id="hour">
          <p>Início da live</p>
          <p>19:00</p>
        </div>
        <form onSubmit={handleSubmitForm}>
          <ActionButton color="#000" icon={icon} url="/home">
            INSCREVA-SE
          </ActionButton>
        </form>
      </section>
    </>
  );
};
