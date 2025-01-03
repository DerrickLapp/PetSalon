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

//Object constructor
function Pet(name,age,gender,type,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.type=type
    this.breed=breed;
    this.service=service;
}

//creating the variables for the HTML Elements
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputType=document.getElementById("txtType");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("txtService");

function register(){
    //create the new pet object
    let newPet=new Pet(inputName.value,inputAge.value,inputGender.value,inputType.value,inputBreed.value,inputService.value);

    pets.push(newPet);//push the newpet into array

    //clear the form *OLD*
    //document.getElementById("txtName").value="";
    //document.getElementById("txtAge").value="";
    //document.getElementById("txtGender").value="";
    //document.getElementById("txtType").value="";
    //document.getElementById("txtBreed").value="";
    //document.getElementById("txtService").value="";
    
    document.getElementById("petListings").innerHTML=`<p>Current wait list: ${pets.length} </p>`;//display the current waitlist length
    
    //display the current array information *OLD*
    //for (i=pets.length-1;i<pets.length;i++){
    //    document.getElementById("specificPets").innerHTML+=`${i+1})<div class="petBlock"> <li>Name:${pets[i].name}</li> <li>Age:${pets[i].age}</li> <li>Gender:${pets[i].gender}</li> <li>Species:${pets[i].type}</li> <li>Breed:${pets[i].breed}</li> <li>Service:${pets[i].service}</li> </div>`
    //}
    //Other displayPetCards
    displayPetRow();
    clearForm();
    
    
}

function clearForm(){
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtType").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtService").value="";
    
}

function init(){
    //Create a new pet by filling the constructor with arguments
    let pet1=new Pet("Attilla",9,"Female","Cat","Domestic Long Hair","Grooming");
    let pet2=new Pet("Fenrir",5,"Male","Cat","Tuxedo","Nail Trimming");
    let pet3=new Pet("Daisy",15,"Female","Dog","Husky","Vaccines");
    
    
    pets.push(pet1,pet2,pet3);

    document.getElementById("petListings").innerHTML=`<p>Current wait list: ${pets.length} </p>`;//display the initial waitlist length

    //display the initial array information *OLD*
    //for (i=0;i<pets.length;i++){
    //    document.getElementById("specificPets").innerHTML+=`${i+1})<div class="petBlock"> <li>Name:${pets[i].name}</li> <li>Age:${pets[i].age}</li> <li>Gender:${pets[i].gender}</li> <li>Species:${pets[i].type}</li> <li>Breed:${pets[i].breed}</li> <li>Service:${pets[i].service}</li> </div>`
    //}

    //Other displayPetCards
    //displayPetCards();

    //Displaying Pet Table
    displayPetRow();


}

window.onload=init; //waits until html renders then runs the init function when html is loaded


console.log(pets);

