
function clearScreen() {
    document.getElementById("result").value = "";
    }
    function back() 
    {
      
        document.getElementById("result").value = document.getElementById("result").value.substr(0 , document.getElementById("result").value.length -1);
       
    }
    function display(value) {
    document.getElementById("result").value += value;
    }
    function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    }
    function calculate()
    {
    let x = document.getElementById("result").value
    let y;
    try {
    y = eval(x)
    } 
    catch (error) {
    document.getElementById("result").value = "Syntax error";
    return;
    }

    document.getElementById("result").value = y 
    }