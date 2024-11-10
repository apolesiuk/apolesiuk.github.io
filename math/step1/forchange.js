function verify() {
    console.log("a")
    let a = parseInt(elementA.innerText);
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
    }
    else{
        result = x + ' купюр по 500 \n' + y + ' купюр по 100 \n' + z + ' купюр по 10 \n' + q + ' монет по 2 \n' 
    }
    
    document.getElementById("result").innerText =  result;
}

const elementA = document.getElementById("a");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
