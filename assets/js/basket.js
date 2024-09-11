updateBasket = () => {
    codelists.innerHTML = JSON.stringify(projectData.codelists)
    fields.innerHTML = JSON.stringify(projectData.fields)
    customCodelists.innerHTML = JSON.stringify(projectData.customCodelists)
    customFields.innerHTML = JSON.stringify(projectData.customFields)
}

basketDataAdd = (ID, name, path) => {
    data = {
        "id": ID,
        "name": name
    }
    projectData[path].push(data)
    writeLocalStorage(projectData)
}