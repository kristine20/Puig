"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import logo from "../../assets/images/logo.png";
import "./Header.css";

export default function Headers() {
  const fullPath = `M178.5,202.8c0-48.9-33.7-71.2-72.6-79.7c-17.4-3.7-26.6-18-26.6-35c0-17.4,13.4-33.7,44.7-33.7 c51,0,105.3,58,105.3,122.1c0,60.9-44,70-44,123.3c0,40.8,27.7,79,77.1,79c49.5,0,77.2-38.1,77.2-79c0-55.5-44.3-61.2-44.3-121.5 c0-63.2,52-123.3,108.5-123.3c19.8,0,42.6,8.1,42.6,33.1c0,37.2-51.7,33.9-71.8,52.6c-17.7,16.4-25.2,35.2-25.2,62.6 c0,26.3,19.1,58.6,19.1,116.8c0,41.7-30.2,97.8-106.5,97.8S134,367.7,134,301c0-31.6,13.9-45.1,13.9-91.6 c0-34.4-27.2-52.9-49.6-52.9s-45.1,12.8-45.1,45.6c0,34,32.8,54.5,39.2,82.5c2,9.1,4.9,30.1,6,41.9c7.5,79.3,80.1,125.5,164.1,125.5 c99.5,0,139.4-65.7,139.4-123.7c0-41.2-18.8-72.1-18.8-119.7c0-39.6,33.4-52.2,51.8-52.2s42.8,13.9,42.8,44.3 c0,34.5-27.6,49.8-37,74.1c-7.2,18.7-9.4,25.2-9.4,72c0,53.4-47.7,137.3-169.3,137.3c-89,0-205-37.4-205-171.9 c0-21.1-11.3-32.5-22.3-32.5S8.9,290.1,8.9,322c0,80.3,84.1,195.2,253.5,195.3c134.7,0,203.9-78.8,203.9-198.2 c0-29.5,14.3-39.3,24.5-39.3s22.5,8.7,22.5,38.4c0,136.9-94.1,228.1-250.8,228.1l0,0c-9.8,0-17.8,8-17.8,17.8s8,17.8,17.8,17.8 c9.8,0,17.8-8,17.8-17.8s-8-17.8-17.8-17.8c-7.9,0-14.3,6.4-14.3,14.3c0,6,4.8,10.8,10.8,10.8c4,0,7.3-3.3,7.3-7.3s-3.3-7.3-7.3-7.3 s-7.3,3.3-7.3,7.3`; // your full `d` value
  const segments = fullPath.split(/(?=[A-Za-z])/);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visiblePath, setVisiblePath] = useState(fullPath);
  const [showExtraPaths, setShowExtraPaths] = useState(true);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showSvg, setShowSvg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;

      const totalSegments = segments.length;
      const visibleCount = Math.max(
        1,
        Math.floor(totalSegments * (1 - scrollFraction))
      );

      const newPath = segments.slice(0, visibleCount).join("");
      setVisiblePath(newPath);

      setShowSvg(scrollTop > 100);
      setShowExtraPaths(scrollTop < maxScroll - 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-fixed flex pt-1">
      <div className="w-30">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={205}
            height={62}
            className={`logo ${showSvg ? "mobile-logo-img" : ""}`}
          />
        </Link>
      </div>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </button>
      <div className="nav-wrapper">
        <div className={`mobile-menu  ${menuOpen ? "open" : ""}`}>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            X
          </button>

          <div className="mobile-logo">
            <Link href="/">
              {" "}
              <Image
                src={logo}
                alt="Logo"
                width={205}
                height={62}
                className={`logo`}
                style={{ paddingTop: "50px" }}
              />
            </Link>
          </div>
          <nav className={`nav`}>
            <ul className="menu">
              <li>
                <Link href="/" className="header_text">
                  главная
                </Link>
              </li>
              <li className="submenu-parent">
                <Link
                  href="/"
                  className="header_text submenu-toggle"
                  onClick={() => setShowSubmenu((prev) => !prev)}
                >
                  о компании
                </Link>
              </li>
              <li>
                <Link href="/" className="header_text">
                  бренды
                </Link>
              </li>
              <li>
                <Link href="/" className="header_text">
                  видеообучение
                </Link>
              </li>
            </ul>
            {/* 
          {showSubmenu && (
            <ul className="submenu">
              <li>
                <a href="#" className="header_text">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#" className="header_text">
                  Governance
                </a>
              </li>
              <li>
                <a href="#" className="header_text">
                  Ethical Code
                </a>
              </li>
              <li>
                <a href="#" className="header_text">
                  Invisible Beauty
                </a>
              </li>
              <li>
                <a href="#" className="header_text">
                  Worldwide Presence
                </a>
              </li>
              <li>
                <a href="#" className="header_text">
                  Our History
                </a>
              </li>
            </ul>
          )} */}
          </nav>
          <div className="mobile-contact-info">
            <span className="header_text">тел: +0 (000) 000 00 00</span>
            <span className="header_text">e-mail: puig@gmail.com</span>
          </div>
        </div>

        <div className="contact-info">
          <span className="header_text">тел: +0 (000) 000 00 00</span>
          <span className="header_text"> e-mail: puig@gmail.com</span>
        </div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 521.6 589.6"
          className={`animation-logo ${showSvg ? "visible" : ""}`}
          fill="none"
        >
          <path
            d={visiblePath}
            fill="none"
            stroke="#D0CAC2"
            strokeWidth="14"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          {showExtraPaths && (
            <>
              <path
                d="M159.6,282.4c0-32.6,12.4-38.3,12.4-79.6"
                fill="none"
                stroke="#D0CAC2"
                strokeWidth="1"
                strokeMiterlimit="10"
                pathLength="1"
                strokeLinecap="round"
              />
              <path
                d="M159.6,282.4c0-10.7,25.4-54.4,25.4-79.6"
                fill="none"
                stroke="#D0CAC2"
                strokeWidth="1"
                strokeMiterlimit="10"
                pathLength="1"
                strokeLinecap="round"
              />
              <path
                d="M160.3,276.7c0-19,13.2-34.1,13.2-73.9"
                fill="none"
                stroke="#D0CAC2"
                strokeWidth="2"
                strokeMiterlimit="10"
                pathLength="1"
                strokeLinecap="round"
              />
              <path
                d="M160.3,276.7c0-10.6,23.3-48.7,23.3-73.9"
                fill="none"
                stroke="#D0CAC2"
                strokeWidth="2"
                strokeMiterlimit="10"
                pathLength="1"
                strokeLinecap="round"
              />
              <path
                d="M164.2,262.7c0-11.3,12.1-20.1,12.1-59.9"
                fill="none"
                stroke="#D0CAC2"
                strokeWidth="5"
                strokeMiterlimit="10"
                pathLength="1"
                strokeLinecap="round"
              />
              <path
                d="M164.2,262.7c0-7.4,16.5-34.7,16.5-59.9"
                fill="none"
                stroke="#D0CAC2"
                strokeWidth="5"
                strokeMiterlimit="10"
                pathLength="1"
                strokeLinecap="round"
              />

              <path
                d="M264,173.4c0-13.3,4.6-59.8,33.6-88.8l0,0c19.3-19.3,19.3-50.7,0-70.1c-19.3-19.3-50.7-19.3-70.1,0 c-19.3,19.3-19.3,50.7,0,70.1l0,0c29,29,33.6,75.5,33.6,88.8s-4.6,59.8-33.6,88.8h0c-19.3,19.3-19.3,50.7,0,70.1 c19.3,19.3,50.7,19.3,70.1,0c19.3-19.3,19.3-50.7,0-70.1C268.6,233.2,264,186.7,264,173.4z M262.5,322c-13.7,0-24.8-11.1-24.8-24.8 s11.1-24.8,24.8-24.8c13.7,0,24.8,11.1,24.8,24.8S276.2,322,262.5,322z"
                fill="#D0CAC2"
              />

              <path
                d="M159.6,282.4c0,1.7-0.8,7.5-4.4,11.1h0c-2.4,2.4-2.4,6.3,0,8.8c2.4,2.4,6.3,2.4,8.8,0s2.4-6.3,0-8.8 C160.4,289.9,159.6,284.1,159.6,282.4z"
                fill="#D0CAC2"
              />
            </>
          )}
        </svg>

      </div>
    </header>
  );
}
