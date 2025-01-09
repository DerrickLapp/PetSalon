function save(item){

    let itemString = JSON.stringify(item); // parse an object into a string
    localStorage.setItem("services",itemString);
    console.log(item);
    console.log(itemString);
}
