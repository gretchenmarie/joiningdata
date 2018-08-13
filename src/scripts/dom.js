/*const build = require("./Dom.js");
const data = require("./data.js")





let newCards = document.querySelector(".card-group")
for (let Databaselist in data) {
    console.log(databaseList);
    newCards.innerHTML += `
       <div class="card">
                  <img class="card-img-top" src="" alt="Card image cap">
                  <div class="card-body" id ="card1">
                    <h5 class="card${employeedatabase}</h5>
                    <p class="card-${employeedatabase}></p>

                  </div>
                </div>`

    let cardText = document.getElementById(`${databaseList}`)
    for (let i = 0; i < data[databaseList].length; i++) {
        const currentObject = data[databaseList][i];
        console.log(currentObject);



        /*creating a fragment in the document*/
      /*  const fragment = document.createDocumentFragment("div");
        //get the element-create an id in the ul tag the child is the li
        //create element unordered list
        const list = document.createElement("ul");
        const listItem = document.createElement("li")
        //each list item has text content take current object add to personalitytype
        listItem.textContent = `${currentObject.employees}`;
        list.appendChild(listItem)
        fragment.appendChild(list)

        document.getElementById("card1").appendChild(fragment)

    };
}*/