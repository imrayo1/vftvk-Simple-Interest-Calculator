function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear();
    var verify =  false

    if (principal <= 0)  {
    verify = false
    }
    else {
     verify = true   
    }
    

    interest = principal * years * rate / 100;
    year = new Date().getFullYear() + parseInt(years);

    p = document.getElementById("principal").value;

    
 if (verify == true)  {
     document.getElementById("result").innerHTML = "If you deposit " + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + interest + ",\<br\>in the year " + year + "\<br\>"
    }
    else {
       document.getElementById("result").innerHTML =  "Enter a positve number"
    }
    

}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}