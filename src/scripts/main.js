const employeeInformationDatabase = {
    "departments": [
        {
            "departmentId": 1,
            "name": "helpdesk"
        },
        {
            "departmentId": 2,
            "name": "sales"
        },
        {
            "departmentId": 3,
            "name": "accounting"
        }
    ],
    "employees": [
        {
            "employeeId": 1,
            "firstName": "Maxwell",
            "lastName": "Ward",
            "departmentId": 1
        },
        {
            "employeeId": 2,
            "firstName": "Wyatt",
            "lastName": "James",
            "departmentId": 2
        },
        {
            "employeeId": 3,
            "firstName": "Andrew",
            "lastName": "Thomas",
            "departmentId": 2
        },
        {
            "employeeId": 4,
            "firstName": "sandy",
            "lastName": "ward",
            "departmentId": 3
        },
        {
            "employeeId": 5,
            "firstName": "Marie",
            "lastName": "Nutter",
            "departmentId": 3
        },
        {
            "employeeId": 6,
            "firstName": "Tracy",
            "lastName": "Milam",
            "departmentId": 3
        }
    ],
    "computers": [
        {
            "computerId": 1,
            "name": "helpdeskcomputer"
        },
        {
            "computerId": 2,
            "name": "salescomputer"
        },
        {
            "computerId": 3,
            "name": "accountingcomputer"
        },
        {
            "computerId": 4,
            "name": "accountingcomputer2"
        },
    ],
    "employeeComputers": [
        {
            "department": 1,
            "computerId": 1,
            "employeeId": 1
        },
        {
            "department": 2,
            "computerId": 2,
            "employeeId": 2
        },
        {

            "department": 2,
            "computerId": 2,
            "employeeId": 3
        },
        {

            "department": 3,
            "computerId": 3,
            "employeeId": 4
        },
        {

            "department": 3,
            "computerId": 4,
            "employeeId": 5
        },
        {

            "department": 3,
            "computerId": 4,
            "employeeId": 6
        }
    ]
};

/*const computerAssignmentDatabase = {
    "departments": departments ,
    "employees": employees,
    "computers": computers,
    "employeeComputers": employeeComputers
}*/

const employeeData = function (databaseObject, keyName) {
    const employeeInformationDatabaseString = JSON.stringify(databaseObject);
    localStorage.setItem(keyName, employeeInformationDatabaseString);
};
employeeData(employeeInformationDatabase, "employeeInformationDatabaseKey");

const employeeSection = localStorage.getItem("employeeInformationDatabaseKey");
const data = JSON.parse(employeeSection);
console.log(data);






let newCards = document.querySelector(".card-group");
for (let databaseList in data) {
    console.log(databaseList);
    newCards.innerHTML += `
       <div class="card">

                  <div class="card-body" id ="card1">
                    <h5 class="card${databaseList}</h5>
                    <p class="card-${databaseList}></p>

                  </div>
                </div>`;

    let cardText = document.getElementById(`${databaseList}`);
    for (let i = 0; i < data[databaseList].length; i++) {
        const currentObject = data[databaseList][i];
        console.log(currentObject);



            for (const value of Object.values(currentObject)) {
                console.log(value);
                const fragment = document.createDocumentFragment();
                const list = document.createElement("ul");
                const listItem = document.createElement("li");

                listItem.textContent = `${value}`;

                list.appendChild(listItem);
                fragment.appendChild(list);

                cardText.appendChild(fragment);
            }
        };
    }