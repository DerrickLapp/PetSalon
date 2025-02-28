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
function Pet(name,age,gender,type,breed,service,appt){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.type=type
    this.breed=breed;
    this.service=service;
    this.appt=appt;
}

//creating the variables for the HTML Elements
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputType=document.getElementById("txtType");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("txtService");
let inputAppt=document.getElementById("txtAppt");

function register(){
    //create the new pet object
    let newPet=new Pet(inputName.value,inputAge.value,inputGender.value,inputType.value,inputBreed.value,inputService.value,inputAppt.value);

    pets.push(newPet);//push the newpet into array

    //clear the form *OLD*
    /*
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtType").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtService").value="";
    */

    //display the current waitlist length
    //document.getElementById("petListings").innerHTML=`<p>Current wait list: ${pets.length} </p>`;
    
    //display the current array information *OLD*
    //for (i=pets.length-1;i<pets.length;i++){
    //    document.getElementById("specificPets").innerHTML+=`${i+1})<div class="petBlock"> <li>Name:${pets[i].name}</li> <li>Age:${pets[i].age}</li> <li>Gender:${pets[i].gender}</li> <li>Species:${pets[i].type}</li> <li>Breed:${pets[i].breed}</li> <li>Service:${pets[i].service}</li> </div>`
    //}
    //Other displayPetCards
    displayPetRow();
    clearForm();
    $("#btn-notification").fadeIn().delay(1000).fadeOut();
    
}

//Clearing the Form
function clearForm(){
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtType").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtService").value="";
    document.getElementById("txtAppt").value="";
    
}

//Deleting Pets
function deletePet(petId){
    console.log("Pet id:", petId);
    document.getElementById(petId).remove();
    pets.splice(petId,1);
    
    displayPetRow();
    displayInfo();

}

//TODO get services from local Storage
function getServices(){
    console.log("getServices function");

    let services = read();
    let option = "";

    for(let i=0; i<services.length; i++){
        let service = services[i];
        
        option +=
        `
        <option value="${service.servicename}">${service.servicename} - $ ${service.price}</option>
        `
    }

    $("#txtService").append(option);
    
}

function init(){
    //Create a new pet by filling the constructor with arguments
    let pet1=new Pet("Attilla",9,"Female","Cat","Domestic Long Hair","Grooming","Scheduled");
    let pet2=new Pet("Fenrir",5,"Male","Cat","Tuxedo","Nail Trimming","Scheduled");
    let pet3=new Pet("Daisy",15,"Female","Dog","Husky","Vaccines","Walk-in");
    
    
    pets.push(pet1,pet2,pet3);

    //document.getElementById("petListings").innerHTML=`<p>Current wait list: ${pets.length} </p>`;//display the initial waitlist length

    //display the initial array information *OLD*
    //for (i=0;i<pets.length;i++){
    //    document.getElementById("specificPets").innerHTML+=`${i+1})<div class="petBlock"> <li>Name:${pets[i].name}</li> <li>Age:${pets[i].age}</li> <li>Gender:${pets[i].gender}</li> <li>Species:${pets[i].type}</li> <li>Breed:${pets[i].breed}</li> <li>Service:${pets[i].service}</li> </div>`
    //}

    //Other displayPetCards
    //displayPetCards();

    //Displaying Pet Table
    displayPetRow();
    getServices();

}

window.onload=init; //waits until html renders then runs the init function when html is loaded


console.log(pets);

