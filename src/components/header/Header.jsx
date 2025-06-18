import logo from "/logo.svg";
import { useAppContext } from "../../contexts/AppContext/AppContextProvider";
// import { styled } from "styled-components";
import "./Header.css";
import LogoAnimated from "../LogoAnimated";
import MenuIcon from "../icons/MenuIcon";
import MobileNavMenu from "./MobileNavMenu/MobileNavMenu";

export default function Header({ isLoadAnimating }) {
    isLoadAnimating = false;

    const { isMenuOpened, toggleMenuOpened } = useAppContext().menuControl;

    const HandleMenuClick = () => {
        toggleMenuOpened();
    };

    function scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <header className="header" id="top">
            <nav className="nav container">
                <div
                    className={
                        isMenuOpened
                            ? "nav__mobile-menu-button nav__mobile-menu-button-opened"
                            : "nav__mobile-menu-button"
                    }
                >
                    <button onClick={HandleMenuClick}>
                        <MenuIcon />
                    </button>
                </div>
                <div className="nav__menu">
                    <a onClick={() => scrollToElement("skills")}>навыки</a>
                    <a onClick={() => scrollToElement("projects")}>проекты</a>
                </div>
                <div className="nav__logo">
                    <a href="/artilluminati/">
                        {/* <img
                            src={logo}
                            alt="logo"
                            className={
                                isLoadAnimating ? "nav__logo-hidden" : ""
                            }
                        /> */}
                        <LogoAnimated />
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

            <MobileNavMenu isLoadAnimating={isLoadAnimating} />

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
