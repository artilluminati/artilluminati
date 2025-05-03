import { useEffect } from "react";
import logo from "/logo.svg";
import { useAppContext } from "../../../contexts/AppContext/AppContextProvider";
import MenuIcon from "../../icons/MenuIcon";
import UseScrollBlock from "../../projectFullscreen/UseScrollBlock";
import "./MobileNavMenu.css";

export default function MobileNavMenu({ isLoadAnimating }) {
    const [blockScroll, allowScroll] = UseScrollBlock();
    const { isMenuOpened, toggleMenuOpened } = useAppContext().menuControl;

    useEffect(() => {
        if (isMenuOpened) {
            blockScroll();
        } else {
            allowScroll();
        }
    }, [isMenuOpened]);

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
        <div
            className={
                isMenuOpened ? "mobile-menu mobile-menu-opened" : "mobile-menu"
            }
        >
            <div className="mobile-menu__header">
                <div className="nav__mobile-menu-button">
                    <button onClick={HandleMenuClick}>
                        <MenuIcon />
                    </button>
                </div>
                <div className="nav__logo">
                    <a href="/artilluminati/">
                        <img
                            src={logo}
                            alt="logo"
                            className={
                                isLoadAnimating
                                    ? "mobile-menu__logo-hidden"
                                    : ""
                            }
                        />
                    </a>
                </div>
            </div>
            <div className="mobile-menu__menu container">
                <a
                    href="/artilluminati/"
                    onClick={() => {
                        scrollToElement("top");
                        toggleMenuOpened();
                    }}
                >
                    в начало
                </a>
                <a
                    onClick={() => {
                        scrollToElement("skills");
                        toggleMenuOpened();
                    }}
                >
                    навыки
                </a>
                <a
                    onClick={() => {
                        scrollToElement("projects");
                        toggleMenuOpened();
                    }}
                >
                    портфолио
                </a>
            </div>
        </div>
    );
}
