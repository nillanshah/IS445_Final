function driver(){

    var message_num1 = "";
    var message_num2 = "";

    var raw_num1 = document.getElementById("num1").value
    var raw_num2 = document.getElementById("num2").value


    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if(isNaN(num1)){
        message_num1 = "Number 1 input " + raw_num1 + " is not a valid  number";
    } else if (num1 < 2 || num1 > 100){
        message_num1 = "Number 1 input " + num1 + " is not within the range 2 and 100.";
    }

    if(isNaN(num2)){
        message_num2 = "\nNumber 2 input " + raw_num2 + " is not a valid  number";
    } else if (num2 < 2 || num2 > 100){
        message_num2 = "\nNumber 2 input " + num2 + " is not within the range 2 and 100.";
    }

    document.getElementById("message").innerHTML = "<p style = 'color: red;'>" + message_num1 + "<br>" + message_num2 + "</p>";
    var success_message = "";
    evens = [];

    if (message_num1.length == 0 & message_num2.length == 0){

        if(num1 > num2){
            for (i = num2; i <= num1; i++){
                if (i % 2 == 0){
                    evens.push(i);
                }
            }
        } else {
            for (i = num1;  i <= num2; i++){
                if (i % 2 == 0){
                    evens.push(i);
                }
            }
        }

        var size = "<p class = 'text-info'>There are " + evens.length + " even numbers.</p>" 
        
        document.getElementById("message").innerHTML = size + "<p class = 'text-success'>" + evens+ "</p>";
    }

}

document.getElementById("submit").addEventListener("click", driver);
