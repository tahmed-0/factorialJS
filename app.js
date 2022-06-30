
function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }


function myFunction() {
    const num = parseInt(document.getElementById("num").value);
    const result = factorialize(num);

   document.getElementById("results").innerHTML = "Factorial of " + num + " is "+ result;

}


function myClear() {
    document.getElementById("num").value = "";
    document.getElementById("results").innerHTML = "";



}



