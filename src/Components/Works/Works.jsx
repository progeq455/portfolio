import bloggy from "../../Images/BloggyPreview.png";
import strote from "../../Images/StrotePreview.png";
import cloud from "../../Images/CloudPreview.png";
import evelop from "../../Images/EvelopPreview.png";
import tasks from "../../Images/TasksPreview.png";
import "./Works.css";

const Works = () => {
  return (
    <section className="works">
      <p className="works-title">Работы</p>
      <div className="works-description">
        Представлены лишь часть работ и доступные их части к показу
      </div>
      <ul className="works-list">
        <li className="works-list__work">
          <img src={bloggy} alt="Bloggy" className="works-list__work-img" />
          <p className="works-list__work-title">Bloggy</p>
          <div className="works-list__work-about">
            <span className="works-list__work-style">О проекте:</span> платформа
            для блогов
            <span className="works-list__work-style">
              <br></br>Задачи:
            </span>{" "}
            разработать дизайн-макеты сервиса, реализовать Backend и Frontend
            сервиса
            <span className="works-list__work-style">
              <br></br>Результат:
            </span>{" "}
            спроектирована информационная архитектура, созданы дизайн-макеты
            сервиса, с нуля разработан сервер и клиентская часть проекта
          </div>
          <div className="works-list__work-buttons">
            <a
              href="https://github.com/progeq455/bloggy"
              target="_blank"
              rel="noreferrer"
            >
              <button className="works-list__work-button">GitHub</button>
            </a>
          </div>
        </li>
        <li className="works-list__work">
          <img src={strote} alt="Strote" className="works-list__work-img" />
          <p className="works-list__work-title">Strote</p>
          <div className="works-list__work-about">
            <span className="works-list__work-style">О проекте:</span>{" "}
            веб-сервис для ведения записей и заметок
            <span className="works-list__work-style">
              <br></br>Задачи:
            </span>{" "}
            спроектировать сайт, сделать его прототипы, дизайн-макеты и
            разработать с нуля серверную сторону проекта, подготовить базовую
            клиент-часть сервиса
            <span className="works-list__work-style">
              <br></br>Результат:
            </span>{" "}
            создана информационная архитектура сервиса, созданы прототипы и
            дизайн-макеты, разработан с нуля сервер и разработана базово
            клиент-часть проекта
          </div>
          <div className="works-list__work-buttons">
            <a
              href="https://github.com/progeq455/strote"
              target="_blank"
              rel="noreferrer"
            >
              <button className="works-list__work-button">GitHub</button>
            </a>
          </div>
        </li>
        <li className="works-list__work">
          <img src={cloud} alt="Cloud" className="works-list__work-img" />
          <p className="works-list__work-title">Cloud</p>
          <div className="works-list__work-about">
            <span className="works-list__work-style">О проекте:</span> облачное
            веб-хранилище
            <span className="works-list__work-style">
              <br></br>Задачи:
            </span>{" "}
            разработать Backend и Frontend сервиса
            <span className="works-list__work-style">
              <br></br>Результат:
            </span>{" "}
            создана информационная архитектура, разработаны серверная сторона
            проекта, разработана базово клиентская часть проекта
          </div>
          <div className="works-list__work-buttons">
            <a
              href="https://github.com/progeq455/cloud"
              target="_blank"
              rel="noreferrer"
            >
              <button className="works-list__work-button">GitHub</button>
            </a>
          </div>
        </li>
        <li className="works-list__work">
          <img src={evelop} alt="Evelop" className="works-list__work-img" />
          <p className="works-list__work-title">Evelop</p>
          <div className="works-list__work-about">
            <span className="works-list__work-style">О проекте:</span> сервис
            для работы с задачами и проектами
            <span className="works-list__work-style">
              <br></br>Задачи:
            </span>{" "}
            спроектировать сервис и разработать Backend часть проекта
            <span className="works-list__work-style">
              <br></br>Результат:
            </span>{" "}
            построена информационная архитектура сервиса, с нуля разработан
            сервер проекта, создана основа для разработки уже клиентской части
            проекта
          </div>
          <div className="works-list__work-buttons">
            <a
              href="https://github.com/progeq455/evelop"
              target="_blank"
              rel="noreferrer"
            >
              <button className="works-list__work-button">GitHub</button>
            </a>
          </div>
        </li>
        <li className="works-list__work">
          <img src={tasks} alt="Tasks" className="works-list__work-img" />
          <p className="works-list__work-title">Tasks</p>
          <div className="works-list__work-about">
            <span className="works-list__work-style">О проекте: </span>
            веб-приложение для работы с задачами
            <span className="works-list__work-style">
              <br></br>Задачи:
            </span>{" "}
            разработать клиентскую часть сервиса, реализовать сервер на Google
            Firebase
            <span className="works-list__work-style">
              <br></br>Результат:
            </span>{" "}
            разработать клиентскую часть сервиса, реализовать сервер на Google
            Firebase
          </div>
          <div className="works-list__work-buttons">
            <a
              href="https://github.com/progeq455/tasks"
              target="_blank"
              rel="noreferrer"
            >
              <button className="works-list__work-button">GitHub</button>
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Works;
