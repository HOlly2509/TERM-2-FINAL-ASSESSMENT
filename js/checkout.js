let checkoutTotal = 0;

displayCheckout = () =>{

   // let orders = localStorage.getItem("order")

    //let data = JSON.parse(orders)

    //console.log(data)

    let data = JSON.parsel(localStorage.getItem('order'))
    console.log(data);
    let items = document.getElementById('buildMySub')
    let totalArea = document.getElementById ('realTimeOrder')

    for (let i = 0; i < data.length; i ++) {
        let name = sandwhichOrder[i].sandwhichName;
        let bread = sandwhichOrder[i].bread;
        let toppings = sandwhichOrder[i].toppings;
        let sauce = sandwhichOrder[i].subSauce;
        let price = sandwhichOrder[i].sandwhichPrice;

        checkoutTotal += price;

        items.innerHTML += `
        <div class="card">
               <div class="card-body">
                 <h5 >${name}</h5>
                 <p class="card-text"><strong>Bread:</strong> ${bread}</p>
                 <p class="card-text"><strong>Sauce:</strong> ${sauce}</p>
                 <p class="card-text"><strong>Toppings:</strong> ${toppings}</p>
                 <p class="card-text"><strong>Cost:</strong> R${price}.00</p>
               </div>
            </div>
        `

        totalArea.innerHTML = "R" + checkoutTotal + ".00"


    }


}

let promotion = false

enterPromo = () => {

    console.log(promotion);
    let value = document.getElementById('enterPromo').value
    console.log(value);

    let newCost = document.getElementById('newTotal')
    let totalArea = document.getElementById('newTotal')

    if(promotion = false){
        console.log(promotion);
        if(value === 1234){

            let updateTotal = checkoutTotal - 10%
            console.log(updateTotal);

            totalArea.innerHTML = "R" + updateTotal + ".00"

promotion = true
console.log(promotion)
        } else {
            alert("Promo code is invalic")
            promotion = false
        }

    }else {
        console.log("Promo code has already been added");
        alert("This code is not valid")
    }

  

}
