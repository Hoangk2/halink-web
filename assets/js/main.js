const headerHome = getElement(".header");
const footer = getElement(".footer");

function getElement(selector) {
    return document.querySelector(selector);
};

function handleLogicWithData(xhr, element) {
    xhr.onreadystatechange = function () {
       if (this.readyState === 4 && this.status === 200) {
            element.innerHTML = xhr.responseText;
        } 
    };
};

function getDataElement(method, url, callback, element) {
    let xhr = new XMLHttpRequest();
    callback(xhr, element);
    xhr.open(method, url, true);
    xhr.send();
}

const currentPage = window.location.pathname;

if(currentPage === "/index.html" || currentPage === "/design.html") {
    getDataElement("GET", "partials/header_home.html", handleLogicWithData, headerHome);
} else {
    getDataElement("GET", "partials/header_introduce.html", handleLogicWithData, headerHome);
}

getDataElement("GET", "partials/footer.html", handleLogicWithData, footer);
