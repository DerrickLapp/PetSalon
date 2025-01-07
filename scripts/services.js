//using jQuery

//Empty Array
let services = [];

//constructor
function Service(servicename,description,price){
    this.servicename=servicename
    this.description=description;
    this.price=price;

}

//Variables for the HTML elements
let inputServiceName=document.getElementById("sName");
let inputDescript=document.getElementById("sDescript");
let inputPrice=document.getElementById("sPrice");


//register and display
function registerService(){
    console.log("A new service was added");
    let newService=new Service(inputServiceName.value,inputDescript.value,inputPrice.value);

    services.push(newService);//push the newService into array

    displayServices();
    clearServiceForm();
}

function displayServices(){
    let serviceList = document.getElementById("serviceList");
    let serviceresult="";

    for(let i=0;i<services.length;i++){
        let service=services[i];

        serviceresult += `
            <tr id="${i}">
                <th scope="row">${i+1}</th>
                <td>${service.servicename}</td>
                <td>${service.description}</td>
                <td>$ ${service.price}</td>
                <td><button class="btn btn-danger btn-sm">Delete</button></td>
            </tr>
        `
    }

    serviceList.innerHTML = serviceresult;
}

//Clearing the Form
function clearServiceForm(){
    document.getElementById("sName").value="";
    document.getElementById("sDescript").value="";
    document.getElementById("sPrice").value="";
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
