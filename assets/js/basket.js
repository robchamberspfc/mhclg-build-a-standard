updateBasket = () => {
    if (projectData.length != 0) {
        codelists.innerHTML = ""
        for (i=0; i <projectData.codelists.length; i++){
            codelists.innerHTML += `<p><strong>Name:</strong> ${projectData.codelists[i].name} <br><span class="small"><strong>ID:</strong> ${projectData.codelists[i].id} | <a href ="#">remove</a></span></p>`
        }
        fields.innerHTML = ""
        for (i=0; i <projectData.fields.length; i++){
            fields.innerHTML += `<p><strong>Name:</strong> ${projectData.fields[i].name} <br><span class="small"><strong>ID:</strong> ${projectData.fields[i].id} | <a href ="#">remove</a></span></p>`
        }
        customCodelists.innerHTML = ""
        for (i=0; i <projectData.customCodelists.length; i++){
            customCodelists.innerHTML += `<p><strong>Name:</strong> ${projectData.customCodelists[i].name} <br><span class="small"><strong>ID:</strong> ${projectData.customCodelists[i].id} | <a href ="#">remove</a></span></p>`
        }
        customFields.innerHTML = ""
        for (i=0; i <projectData.customFields.length; i++){
            customFields.innerHTML += `<p><strong>Name:</strong> ${projectData.customFields[i].name} <br><span class="small"><strong>ID:</strong> ${projectData.customFields[i].id} | <a href ="#">remove</a></span></p>`
        }
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