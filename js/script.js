{
    const welcome = () => {
        console.log("Witam. Ten kod jest już w repozytorium Git.");
    }

    const toggleBackground = () => {
        const body = document.body;
        const nextColorName = document.querySelector(".js-nextColorName");

        body.classList.toggle("body--grey");
        nextColorName.innerText = body.classList.contains("body--grey") ? "białe" : "szare";
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}