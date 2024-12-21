//Practicing 

var globalVariable = "I'm in global scope";

function myFunction(){
    //This function can access globalVariable
    console.log(globalVariable);

    var localVariable = "I'm in local scope";
    console.log(localVariable);
    
    if(true){
        let blockVariable = "I am a block variable";
        console.log(blockVariable);
    }
}

myFunction();

//Accessing the local or block variable here will result in an error

//Block Scope is for conditional statements (if, else, for, etc.)

//Objects
