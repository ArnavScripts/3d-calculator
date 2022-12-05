let calculation = "";
let buttons = document.querySelectorAll(".numButton");
Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener("click",(pressedButton)=>{
        if(pressedButton.target.innerHTML=="="){
            calculation=String(eval(calculation))
        }
        else if(pressedButton.target.innerHTML=="AC"){
            calculation=""
        }
        else if(pressedButton.target.innerHTML=="&lt;"){
            calculation = calculation.slice(0,-1);
        }
        else{
            calculation = calculation + pressedButton.target.innerHTML;
        }
        document.getElementById("input").value = calculation;
    })
});