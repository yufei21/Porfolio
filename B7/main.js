function inline() {
    document.getElementById("print").innerText = ("Hello World!");
}

function maxmin() {
    var input = document.getElementById("num1").value;
    var numbers = input.split(" ").map(Number).filter(n => !isNaN(n));

    let max = numbers[0];
    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    document.getElementById("ketqua").innerText = "Số lớn nhất: " + max + ", Số bé nhất: " + min;
}


function checkGuess() {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    var input = document.getElementById("guessInput").value;
    var guess = parseInt(input);


    if (guess < 0 || guess > 10) {
        document.getElementById('ketquadudoan').innerText = "Vui lòng nhập số bất kì từ 1 đến 10";
        return;
    }

    if (guess === randomNumber) {
        document.getElementById('ketquadudoan').innerText = "Đúng";
    }
    else {
        document.getElementById('ketquadudoan').innerText = "Sai. Số đúng là: " + randomNumber;
    }
}