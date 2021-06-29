import React from "react";

import "./styles.scss";

import icon from "assets/icon-5.svg";

export const SkillList = ({ skilList, removeSkill }) => {
  const [show, setShow] = React.useState(false);
  const refEl = React.useRef(null);

  React.useEffect(() => {
    if (skilList.length > 0) {
      refEl.current.classList.remove("skill-list-header");
      refEl.current.classList.add("skill-list-header2");
    } else {
      refEl.current.classList.remove("skill-list-header2");
      refEl.current.classList.add("skill-list-header");

      if (show) {
        setShow(!show);
      }
    }
  }, [skilList, show]);

  const toggleShowList = () => {
    if (skilList.length > 0) {
      setShow(!show);
    }
  };

  return (
    <div id="skill-list">
      <div ref={refEl} className="skill-list-header" onClick={toggleShowList}>
        <p>
          {skilList.length > 0
            ? `${skilList.length} Habilidades adicionadas`
            : "Nenhuma habilidade adicionada"}
        </p>
        {skilList.length > 0 && (
          <p>
            VER HABILIDADES <img src={icon} alt="" />
          </p>
        )}
      </div>
      {show && (
        <div id="skills-list-show">
          {skilList.map((skill) => (
            <div key={skill}>
              <p>{skill}</p>
              <p onClick={() => removeSkill(skill)}>REMOVER</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
