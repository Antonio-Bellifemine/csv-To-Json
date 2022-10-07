const csv = require("csvtojson");
const csvFilePath = "pathToCsv.csv";
const fs = require("fs");
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    jsonObj;

    fs.writeFile("jsonPolicies.json", JSON.stringify(jsonObj), (err) => {
      if (err) throw err;
      console.log("Here is the error we encountered:", err);
      console.log("csv file has been converted to json successfully");
    });
  });

// csvToJson.fieldDelimiter(";").getJsonFromCsv(fileInputName);
