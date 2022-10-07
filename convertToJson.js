const csv = require("csvtojson");
const csvFilePath = "pathToCsv.csv";
const fs = require("fs");
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    jsonObj;

    fs.writeFile(
      "nameOfJsonFileToOutput.json",
      JSON.stringify(jsonObj),
      (err) => {
        if (err) {
          console.log("Here is the error we encountered:", err);
          throw err;
        }
        console.log("csv file has been converted to json successfully");
      }
    );
  });
