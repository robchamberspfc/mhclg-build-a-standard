const fs = require('fs');
const xlsx = require('node-xlsx');
const files = fs.readdirSync('data');

let templates = []
for (i=0;i<files.length;i++) {

    const workSheetsFromFile = xlsx.parse(`${__dirname}/data/${files[i]}`);
    console.log(`Processing file ${i+1} of ${files.length}: ${files[i]}`)

    let fields = [];
    let codelists = [];

    for (j=1;j<workSheetsFromFile[0].data.length;j++){
        if(workSheetsFromFile[0].data[j][1] == "Code List"){
            codelists.push(workSheetsFromFile[0].data[j][0])
        }
        else if (workSheetsFromFile[0].data[j][1] == "Entity"){
            fields.push(workSheetsFromFile[0].data[j][0])
        }
    }

    let ID = files[i].replace(".xlsx","")

    templates.push({
        "ID": ID,
        "Name": ID,
        "Description": "No description currently available",
        "Fields": fields,
        "Codelists": codelists
    })
}

let json = JSON.stringify(templates);
fs.writeFileSync('template.json', json);