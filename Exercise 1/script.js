async function getCountry (){
    
    try{
        let country = await fetch("document.json");
    let countryText = await country.json();
    console.log(countryText[1]);

    let list = document.createElement("ul");

    for (elem of countryText){
        let listItem = document.createElement("li");
        let listItemText = document.createTextNode(`${elem.country}`);
        listItem.appendChild(listItemText);
        list.appendChild(listItem);
    }

    document.body.appendChild(list);
    } catch (e) {
        console.log("couldn't fetch data");
    }
}

document.getElementById("clickMe").addEventListener('click', getCountry);