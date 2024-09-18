const fs = require('fs');
const xlsx = require('node-xlsx');
const files = fs.readdirSync('data');

// console.log(files)

// {
//     "ID": "view_repair",
//     "Name": "View repair",
//     "Description": "A short description of this tmeplaye and what needs it would meet should go here",
//     "Fields": ["Address", "AlertRegardingLocation", "AlertRegardingPerson", "Attachment:BasicAttachment", "BasicAttachment", "Dependency", "Duration", "Keysafe", "PostalAddress:Address", "Property", "PropertyAddress:PostalAddress", "Quantity", "RateScheduleItem", "Reference", "Site", "Trade", "Unit", "WorkClass", "WorkClassSubType", "WorkElement", "WorkElementDependency:Dependency", "WorkOrder", "WorkOrderAccessInformation", "WorkPriority"],
//     "Codelists": ["CostSubjectCode", "DependencyTypeCode", "LocationAlertTypeCode", "M3NHFScheduleOfRatesCode", "PersonAlertTypeCode", "TradeCode", "UNECEUnitOfMeasurementCode", "WorkClassCode", "WorkPriorityCode", "WorkType"]
// },

let templates = []
for (i=0;i<files.length;i++) {
// for (i=0;i<1;i++) {
    console.log(files[i])
    const workSheetsFromFile = xlsx.parse(`${__dirname}/data/${files[i]}`);
    // console.log(workSheetsFromFile[1])
    let fields = []
    let codelists = []
    for (j=1;j<workSheetsFromFile[0].data.length;j++){
        // console.log(workSheetsFromFile[0].data[j][1])
        if(workSheetsFromFile[0].data[j][1] == "Code List"){
            // console.log(workSheetsFromFile[0].data[j][1])
            codelists.push(workSheetsFromFile[0].data[j][0])
        }
        else if (workSheetsFromFile[0].data[j][1] == "Entity"){
            // console.log(workSheetsFromFile[0].data[j][1])
            fields.push(workSheetsFromFile[0].data[j][0])
        }
    }
    // console.log(codelists)
    // console.log(fields)

    let ID = files[i].replace(".xlsx","")

    templates.push({
        "ID": ID,
        "Name": ID,
        "Description": "No description currently available",
        "Fields": fields,
        "Codelists": codelists
    })
}

console.log(templates)
let json = JSON.stringify(templates);
fs.writeFileSync('myjsonfile.json', json);