const eightBall = ["magic8ball_1.png", "magic8ball_2.png", "magic8ball_4.png", "magic8ball_5.png", "magic8ball_6.png", "magic8ball_7.png", "magic8ball_8.png", "magic8ball_9.png", "magic8ball_10.png", "magic8ball_11.png", "magic8ball_12.png", "magic8ball_13.png", "magic8ball_14.png", "magic8ball_15.png", "magic8ball_16.png", "magic8ball_17.png", "magic8ball_18.png", "magic8ball_19.png", "magic8ball_20.png"];

// const min = 0;
const max = eightBall.length;

const button = document.getElementById('askButton');
const img = document.getElementById('image');
const input = document.getElementById('question');

button.addEventListener('click', function ask() {
    const randomIndex = Math.floor(Math.random() * max);
    const randomBall = eightBall[randomIndex];

    if (input.value === "" || !input.value.endsWith("?")) { alert("WHAT IS YOUR QUESTION?") } else {
        const newInput = input.value;
        input.placeholder = newInput;
        img.classList.add("apply-shake");
        setTimeout(() => {
            img.src = randomBall;
            input.value = "";
        }, 2000);
    }
});

input.addEventListener('click', () => {
    input.value = "";
    img.classList.remove("apply-shake");
});