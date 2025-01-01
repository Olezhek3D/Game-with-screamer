document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btnPlay");
    const screamerSound = document.getElementById("screamerSound");
    const screamerKid = document.getElementById("screamerKid");
    const restart = document.querySelector(".restart");
    const footer = document.getElementById("footer")
    
    let screamerIndex = Math.floor(Math.random() * buttons.length);

    // Добавляем обработчик событий для всех кнопок
    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            if (index === screamerIndex) {
                // Скример
                screamerSound.play();
                screamerKid.style.display = "block";
                document.body.style.backgroundColor = "black";

                // Скрыть все кнопки
                buttons.forEach((btn) => btn.style.display = "none");
                // Показать кнопку "Play Again" через 6 секунд
                setTimeout(() => {
                    screamerKid.style.display = "none";
                    restart.classList.add("show"); // Отображаем кнопку
                }, 6000);
            } else {
                // Скрыть нажатую кнопку
                this.style.display = "none";
            }
        });
    });

    // Обработчик для кнопки "Play Again"
    restart.addEventListener("click", () => {
        document.body.style.backgroundColor = "rgb(104, 174, 174)";
        restart.classList.remove("show"); // Скрываем кнопку

        // Показать кнопки
        buttons.forEach((btn) => {
            btn.style.display = "flex";
        });

        // Выбрать новую кнопку для скримера
        screamerIndex = Math.floor(Math.random() * buttons.length);
    });
});
