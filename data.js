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
        id: "py",
        title: "Python",
        image: base + "/assets/img/skills/Python-logo-notext.svg",
        color: "#8993be",
    },
    {
        id: "electron",
        title: "Electron JS",
        image:
            base +
            "/assets/img/skills/Electron_Software_Framework_Logo.svg.png",
        color: "#47848f",
    },
    {
        id: "tailwind",
        title: "Tailwind CSS",
        image: base + "/assets/img/skills/tailwindcss-mark.d52e9897.svg",
        color: "#38bdf8",
    },
    {
        id: "git",
        title: "Git",
        image: base + "/assets/img/skills/Git_icon.svg",
        color: "rgb(240, 81, 51)",
    },
    {
        id: "wp",
        title: "Wordpress",
        image: base + "/assets/img/skills/wordpress.png",
        color: "#21759b",
    },
    {
        id: "bs",
        title: "Bootstrap",
        image: base + "/assets/img/skills/bootstrap.png",
        color: "#7411f6",
    },
];

export const projects = [
    {
        id: 0,
        title: "Доставка От Бабушки",
        thumbnail:
            base +
            "assets/img/projects/dostavka-ot-babushki.netlify.app_ (1).png",
        skills: ["react", "tailwind", "js", "html/css"],
        screenshots: [
            base +
                "assets/img/projects/dostavka-ot-babushki.netlify.app_ (1).png",
            base +
                "assets/img/projects/dostavka-ot-babushki.netlify.app_ (2).png",
            base +
                "assets/img/projects/dostavka-ot-babushki.netlify.app_ (3).png",
        ],
        description:
            "Верстка лендинга сервиса доставки продуктов с каталогом и корзиной",
        redirect: "https://dostavka-ot-babushki.netlify.app/",
    },
    {
        id: 10,
        title: "Онлайн-школа Пуск",
        thumbnail: base + "assets/img/projects/puskschool-thumbnail.png",
        skills: ["laravel", "tailwind", "php", "js", "html/css"],
        screenshots: base + "assets/img/projects/puskschool.ru_.png",
        description:
            "Верстка адаптивного лендинга с личным кабинетом и страницей курсов, подключением эквайринга.",
        redirect: "https://puskschool.ru/",
    },
    {
        id: 9,
        title: "Cloost SMP Launcher",
        thumbnail: base + "assets/img/projects/smp-launcher-1.png",
        skills: ["electron", "react", "html/css", "figma", "js"],
        screenshots: [
            base + "assets/img/projects/smp-launcher-1.png",
            base + "assets/img/projects/smp-launcher-2.png",
            base + "assets/img/projects/smp-launcher-3.png",
        ],
        description: "Minecraft лаунчер специально для сервера Cloost SMP. ",
        redirect: "https://artilluminati.github.io/cloostsmp/",
    },
    {
        id: 8,
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
        id: 7,
        title: "Winstrike Tavern",
        thumbnail: base + "assets/img/projects/winstrike1.jpg",
        skills: ["html/css", "figma", "js"],
        screenshots:
            base + "assets/img/projects/artilluminati.github.io_winstrike_.jpg",
        description:
            "Дизайн и верстка landing-page для компютерного клуба Winstrike.",
        redirect: "https://artilluminati.github.io/winstrike/",
    },
    {
        id: 6,
        title: "Мой кошелёк",
        thumbnail: base + "assets/img/projects/ws-wallet.jpg",
        skills: ["js", "html/css"],
        screenshots: base + "assets/img/projects/ws-wallet-full.jpg",
        description:
            "Небольшое приложение для учёта доходов и расходов, с хранением данных в localStorage.",
        redirect: "https://artilluminati.github.io/ws-wallet/",
    },
    // {
    //     id: 5,
    //     title: "Магазин смартфонов",
    //     thumbnail: base + "assets/img/projects/ws-mobile-phones-thumbnail.jpg",
    //     skills: ["js", "html/css"],
    //     screenshots: base + "assets/img/projects/ws-mobile-phones.jpg",
    //     description: "",
    //     redirect: "https://artilluminati.github.io/ws-mobile-phones/",
    // },
    {
        id: 5,
        title: "Mango",
        thumbnail: base + "assets/img/projects/Mango_index.html.png",
        skills: ["html/css", "js"],
        screenshots: base + "assets/img/projects/Mango_index.html.png",
    },
    {
        id: 4,
        title: "FlightPool",
        thumbnail: base + "assets/img/projects/flighpool.jpg",
        skills: ["html/css", "figma"],
        screenshots: base + "assets/img/projects/FlightPool_index.html.jpg",
        description: "",
        redirect: "",
    },
    {
        id: 3,
        title: "Robo.School",
        thumbnail: base + "assets/img/projects/robo.school.jpg",
        skills: ["html/css"],
        screenshots:
            base +
            "assets/img/projects/artilluminati.github.io_robo-school_.jpg",
        description: "",
        redirect: "https://artilluminati.github.io/robo-school/",
    },
    {
        id: 2,
        title: "BookMe",
        thumbnail: base + "assets/img/projects/bookme_thumbnail.jpg",
        skills: ["laravel", "php", "html/css", "js"],
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
        id: 1,
        title: "МастерОК",
        thumbnail: base + "assets/img/projects/ws-masterok_.jpg",
        skills: ["php", "html/css", "js"],
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
        id: 0,
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
