/**
Alligiant Internship Techincal Test

Written by Ocean Douglas Lee 5/12/19
**/

//Full employee list with department
const employeesArray = [{
     name: "Oscar Martinez",
     department: "Accounting"
},
{
     name: "Angela Martin",
     department: "Accounting"
},
{
     name: "Kevin Malone",
     department: "Accounting"
},
{
     name: "Jim Halpert",
     department: "Sales"
},
{
     name: "Dwight Schrute",
     department: "Sales"
},
{
     name: "Michael Scott",
     department: "Sales"
},
{
     name: "Andy Bernard",
     department: "Sales"
},
{
     name: "Stanley Hudson",
     department: "Sales"
},
{
     name: "Phyllis Vance",
     department: "Sales"
},
{
     name: "Toby Flenderson",
     department: "Human Resources"
},
{
     name: "Holly Flax",
     department: "Human Resources"
},
{
     name: "Gabe Lewis",
     department: "Human Resources"
},
{
     name: "Ryan Howard",
     department: "Temps and Interns"
},
{
     name: "Peter Miller",
     department: "Temps and Interns"
},
{
     name: "Gabe Lewis",
     department: "Temps and Interns"
},
{
     name: "Jan Levinson",
     department: "Corporate"
},
{
     name: "Robert California",
     department: "Corporate"
},
{
     name: "Darryl Philbin",
     department: "Warehouse"
},
{
     name: "Roy Anderson",
     department: "Warehouse"
},
{
     name: "Pam Beezley",
     department: "Reception"
},
{
     name: "Erin Hannon",
     department: "Reception"
},
{
     name: "Creed Bratton",
     department: "Support"
},
{
     name: "Meredith Palmer",
     department: "Support"
},
{
     name: "Kelly Kapoor",
     department: "Support"
},
{
     name: "Clark Green",
     department: "Support"
}];

let firstNamesArray = [];
let lastNamesArray = [];
let departmentsCount = {};

try {
     processAllEmployees(employeesArray);
     if (!firstNamesArray.length) {
          console.log("ERROR:First name array empty");
     } else {
          printOutFirstNames();
     }
}
catch (error) {
     console.error(error);
}


//Add all employee names to first/lastnameArray and increment department count. 
function processAllEmployees(allEmployees) {
     for (i = 0; i < employeesArray.length; i++) {
          var employee = employeesArray[i];
          incrementDepartmentCount(employee.department);
          if (employee.department == "Corporate" || employee.department == "Human Resources") {
               //Do nothing, Corporate and HR individuals are excluded. 
          } else {
               let fullNameArray = splitFullName(employee.name);
               firstNamesArray.push(fullNameArray[0]);
               lastNamesArray.push(fullNameArray[1]);
          }
     }
}

//Returns array of split employee name. 
function splitFullName(fullName) {
     var splitName = fullName.split(" ");
     return splitName;
}

//Creates or increments a count of employees per department. 
function incrementDepartmentCount(department) {
     var depCountFound = false;
     Object.keys(departmentsCount).forEach(function (dep) {
          if (dep == department) {
               departmentsCount[dep] += 1;
               depCountFound = true;
          }
     })
     if (!depCountFound) {
          departmentsCount[department] = 1;
     }
}

//Prints first names to console. 
function printOutFirstNames() {
     for (i = 0; i < firstNamesArray.length; i++) {
          console.log(firstNamesArray[i]);
     }
}
