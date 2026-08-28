const slider = document.querySelector(".accueil");

if (slider) {
    slider.addEventListener("wheel", (e) => {
        e.preventDefault();
        slider.scrollLeft += e.deltaY;
    });
}


const archit = document.querySelectorAll(".archi");

archit.forEach(archi => {

    const images = archi.querySelectorAll("img");
    const next = archi.querySelector(".next");
    const prev = archi.querySelector(".prev");

    let index = 0;

    next.onclick = function() {

        images[index].classList.remove("active");

        index++;

        if (index >= images.length) {
            index = 0;
        }

        images[index].classList.add("active");
    };


    prev.onclick = function() {

        images[index].classList.remove("active");

        index--;

        if (index < 0) {
            index = images.length - 1;
        }

        images[index].classList.add("active");
    };

});


const image = document.querySelectorAll(".dessin");

image.forEach(dessin => {

    const images = dessin.querySelectorAll("img");
    const next = dessin.querySelector(".next");
    const prev = dessin.querySelector(".prev");

    let index = 0;

    next.onclick = function() {

        images[index].classList.remove("active");

        index++;

        if (index >= images.length) {
            index = 0;
        }

        images[index].classList.add("active");
    };


    prev.onclick = function() {

        images[index].classList.remove("active");

        index--;

        if (index < 0) {
            index = images.length - 1;
        }

        images[index].classList.add("active");
    };

});