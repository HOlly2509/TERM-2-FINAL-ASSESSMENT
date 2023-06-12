let sandwhichOrder =[]


buildMySub = () => {

    let sandwhichTotal = 0;

    let sandwhichName = document.getElementById("sandwhichName").value;
    
    let bread = document.getElementById("breads").value

    if(bread === "Brown"){
        sandwhichTotal = sandwhichTotal + 30;
    } else if(bread === "white"){
        sandwhichTotal = sandwhichTotal + 20;
    } else if(bread === "gluten-free"){
        sandwhichTotal = sandwhichTotal + 40;
    }

let breadOption = document.getElementsByName("breadradio");
let breadValue
for(let i = 0; i < breadOption.length; i++){
    if(breadOption[i].checked){
        breadValue= breadOption[i].value
        sandwhichTotal = sandwhichTotal + +breadOption[i].dataset.cost
    }
}

let toppingOptions = document.getElementsByName("toppings");
let topArray = []
for(let i = 0; i < toppingOptions.length; i++){
    if(toppingOptions[i].checked){
        topArray.push(toppingOptions[i].value)
        sandwhichTotal = sandwhichTotal + +toppingOptions[i].dataset.cost
    }
}


sandwhichOrder.push({
    sandwhichName: sandwhichName,
    bread: breadValue,
    toppings: inside,
    sandwhichPrice: sandwhichTotal
})

console.log(sandwhichOrder)

document.getElementById("realTimeCost").innerHTML = "R0.00"
document.getElementById("sandwhichForm").reset();


}



realTimeCost = () => {

    realTimePrice = 0

    let bread = document.getElementById("breads").value;

    if(bread === "Brown"){
        realTimePrice = sandwhichTotal + 30;
    } else if(bread === "white"){
        realTimePrice = sandwhichTotal + 20;
    } else if(bread === "gluten-free"){
        realTimePrice = sandwhichTotal + 40;
    }

    let breadOption = document.getElementsByName("breadradio");
let breadValue
for(let i = 0; i < breadOption.length; i++){
    if(breadOption[i].checked){
        breadValue= breadOption[i].value
        realTimePrice= realTimePrice + +breadOption[i].dataset.cost
    }
}

let toppingOptions = document.getElementsByName("toppings");
for(let i = 0; i < toppingOptions.length; i++){
    if(toppingOptions[i].checked){
        realTimePrice = realTimePrice + +toppingOptions[i].dataset.cost
    }
}


document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + ".00"

}