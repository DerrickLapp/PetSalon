//using jQuery

//Empty Array
let services = [];

//constructor
function Service(servicename,description,price){
    this.servicename=servicename;
    this.description=description;
    this.price=price;

}

function validService(service){
    let isValidName = true;
    let isValidDes = true;
    let isValidPrice = true;

    if(service.servicename == ""){
        //if I get here the description is empty
        isValidName =false;
        $("#sName").css("border","2px solid red");
        $("#nameRequirementText").show();
    }else{
        $("#sName").css("border","1px solid black");
        $("#nameRequirementText").hide();
    }
    if(service.description == ""){
        //if I get here the description is empty
        isValidDes =false;
        $("#sDescript").css("border","2px solid red");
        $("#desRequirementText").show();
    }else{
        $("#sDescript").css("border","1px solid black");
        $("#desRequirementText").hide();
    }
    if(service.price == ""){
        //if I get here the description is empty
        isValidPrice =false;
        $("#sPrice").css("border","2px solid red");
        $("#priceRequirementText").show();
    }else{
        $("#sPrice").css("border","1px solid black");
        $("#priceRequirementText").hide();
    }

    return isValidName && isValidDes && isValidPrice; //&&=AND
}


//register and display

function registerService(){
    //Variables for the HTML elements
    let inputServiceName=$("#sName").val();
    let inputDescript=$("#sDescript").val();
    let inputPrice=$("#sPrice").val();
    let newService=new Service(inputServiceName,inputDescript,inputPrice);
    
    if(validService(newService)){
        save(newService); // this function is on the storeManager
        services.push(newService);//push the newService into array
        displayServices();
        clearServiceForm();
        console.log("A new service was added");
        $("#btn-notification").fadeIn().delay(1000).fadeOut();
    }


}

function displayServices(){
    let serviceList = $("#serviceList").html("");
    let serviceresult="";
    for(let i=0;i<services.length;i++){
        let service=services[i];

        serviceresult = `
            <div id="${i}" class="card col-3 mx-2">
                <div class="card-body">
                    <h5 class="class-title">${service.servicename}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${service.description}</h6>
                    <p class="card-text">$ ${service.price}</p>
                    <button class="btn btn-danger btn-sm">Delete</button>
                </div>
            </div>
        `
        //console.log(serviceresult);
        serviceList.append(serviceresult);
    }

    
}

//Clearing the Form
function clearServiceForm(){
    $("#sName").val("");
    $("#sDescript").val("");
    $("#sPrice").val("");
}

function init(){
    //by default services 
    let service1=new Service("Grooming","Fur Brushing, Cleaning, and Trimming","25");
    let service2=new Service("Nail Trimming","Safely and Carefully trimming those long claws", "10");
    let service3=new Service("Vaccines","Protect your pet!","60");
        
        
    services.push(service1,service2,service3);

    $("#registerBtn").on("click",registerService);

    displayServices();
}

window.onload=init;

//display

console.log(services);
