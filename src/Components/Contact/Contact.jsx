import tg from "../../Images/TG.png";
import ml from "../../Images/ML.png";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <p className="contact-caption">Контакты</p>
      <p className="contact-description">
        Отправьте сообщение, тестовое задание или предложение
      </p>
      <ul className="contact-list">
        <li className="contact-list__element">
          <a
            href="https://telegram.me/amirkadyrovv"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={tg}
              alt="Telegram"
              className="contact-list__element-img"
            />
          </a>
        </li>
        <li className="contact-list__element">
          <a
            href="mailto:amirwork976@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ml} alt="Mail" className="contact-list__element-img" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
