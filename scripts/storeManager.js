function save(item){
    console.log(item);

    let data = read();
    data.push(item);

    let itemString = JSON.stringify(data); // parse an object into a string
    console.log(itemString);
    
    localStorage.setItem("services",itemString);
}

function read(){
    let data = localStorage.getItem("services");

    if(!data) {
        return [];
    }else{
        let list = JSON.parse(data);
        return list
    }
}