// import the data from data.js
const tableData = data;
console.log(tableData)

//Reference the HTML table using d3
var tbody = d3.select("tbody");

// build a table function to pass in the data and clear the filters from the HTML
function buildTable(data) {
    tbody.html("");


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
}

//(Function from lines 13-22. Looped through each object in the array
//Appended a row to the HTML table
//Added each value from the object into a cell

function handleClick() {
     // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
     // Check to see if a date was entered and filter the
  // data using that date.
    if (date) {
          // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
      };
  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.

    buildTable(filteredData);

};
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);