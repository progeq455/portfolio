import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <p className="header-title">Amir Kadyrov</p>
      <nav className="header-list">
        <ul className="header-list__rels">
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li className="header-list__rels-rel">Навыки</li>
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li className="header-list__rels-rel">Работы</li>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li className="header-list__rels-rel">Контакты</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
