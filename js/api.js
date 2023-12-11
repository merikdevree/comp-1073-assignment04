// constants for text output
const joke = document.getElementById('joke');
const jokeBtn = document.querySelector('button');
const studentNumber = document.getElementById('studentNumber');

jokeBtn.addEventListener('click', generateJoke);

function generateJoke() {
    // set header for the API
    const setHeader = {
        headers: {
            Accept: 'application/json'
        }
    }

    // fetch the API
    fetch('https://icanhazdadjoke.com', setHeader)
        // convert the response to json
        .then((res) => res.json())
        // output the joke
        .then((data) => {
            joke.innerHTML = data.joke;
        })
        // catch errors
        .catch((error) => {
            console.log(error);
        });
    // output student number
    studentNumber.innerHTML = 'Merik de Vree 200462061';
};