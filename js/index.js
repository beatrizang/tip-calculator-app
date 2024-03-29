
document.getElementById("bill").addEventListener("keyup",getBill);
document.getElementById("people").addEventListener("keyup",getPeople);
document.getElementById("percent__custom").addEventListener("keyup",getCustom);
document.getElementById("btn__reset").addEventListener("click",reset);

const botones = document.querySelectorAll(".percent__btn");


let bill = 0;
let tipPercent = 0;
let people = 0;

const cambiaColor = function (evento){
    console.log("El procentaje de este boton es: ", this.innertext);
    botones.forEach(boton => {
        boton.style.background = "var(--very-dark-cyan)";
    });
    this.style.background = "var(--strong-cyan)";
}

botones.forEach(boton => {
	//Agregar listener
	boton.addEventListener("click", cambiaColor);
});

function getBill(){
    bill = document.getElementById("bill").value;
    tipAmountPerson();
}

function tip(percent){
    tipPercent = percent;
    tipAmountPerson(); 
}

function getCustom(){
    tipPercent = document.getElementById("percent__custom").value;
    tipAmountPerson();
}

function getPeople(){
    people = document.getElementById("people").value;
    tipAmountPerson();
}

function tipAmountPerson(){
    let tip = bill*(tipPercent/100);
    let total = 0;
    if(people!=0){
        tip /= people;
        total = (bill / people) + tip;
        document.getElementById("result__tip").innerHTML = '$' + tip.toFixed(2);
        document.getElementById("result__total").innerHTML = '$' + total.toFixed(2);

        hideError();
    }
    else{
        showError();
    }

}

function reset(){
    let num = 0;
    document.getElementById("bill").value = '';
    document.getElementById("people").value = '';

    bill = 0;
    tipPercent = 0;
    people = 0;

    botones.forEach(boton => {
        boton.style.background = "var(--very-dark-cyan)";
    });

    document.getElementById("result__tip").innerHTML = '$' + num.toFixed(2);
    document.getElementById("result__total").innerHTML = '$' + num.toFixed(2);
}


function showError(){
    document.getElementById("bill__text__error").style.display = "block";
    document.getElementById("bill__input__error").style.border = "0.15rem solid var(--red)";
}

function hideError(){
    document.getElementById("bill__text__error").style.display = "none";
    document.getElementById("bill__input__error").style.border = "0.15rem solid transparent";
}

