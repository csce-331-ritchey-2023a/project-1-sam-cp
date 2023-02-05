var currentStylesheet;

function init(subdirectory) {
    currentStylesheet = localStorage.getItem("stylesheet");
    if (currentStylesheet === null) {
        currentStylesheet = "style1.css";
        localStorage.setItem("stylesheet", currentStylesheet);
    }

    document.querySelector("link").setAttribute("href", (subdirectory ? "../" : "") + "resources/" + currentStylesheet);
}

function toggle(subdirectory) {
    if (currentStylesheet == "style1.css") {
        currentStylesheet = "style2.css";
    } else {
        currentStylesheet = "style1.css";
    }

    localStorage.setItem("stylesheet", currentStylesheet);
    document.querySelector("link").setAttribute("href", (subdirectory ? "../" : "") + "resources/" + currentStylesheet);
}