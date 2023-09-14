let filters = document.querySelectorAll(".filter span");
let images = Array.from(document.images);

filters.forEach((element) => {
    element.onclick = function () {
        removeActive();
        this.classList.add("active");
        let cat = this.getAttribute("id");
        removeImages();
        images.forEach((img) => {
            if (img.classList.contains(cat)) {
                img.style.display = "block";
            }
        })
    };
})

function removeActive() {
    filters.forEach((element) => {
        element.classList.remove("active");
    })
}

function removeImages() {
    images.forEach((img) => {
        img.style.display = "none";
    })
}