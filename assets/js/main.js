filterList = (listName) => {
    console.log(listName)
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById(listName);
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        // a = li[i].getElementsByTagName("strong")[0];
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


