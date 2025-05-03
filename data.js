const base = "/artilluminati/";

export const skills = [
    {
        id: "html/css",
        title: "HTML&CSS",
        image: base + "/assets/img/skills/html5_css3_logo.png",
        color: "#e44d26",
    },
    {
        id: "js",
        title: "JavaScript",
        image: base + "/assets/img/skills/js.png",
        color: "#f0db4f",
    },
    {
        id: "php",
        title: "PHP",
        image: base + "/assets/img/skills/php.png",
        color: "#8993be",
    },
    {
        id: "figma",
        title: "Figma",
        image: base + "/assets/img/skills/Figma-logo.svg.png",
        color: "#02d084",
    },
    {
        id: "bs",
        title: "Bootstrap",
        image: base + "/assets/img/skills/bootstrap.png",
        color: "#7411f6",
    },
    {
        id: "react",
        title: "React",
        image: base + "/assets/img/skills/React-icon.svg",
        color: "#61dbfc",
    },
    {
        id: "laravel",
        title: "Laravel",
        image: base + "/assets/img/skills/Laravel.svg",
        color: "#e42c21",
    },
    {
        id: "wp",
        title: "Wordpress",
        image: base + "/assets/img/skills/wordpress.png",
        color: "#21759b",
    },
    {
        id: "vscode",
        title: "VS Code",
        image: base + "/assets/img/skills/vscode.png",
        color: "#40aaf2",
    },
    {
        id: "git",
        title: "Git",
        image: base + "/assets/img/skills/Git_icon.svg",
        color: "rgb(240, 81, 51)",
    },
    {
        id: "py",
        title: "Python",
        image: base + "/assets/img/skills/Python-logo-notext.svg",
        color: "#8993be",
    },
    {
        id: "tailwind",
        title: "Tailwind CSS",
        image: base + "/assets/img/skills/tailwindcss-mark.d52e9897.svg",
        color: "#38bdf8",
    },
    {
        id: "vite",
        title: "Vite",
        image: base + "/assets/img/skills/vite.svg",
        color: "#ffc41c",
    },
    {
        id: "pet",
        title: "pet-проект",
        color: "#ffffff",
    },
];

export const projects = [
    {
        id: 0,
        title: "Онлайн-школа Пуск",
        thumbnail: base + "assets/img/projects/puskschool-thumbnail.png",
        skills: ["laravel", "tailwind", "php", "js", "html/css", "vite"],
        screenshots: base + "assets/img/projects/puskschool.ru_.png",
        description:
            "Верстка адаптивного лендинга с личным кабинетом и страницей курсов, подключением эквайринга.",
        redirect: "https://puskschool.ru/",
    },
    {
        id: 1,
        title: "Cloost SMP",
        thumbnail:
            base + "assets/img/projects/Снимок экрана 2024-07-22 162604.jpg",
        skills: ["html/css", "figma", "js"],
        screenshots:
            base + "assets/img/projects/artilluminati.github.io_cloostsmp_.jpg",
        description:
            "Дизайн и верстка адаптивного landing-page для Minecraft сервера Cloost SMP.",
        redirect: "https://artilluminati.github.io/cloostsmp/",
    },
    {
        id: 2,
        title: "Winstrike Tavern",
        thumbnail: base + "assets/img/projects/winstrike1.jpg",
        skills: ["html/css", "figma", "js", "pet"],
        screenshots:
            base + "assets/img/projects/artilluminati.github.io_winstrike_.jpg",
        description:
            "Дизайн и верстка landing-page для компютерного клуба Winstrike.",
        redirect: "https://artilluminati.github.io/winstrike/",
    },
    {
        id: 3,
        title: "Мой кошелёк",
        thumbnail: base + "assets/img/projects/ws-wallet.jpg",
        skills: ["js", "html/css", "pet"],
        screenshots: base + "assets/img/projects/ws-wallet-full.jpg",
        description: "Приложение для учёта доходов и расходов.",
        redirect: "https://artilluminati.github.io/ws-wallet/",
    },
    {
        id: 4,
        title: "Магазин смартфонов",
        thumbnail: base + "assets/img/projects/ws-mobile-phones-thumbnail.jpg",
        skills: ["js", "html/css", "pet"],
        screenshots: base + "assets/img/projects/ws-mobile-phones.jpg",
        description: "",
        redirect: "https://artilluminati.github.io/ws-mobile-phones/",
    },
    {
        id: 5,
        title: "FlightPool",
        thumbnail: base + "assets/img/projects/flighpool.jpg",
        skills: ["html/css", "figma", "pet"],
        screenshots: base + "assets/img/projects/FlightPool_index.html.jpg",
        description: "",
        redirect: "",
    },
    {
        id: 6,
        title: "Robo.School",
        thumbnail: base + "assets/img/projects/robo.school.jpg",
        skills: ["html/css", "pet"],
        screenshots:
            base +
            "assets/img/projects/artilluminati.github.io_robo-school_.jpg",
        description: "",
        redirect: "https://artilluminati.github.io/robo-school/",
    },
    {
        id: 7,
        title: "BookMe",
        thumbnail: base + "assets/img/projects/bookme_thumbnail.jpg",
        skills: ["laravel", "php", "html/css", "js", "pet"],
        screenshots: [
            base + "assets/img/projects/bookme_home.jpg",
            base + "assets/img/projects/bookme_login.jpg",
            base + "assets/img/projects/bookme_book.jpg",
        ],
        description:
            "Сервис для поиска книг с функционалом сохранения понравившихся в избранное.",
        redirect: "",
    },
    {
        id: 8,
        title: "МастерОК",
        thumbnail: base + "assets/img/projects/ws-masterok_.jpg",
        skills: ["php", "html/css", "js", "pet"],
        screenshots: [
            base + "assets/img/projects/ws-masterok_.jpg",
            base + "assets/img/projects/ws-masterok_orders.php.jpg",
            base + "assets/img/projects/ws-masterok_neworder.php.jpg",
            base + "assets/img/projects/ws-masterok_master.php.jpg",
        ],
        description:
            "Сервис для отправки заявок на ремонт жилых помещений и их обработки в админ-панели.",
        redirect: "",
    },
    {
        id: 9,
        title: "Школьные кружки",
        thumbnail: base + "assets/img/projects/sch49.jpg",
        skills: ["wp", "php", "bs", "html/css"],
        screenshots: [
            base + "assets/img/projects/l98723ad.beget.tech_.jpg",
            base +
                "assets/img/projects/l98723ad.beget.tech_2022_10_20_bcb880-b8bd82b580bdb582b0_.jpg",
            base + "assets/img/projects/l98723ad.beget.tech_form.jpg",
        ],
        description: "Сервис для регистрации в школьные кружки.",
        redirect: "",
    },
];
