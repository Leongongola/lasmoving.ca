function fifthfaq() {
    var x = document.getElementById("fifthfaq");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function firstfaq() {
    var x = document.getElementById("firstfaq");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function secondfaq() {
    var x = document.getElementById("secondfaq");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function thirdfaq() {
    var x = document.getElementById("thirdfaq");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function fourthfaq() {
    var x = document.getElementById("fourthfaq");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";

    }
}



const navmenu = document.querySelector("#navmenu");
navmenu.addEventListener("click", () => {
    navmenu.classList.toggle("active");
});

function menu() {
    var x = document.querySelector(".menu-list");

    if (x.style.display === "block") {
        x.style.display = "none";

    } else {
        x.style.display = "block";


    }
}

const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e => {
    let scHeight = e.target.scrollHeight;

})