const input = document.getElementById('myInput');
const button = document.getElementById('myButton');


button.addEventListener('click', sayhi);

function sayhi() {
    alert(`Привет, ${input.value}! Как твои дела?`);
}
