// Renderiza la carta completa a partir de menuData (menu-data.js)

(function () {
    // menuData, categoryTitles y groupLabels los define el archivo de datos cargado antes que este script
    // (menu-data.js, menu-data-en.js o menu-data-de.js)
    const nav = document.getElementById("categoryNav");
    const main = document.getElementById("menuContainer");

    // Categoría a partir de la cual empieza cada bloque temático (mismo orden en los 3 idiomas)
    const groupBreaks = {
        cafes: "bebidas",
        tostadasBasicas: "desayunos",
        croissants: "dulces"
    };

    // Categorías que se muestran como tarjetas de "para compartir" (nombre + descripción + precio destacado)
    const boardCategories = { tablasParaCompartir: true };

    function formatPrecio(precio) {
        return precio.toFixed(2).replace(".", ",") + "€";
    }

    function crearItemFoto(item) {
        const el = document.createElement("article");
        el.className = "card-big";
        let html = '<img src="' + item.imagen + '" alt="' + item.nombre + '">' +
            '<div class="big-info">' +
                '<div class="big-header">' +
                    '<h3 class="big-title">' + item.nombre + "</h3>" +
                    '<span class="big-price">' + formatPrecio(item.precio) + "</span>" +
                "</div>";
        if (item.descripcion) {
            html += '<div class="big-desc">' + item.descripcion + "</div>";
        }
        html += "</div>";
        el.innerHTML = html;
        return el;
    }

    function crearItemBoard(item) {
        const el = document.createElement("div");
        el.className = "board-card";
        el.innerHTML =
            '<div class="board-head">' +
                '<div class="item-main">' +
                    '<span class="item-name">' + item.nombre + "</span>" +
                    (item.descripcion ? '<span class="item-desc">' + item.descripcion + "</span>" : "") +
                "</div>" +
                '<span class="item-price">' + formatPrecio(item.precio) + "</span>" +
            "</div>";
        return el;
    }

    function crearItem(item) {
        if (item.imagen) return crearItemFoto(item);

        const el = document.createElement("div");
        el.className = "item";
        el.innerHTML =
            '<div class="item-main">' +
                '<span class="item-name">' + item.nombre + "</span>" +
                (item.descripcion ? '<span class="item-desc">' + item.descripcion + "</span>" : "") +
            "</div>" +
            '<span class="leader"></span>' +
            '<span class="item-price">' + formatPrecio(item.precio) + "</span>";
        return el;
    }

    Object.keys(menuData).forEach(function (key, index) {
        const items = menuData[key];
        const titulo = categoryTitles[key] || key;
        const id = "cat-" + key;

        const tab = document.createElement("a");
        tab.href = "#" + id;
        tab.className = "nav-tab";
        tab.textContent = titulo;
        nav.appendChild(tab);

        if (groupBreaks[key] && groupLabels[groupBreaks[key]]) {
            const groupTitle = document.createElement("p");
            groupTitle.className = "group-title";
            groupTitle.textContent = "— " + groupLabels[groupBreaks[key]] + " —";
            main.appendChild(groupTitle);
        }

        const section = document.createElement("section");
        section.id = id;
        section.className = "menu-category";

        const catHead = document.createElement("div");
        catHead.className = "cat-head";
        catHead.innerHTML =
            '<span class="cat-num">' + String(index + 1).padStart(2, "0") + "</span>" +
            '<h2 class="cat-title">' + titulo + "</h2>";
        section.appendChild(catHead);

        const rule = document.createElement("div");
        rule.className = "cat-rule";
        section.appendChild(rule);

        const contentBox = document.createElement("div");
        const esBoard = !!boardCategories[key];
        const soloListaSimple = !esBoard && items.every(function (item) { return !item.descripcion && !item.imagen; });
        contentBox.className = soloListaSimple ? "content-box grid-list" : "content-box";

        const itemsOrdenados = items.slice().sort(function (a, b) {
            return (b.imagen ? 1 : 0) - (a.imagen ? 1 : 0);
        });
        itemsOrdenados.forEach(function (item) {
            contentBox.appendChild(esBoard ? crearItemBoard(item) : crearItem(item));
        });

        section.appendChild(contentBox);
        main.appendChild(section);
    });

    // Ajusta la posición del nav sticky a la altura real del header negro
    function actualizarAlturaHeader() {
        const header = document.querySelector("header");
        document.documentElement.style.setProperty("--header-height", header.offsetHeight + "px");
    }
    actualizarAlturaHeader();
    window.addEventListener("resize", actualizarAlturaHeader);

    // Resalta la pestaña de la categoría visible al hacer scroll
    const tabs = nav.querySelectorAll(".nav-tab");
    const sections = main.querySelectorAll(".menu-category");

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                tabs.forEach(function (t) { t.classList.remove("active"); });
                const activeTab = nav.querySelector('a[href="#' + entry.target.id + '"]');
                if (activeTab) {
                    activeTab.classList.add("active");
                    activeTab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                }
            }
        });
    }, { rootMargin: "-20% 0px -70% 0px" });

    sections.forEach(function (s) { observer.observe(s); });

    // Al pulsar una pestaña, hace scroll suave hasta la categoría
    tabs.forEach(function (tab) {
        tab.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.getElementById(tab.getAttribute("href").substring(1));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
})();
