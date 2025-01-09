function foodSelection(){
    let food = {
        fruits: ["Apple","Banana","Orange"],
        vegetables: ["Carrot","Broccoli","Spinach"]

    }
    let category = $("#category").val();
    let itemDropDown = $("#items");
    itemDropDown.empty();

    console.log(category);
    if(category == "fruits"){
        console.log(food.fruits);
        for(let i=0;i<food.fruits.length;i++){
            itemDropDown.append(`<option value="${food.fruits[i]}">${food.fruits[i]}</option>`)
        }
    }else{
        console.log(food.vegetables);
        for(let i=0;i<food.vegetables.length;i++){
            itemDropDown.append(`<option value="${food.vegetables[i]}">${food.vegetables[i]}</option>`)
        }
    }
}

$("#category").on("change",foodSelection);