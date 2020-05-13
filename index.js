function driver(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    console.log("num1:" + num1 + "\nnum2: " + num2);
}

document.getElementById("submit").addEventListener("click", driver);
