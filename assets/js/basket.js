updateBasket = () => {
    if (projectData.length != 0) {
        codelists.innerHTML = JSON.stringify(projectData.codelists)
        fields.innerHTML = JSON.stringify(projectData.fields)
        customCodelists.innerHTML = JSON.stringify(projectData.customCodelists)
        customFields.innerHTML = JSON.stringify(projectData.customFields)
    } else {
        codelists.innerHTML = "No data"
        fields.innerHTML = "No data"
        customCodelists.innerHTML = "No data"
        customFields.innerHTML = "No data"
    }
}

basketDataAdd = (ID, name, path) => {
    data = {
        "id": ID,
        "name": name
    }
    projectData[path].push(data)
    writeLocalStorage(projectData, "Basket")
}