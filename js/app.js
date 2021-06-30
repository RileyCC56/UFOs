// import the data from data.js
const tableData = data;

//Reference the HTML table using d3
var tbody = d3.select("tbody");

// build a table function to pass in the data and clear the filters from the HTML
function buildTable(data) {
    tbody.html("");
}

// Loop through the data array then add rows of data to the table
data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
        // set up the action of appending data into a table data tag 
        let cell = row.append("td");
        // add the values
        cell.text(val);
        }   
    );
});
//(Function ABV 13-22. Looped through each object in the array
//Appended a row to the HTML table
//Added each value from the object into a cell

