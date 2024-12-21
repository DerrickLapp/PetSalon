let pets = []; //emtpy array
//object literal
let petSalon = {
    name:"The Pretty Precious Pets Salon",
    address:{
        street:"Doggo Way",
        zip:"12123"
    },
    phone:"111-222-3333"
}

console.log(petSalon)

//creating the pets
let pet1 = {
    name:"Attilla",
    age:9,
    gender:"Female",
    service:"Grooming",
    breed:"Cat"
}
let pet2 = {
    name:"Fenrir",
    age:5,
    gender:"Male",
    service:"Nail Trimming",
    breed:"Cat"
}
let pet3 = {
    name:"Daisy",
    age:15,
    gender:"Female",
    service:"Grooming",
    breed:"Dog"
}

pets.push(pet1,pet2,pet3);
console.log(pets);

function displayNames(){
    document.getElementById("petListings").innerHTML+=(`<h2> we have ${pets.length} pets in line!</h2>`);

    for(i=0;i<=pets.length;i++){
        document.getElementById("petListings").innerHTML+=(`<p> ${pets[i].name} </p>`);

    }
    

}

displayNames();

