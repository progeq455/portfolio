import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <p className="skills-title">Навыки</p>
      <ul className="skills-list">
        <li className="skills-list__hard">
          <p className="skills-list__title">Hard-skills</p>
          <p className="skills-list__title-mini">Разработка</p>
          <ul className="skills-list__hard-details">
            <li className="skills-list__hard-skill">HTML5</li>
            <li className="skills-list__hard-skill">CSS3</li>
            <li className="skills-list__hard-skill">SCSS</li>
            <li className="skills-list__hard-skill">Адаптивная верстка</li>
            <li className="skills-list__hard-skill">Кроссбраузерная верстка</li>
            <li className="skills-list__hard-skill">Методология БЭМ</li>
            <li className="skills-list__hard-skill">JavaScript</li>
            <li className="skills-list__hard-skill">React</li>
            <li className="skills-list__hard-skill">React-Router-Dom</li>
            <li className="skills-list__hard-skill">Redux</li>
            <li className="skills-list__hard-skill">Redux-Thunk</li>
            <li className="skills-list__hard-skill">Redux-Toolkit</li>
            <li className="skills-list__hard-skill">RTK-query</li>
            <li className="skills-list__hard-skill">TypeScript</li>
            <li className="skills-list__hard-skill">NPM</li>
            <li className="skills-list__hard-skill">Node.js</li>
            <li className="skills-list__hard-skill">REST</li>
            <li className="skills-list__hard-skill">Express.js</li>
            <li className="skills-list__hard-skill">PostgreSQL</li>
            <li className="skills-list__hard-skill">MongoDB</li>
            <li className="skills-list__hard-skill">Firebase</li>
            <li className="skills-list__hard-skill">Jest</li>
            <li className="skills-list__hard-skill">React-Testing-Library</li>
            <li className="skills-list__hard-skill">Git</li>
            <li className="skills-list__hard-skill">Github</li>
          </ul>
          <p className="skills-list__title-mini">Дизайн</p>
          <ul className="skills-list__hard-details">
            <li className="skills-list__hard-skill">Проектирование</li>
            <li className="skills-list__hard-skill">Прототипы</li>
            <li className="skills-list__hard-skill">Дизайн-макеты</li>
            <li className="skills-list__hard-skill">Figma</li>
          </ul>
          <p className="skills-list__title-mini">Методологии</p>
          <ul className="skills-list__hard-details">
            <li className="skills-list__hard-skill">Agile</li>
            <li className="skills-list__hard-skill">Scrum</li>
            <li className="skills-list__hard-skill">Kanban</li>
          </ul>
        </li>
        <li className="skills-list__soft">
          <p className="skills-list__title">Soft-skills</p>
          <ul className="skills-list__soft-details">
            <li className="skills-list__soft-skill">
              Умение работать в команде
            </li>
            <li className="skills-list__soft-skill">Организованность</li>
            <li className="skills-list__soft-skill">Гибкость</li>
            <li className="skills-list__soft-skill">Открытость и честность</li>
            <li className="skills-list__soft-skill">Конструктив</li>
            <li className="skills-list__soft-skill">Взаимопонимание</li>
            <li className="skills-list__soft-skill">Коммуникабельность</li>
            <li className="skills-list__soft-skill">Пунктуальность</li>
            <li className="skills-list__soft-skill">Дружелюбие</li>
            <li className="skills-list__soft-skill">
              Умение решать сложные задачи
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
