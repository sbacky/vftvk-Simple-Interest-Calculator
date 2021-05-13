function compute()
{
    // Create variables to input elements principle, rate, and years
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // Use variables to calculate interest
    var interest = principal * years * rate / 100;

    // Convert years to an actually year in the future
    var year = new Date().getFullYear()+parseInt(years);

    // Set text for resulting interest
    document.getElementById("result").innerHTML="If you deposit <mark>" + principal + "</mark>,<br>at an interest rate of <mark>" + rate + "%</mark>.<br>You will receive an amount of <mark>" + interest + "</mark>,<br>in the year <mark>" + year + "</mark>";
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function checkdata() {
    // Get prinicpal element from form
    var principal = document.getElementById("principal");
    
    // Check if principal field is empty
    if(principal.value<1){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    return true;
}
        
