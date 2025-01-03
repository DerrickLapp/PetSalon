


// function displayPetCards(){
//     let cardsSection = document.getElementById("specificPets");
//     let result="";

//     for(let i=0;i<pets.length;i++){
//         let pet=pets[i];

//         result += `
//             <div id="${i}" class="card col-3 mx-2">
//                 <div class="card-body">
//                     <h5 class="class-title">${pet.name} - <span class="text-secondary">${pet.service}</span></h5>
//                     <h6 class="card-subtitle mb-2 text-body-secondary">${pet.breed}</h6>
//                     <p class="card-text">${pet.gender},${pet.age}</p>
//                     <button class="btn btn-danger btn-sm">Delete</button>
//                 </div>
//             </div>
//         `
//     }

//     cardsSection.innerHTML = result;
    
// }

function displayPetRow(){
    let cardsSection = document.getElementById("specificPetRows");
    let result="";

    for(let i=0;i<pets.length;i++){
        let pet=pets[i];

        result += `
                    <tr>
                        <th scope="row">${i+1}</th>
                        <td>${pet.name}</td>
                        <td>${pet.age}</td>
                        <td>${pet.gender}</td>
                        <td>${pet.type}</td>
                        <td>${pet.breed}</td>
                        <td>${pet.service}</td>
                        <td class="btn btn-danger btn-sm">Delete</td>
                    </tr>
        `
    }

    cardsSection.innerHTML = result;

}
