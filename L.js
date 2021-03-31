function ucant() {
    alert("Ась? В смысле? Это тут работать не будет, это для лабы по ооп было...");
}

function fckU(pepkeck) {
    alert(pepkeck);
}

function dorandom() {

    var url = "https://api.random.org/json-rpc/2/invoke";
    var n = 0;
    var min = 0;
    var max = 0;
    console.log(typeof n);

    n = Number(document.getElementById("n").value);
    min = Number(document.getElementById("min").value);
    max = Number(document.getElementById("max").value);

    console.log(typeof n);
    console.log(n + min + max);

    if (isNaN(n) || isNaN(min) || isNaN(max)) {
        fckU("Енто должны быть числа!!1\nЖелательно целые.");
        return;
    }
    if (n < 1) {
        fckU("Укажите сколько рандомить, ну же...");
        return;
    }
    if ((max - min) < 1) {
        fckU("Чччеееел, нормально поля заполнить надо.");
        return;
    }
    if (n > 1 + max - min) {
        fckU("Чччеееел, мы тут рандомим за разнообразие, так что повторяться они не могут.\nТак что слишком много указано для такого маленького диапазона.");
        return;
    }
    
    var pep = {
        "jsonrpc": "2.0",
        "method": "generateIntegers",
        "params": {
            "apiKey": "00d79163-e0e4-405d-ba4e-859df106d6eb",
            "n": n,
            "min": min,
            "max": max,
            "replacement": false
        },
        "id": 0
    }

    var options = {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(pep)
    }

    console.log(options);

    fetch(url, options)
        .then(function (response) {
            var a = response.json()
            console.log("T1");
            console.log(a);
            return a;
        })
        .then(function (data) {
            console.log("T2");
            var list = document.getElementById("list");

            for (var i = list.children.length; i > 0; i--)
                list.children[0].remove();

            for (var i = 0; i < data.result.random.data.length; i++) {
                var element = document.createElement('li');
                element.innerText = data.result.random.data[i];
                console.log(list.appendChild(element));
            }

            //document.body.style.background = "#00FF00";
        })
        .catch(function (error) {
            console.log("error", error);
            //document.body.style.background = "#FF0000";
        });



}