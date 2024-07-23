import logo from "/logo.svg";
// import { styled } from "styled-components";
import "./Header.css";
import LogoAnimated from "../LogoAnimated";

export default function Header({ isLoadAnimating }) {
    // isLoadAnimating = true;

    return (
        <header className="header">
            <nav className="nav container">
                <div className="nav__menu">
                    <a href="/">главная</a>
                    <a href="/#skills">навыки</a>
                    <a href="/#projects">портфолио</a>
                </div>
                <div className="nav__logo">
                    <a href="/">
                        <img
                            src={logo}
                            alt="logo"
                            className={
                                isLoadAnimating ? "nav__logo-hidden" : ""
                            }
                        />
                    </a>
                </div>
                <div className="nav__languages">{/* <button></button> */}</div>
            </nav>
            <div
                className={
                    isLoadAnimating
                        ? "logo-animation logo-animation-add"
                        : "logo-animation nav__logo-hidden"
                }
            >
                <LogoAnimated />
            </div>
            <script>
                {window.setTimeout(() => {
                    localStorage.setItem(
                        "isLoadAnimating",
                        JSON.stringify(true)
                    );
                }, 3000)}
            </script>
        </header>
    );
}
