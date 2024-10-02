// this function will display CSV data with headers and rows
function parseCSVstructure(csvString) {
    // the  rows will be split using "\n" 
    const rows = csvString.split("\n");

    // remove the header row and log it
    const headers = rows[0].split(",");
    console.log(`Headers: [${headers.join(", ")}]`); // Display the header in array format

    // Initialize an array to hold the data
    let tableData = [];

    //  data placed row
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].split(",");
        tableData.push(cells);
    }

    // table rows laid out
    console.log("\nData Rows:");
    console.log("["); // beginning of  data array table

    for (let i = 0; i < tableData.length; i++) {
        console.log(`  ["${tableData[i][0]}", "${tableData[i][1]}", "${tableData[i][2]}", "${tableData[i][3]}"]${i < tableData.length - 1 ? ',' : ''}`);
    }

    console.log("]"); // End of the table data array
}

// Example CSV data
const exampleCSV = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Test the function with the provided CSV data
parseCSVstructure(exampleCSV);

// Another CSV data to test the program
const additionalCSV = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

console.log("\nTesting with Additional CSV Data:");
parseCSVstructure(additionalCSV);