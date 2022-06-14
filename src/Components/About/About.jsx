import { Link } from "react-scroll";
import grafic from "../../Icons/code.png";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-me">
        <p className="about-me__title">Frontend—разработчик</p>
        <span className="about-me__more">
          <span className="about-me__more-decor">Здравствуйте</span>, меня зовут
          Амир. Я{" "}
          <span className="about-me__more-decor">Frontend—разработчик</span>,
          занимаюсь веб-разработкой сервисов и сайтов. В работе применяю{" "}
          <span className="about-me__more-decor">разные</span> решения и{" "}
          <span className="about-me__more-decor">современные </span>
          технологии, <span className="about-me__more-decor">методы</span>{" "}
          разработки веб-приложений
        </span>
        <div className="about-me__actions">
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            duration={500}
          >
            <button
              className="about-me__actions-works"
              style={{ marginRight: "25px" }}
            >
              Работы
            </button>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <button className="about-me__actions-contact">Контакты</button>
          </Link>
        </div>
      </div>
      <img src={grafic} alt="Код" className="about-grafic" />
    </section>
  );
};

export default About;
