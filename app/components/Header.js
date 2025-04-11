import Image from "next/image";
import logo from "../assets/images/logo.png";
import group from "../assets/images/group.png";

export default function Headers() {
  return (
    <header className="w-fixed flex space-between">
      <Image src={logo} alt="Logo" width={205} height={62} className="h-auto" />
      <nav className="space-x-4">
        <ul className="menu">
          <li>
            <a href="#" className="header_text">
              главная
            </a>
          </li>
          <li>
            <a href="#" className="header_text">
              о компании
            </a>
          </li>
          <li>
            <a href="#" className="header_text">
              бренды
            </a>
          </li>
          <li>
            <a href="#" className="header_text">
              видеообучение
            </a>
          </li>
        </ul>
      </nav>
      <div className="contact-info">
        <span className="header_text">тел: +0 (000) 000 00 00</span>
        <span className="header_text"> e-mail: puig@gmail.com</span>
      </div>
      <Image
        src={group}
        alt="group"
        width={149}
        height={170}
        className="h-auto"
      />
    </header>
  );
}
