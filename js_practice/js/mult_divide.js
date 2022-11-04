var res = document.getElementById("result");

function multiplyBy() {
    const first = document.getElementById("firstNumber").value;
    const second = document.getElementById("secondNumber").value;
    res.innerText = first * second;
}

function divideBy() {
    const first = document.getElementById("firstNumber").value;
    const second = document.getElementById("secondNumber").value;
    res.innerText = first / second;
}