(function () {

    const cards = document.querySelectorAll(".c-card-wrapper"),
        cardsColumn = document.getElementById("cardsColumn");

    let shuffleCards = function () {
        let cardsArray = Array.from(cards);

        cardsColumn.innerHTML = "";
        cardsArray = cardsArray.sort(() => Math.random() - 0.5);
        for (let i = 0; i < cardsArray.length; i++) {
            cardsColumn.innerHTML += cardsArray[i].innerHTML;
        }
    };

    let sortCards = function () {
        let cardsArray = Array.from(cards);

        cardsColumn.innerHTML = "";
        cardsArray = cardsArray.sort((a, b) => b - a);
        for (let i = 0; i < cardsArray.length; i++) {
            cardsColumn.innerHTML += cardsArray[i].innerHTML;
        }
    };

    document.getElementById("shuffleButton").addEventListener("click", shuffleCards);
    document.getElementById("sortButton").addEventListener("click", sortCards);
})();