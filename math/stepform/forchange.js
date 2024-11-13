function verify() {
    console.log("a")
    let a = parseInt(elementA.value);
    console.log(a)
    let x =0, y=0, z=0, q=0;

    if (a >= 500) {
        x=Math.floor(a / 500)
        a=a%500
    }
    if (a>=100) {
        y=Math.floor(a / 100)
        a=a%100
    }
    if (a>=10) {
        z=Math.floor(a / 10)
        a=a%10
    }
    if (a>=2) {
        q=Math.floor(a / 2)
        a=a%2
    }

    if (a!=0){
        result = 'разменять невозможно'
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
    }
    else{
        result = x + ' купюр по 500 \n' + y + ' купюр по 100 \n' + z + ' купюр по 10 \n' + q + ' монет по 2 \n' 
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check=true;
    }
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

let check=false;
let messageText = document.getElementById("result").innerText
console.log(console.log)
let result;

const elementA = document.getElementById("a");
elementA.addEventListener('input', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)