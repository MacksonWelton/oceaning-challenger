import React from "react";
import { Input } from "components/Input";
import { ActionButton } from "components/ActionButton";
import { SkillList } from "components/SkillList";

import icon from "assets/icon-1.svg";
import iconCheck from "assets/icon-4.svg";

import "./styles.scss";
import { useHistory } from "react-router-dom";

import Context from "context";
import moment from "moment";

export const Skills = () => {
  const history = useHistory();
  const { name } = React.useContext(Context);
  const dataLocal = JSON.parse(localStorage.getItem(name));

  const skills = [
    "React",
    "React Native",
    "PHP",
    "Java",
    "JavaScript",
    "C#",
    "C++",
    "Ruby",
    "CSS",
    "HTML5",
    "NodeJS",
  ];

  const [invalid] = React.useState(false);
  const [recommends, setRecommends] = React.useState([]);
  const [skilList, setSkilList] = React.useState([]);

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem(name))) {
      setSkilList(JSON.parse(localStorage.getItem(name)).skills || []);

      console.log(JSON.parse(localStorage.getItem(name)).skills);
    }
  }, [name]);

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setRecommends(
      skills.filter(
        (item) => item.toLowerCase().includes(value.toLowerCase()) && value
      )
    );
  };

  const addSkill = (skill) => {
    if (dataLocal.skills && !skilList.includes(skill)) {
      localStorage.setItem(
        name,
        JSON.stringify({ ...dataLocal, skills: [...dataLocal.skills, skill] })
      );
      setSkilList([...skilList, skill]);
    } else if (!dataLocal.skills) {
      localStorage.setItem(
        name,
        JSON.stringify({ ...dataLocal, skills: [skill] })
      );
      setSkilList([...skilList, skill]);
    }
  };

  const removeSkill = (skill) => {
    const newList = skilList.filter((item) => item !== skill);
    localStorage.setItem(
      name,
      JSON.stringify({ ...dataLocal, skills: newList })
    );
    setSkilList(newList);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (localStorage.getItem(name)) {
      history.push("/success");
      localStorage.setItem(
        name,
        JSON.stringify({ ...dataLocal, date: moment().format("DD/MM/YYYY") })
      );
    }
  };

  return (
    <main id="register">
      <div id="register-text">
        <p>Olá {name},</p>
        <p>Quais são sua habilidades?</p>
        <p>
          Nos diga como devemos te chamar e qual é o seu e-mail
          <br />
          para que possamos te enviar novidades
        </p>
      </div>
      <form id="form-skills" onSubmit={handleSubmitForm}>
        <div id="skill-input">
          <Input
            handleChangeInput={handleChangeInput}
            placeholder="Digite uma habilidade"
            invalid={invalid}
          />
          <div id="skills-recommends">
            {recommends.map((skill) => (
              <div
                className="skill"
                key={skill}
                onClick={() => addSkill(skill)}
              >
                {skill} <img src={iconCheck} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div id="button-end">
          <ActionButton color="#000" icon={icon}>
            Finalizar
          </ActionButton>
        </div>
      </form>
      <SkillList skilList={skilList} removeSkill={removeSkill} />
    </main>
  );
};
