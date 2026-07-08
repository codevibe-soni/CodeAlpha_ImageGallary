const images = document.querySelectorAll(".images img");
const lightImage = document.querySelector(".lightbox");
const largeImage = document.querySelector(".largeimage");
const closebtn = document.querySelector(".close");
const prevbtn = document.querySelector(".previous");
const nextbtn = document.querySelector(".next");
const navLinks = document.querySelectorAll("nav a");
const imageCards = document.querySelectorAll(".images");

let currentIndx = 0;

// Initially all images are visible
let visibleImages = [...images];

// Image Click Event
images.forEach((image) => {
    image.addEventListener("click", () => {
        lightImage.style.display = "flex";
        largeImage.src = image.src;

        // Find index in currently visible images
        currentIndx = visibleImages.indexOf(image);
    });
});

// Previous Button
prevbtn.addEventListener("click", () => {
    if (currentIndx === 0) {
        currentIndx = visibleImages.length - 1;
    } else {
        currentIndx--;
    }

    largeImage.src = visibleImages[currentIndx].src;
});

// Next Button
nextbtn.addEventListener("click", () => {
    if (currentIndx === visibleImages.length - 1) {
        currentIndx = 0;
    } else {
        currentIndx++;
    }

    largeImage.src = visibleImages[currentIndx].src;
});

// Close Lightbox
closebtn.addEventListener("click", () => {
    lightImage.style.display = "none";
});

// Filter Images
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const filter = link.dataset.filter;

        imageCards.forEach((card) => {
            const cardFilter = card.dataset.category;

            if (filter === "all" || filter === cardFilter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        // Update visible images after filtering
        visibleImages = [];

        imageCards.forEach((card) => {
            if (card.style.display !== "none") {
                visibleImages.push(card.querySelector("img"));
            }
        });
    });
});