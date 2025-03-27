document.addEventListener("DOMContentLoaded", () => {
    const petButtons = document.querySelectorAll(".card-actions .btn");
    const petAllButton = document.querySelector("#btn-select-all");
    const unpetAllButton = document.querySelector("#btn-unselect-all");
    const firstButton = document.querySelector("#btn-select-first");
    const lastButton = document.querySelector("#btn-select-last");
    const nextButton = document.querySelector("#btn-select-next");
    const prevButton = document.querySelector("#btn-select-previous");
    const cards = document.querySelectorAll(".card");
    const logo = document.querySelector(".banner-content");


    let selectedCardIndex = 0;

    petButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const icon = button.querySelector("i");
            icon.classList.toggle("fa-regular");
            icon.classList.toggle("fa-solid");
        });
    });

    petAllButton.addEventListener("click", () => {
        petButtons.forEach((button) => {
            const icon = button.querySelector("i");
            if (!icon.classList.contains("fa-solid")) {
                icon.classList.replace("fa-regular", "fa-solid");
            }
        });
    });

    unpetAllButton.addEventListener("click", () => {
        petButtons.forEach((button) => {
            const icon = button.querySelector("i");
            icon.classList.replace("fa-solid", "fa-regular");
        });
    });

    function highlightCard(index) {
        cards.forEach(card => card.classList.remove("card-selected"));
        cards[index].classList.add("card-selected");
        selectedCardIndex = index;
    };

    firstButton.addEventListener("click", () => {
        highlightCard(0);
    });

    lastButton.addEventListener("click", () => {
        highlightCard(cards.length - 1);
    });

    nextButton.addEventListener("click", () => {
        let nextIndex = (selectedCardIndex + 1) % cards.length;
        highlightCard(nextIndex);
    });

    prevButton.addEventListener("click", () => {
        let prevIndex = (selectedCardIndex - 1 + cards.length) % cards.length;
        highlightCard(prevIndex);
    });

    logo.addEventListener("click", () => {
        logo.classList.add("animate__animated", "animate__rubberBand");
        setTimeout(() => {
            logo.classList.remove("animate__animated", "animate__rubberBand");
        }, 1000);
    });

});