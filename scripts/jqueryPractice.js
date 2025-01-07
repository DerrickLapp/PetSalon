console.log("Welcome to jquery");

//JS vs jQuery

//getting an element
document.getElementById("results");
$("#results");

//getting an element by tag name
document.getElementsByTagName("p");
$("p");

//by class
document.getElementsByClassName("with-border");
$(".with-border");


// ID SELECTORS
let redParagraph = $("#red").css("background","red").css("color","white");
console.log("my red paragraph",redParagraph);

let blueParagraph = $("#blue").css("background","blue").css("color","white");
console.log("my blue paragraph",blueParagraph);

//CLASS SELECTORS
let myParagraphWithBorder = $(".with-border");

myParagraphWithBorder.css("border","5px dashed yellow");

myParagraphWithBorder.click(function(){
    console.log("Clicked");

    $(this).addClass("bg-gray");    
})

//TAG SELECTORS
let paragraphs = $("p");

paragraphs.css("cursor","pointer");


//SIMPLE AND COMMON FUNCTIONS
function register(){
    let testEntry = $("#testInput").val();
    $("#results").append(`<li> ${testEntry} </li>`);
}

//EVENTS
$("#registerBtn").on("click",register);

//SIMPLE AND COMMON FUNCTIONS

function clickMe(){
    console.log("Click me");
    
    $("p:first").hide();
    // $("p:first").show();
    $("p:last").css("border","3px solid black");
}

$("#newBtn").on("click",clickMe);


//ANIMATIONS
function hideName(){
    $("#user-name").slideUp(2000);
}

$("#hideUsername").on("click",hideName);
function showName(){
    $("#user-name").slideDown(2000);
}

$("#showUsername").on("click",showName);


