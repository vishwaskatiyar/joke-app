const btnEl = document.getElementById('btn');
const jokeel = document.getElementById('joke');


const apiKey = "EJ1NF5p1yyWviFwSUYtQdg==xayfeWvD8AiGw7wU";
const option = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};
const apiurl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getJoke() {


    try {
        jokeel.innerText = "Updating........"
        btnEl.disabled = true;
        btnEl.innerText = "Loading........"
        const response = await fetch(apiurl, option)
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke"
        jokeel.innerText = data[0].joke;

    } catch (error) {
        jokeel.innerText = "An Error Happends Try Again";

    }





}

btnEl.addEventListener('click', getJoke)