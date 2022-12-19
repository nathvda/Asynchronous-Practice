document.getElementById("clickMe").addEventListener('click', ageQuery);

let previouslyFetched = [];

async function ageQuery(){
   
   try { 
    let whatName = document.getElementById("searchedName").value;
    let whatCountry = document.getElementById("country").selectedIndex;
    let countryIden = document.getElementById("country").querySelectorAll("option")[whatCountry];
    let country = countryIden.value;

    let ageQueried = await fetch(`https://api.agify.io?name=${whatName}&country_id=${country}`);
    let ageQueriedText = await ageQueried.json();

    previouslyFetched = previouslyFetched.push(ageQueriedText);

    let element = document.createElement("div");
    element.innerHTML = `name : ${ageQueriedText.name} <br/>
    age : ${ageQueriedText.age} <br/>
    country : ${ageQueriedText.country_id}`;
    document.body.appendChild(element);

    localStorage.setItem("previously", JSON.stringify(previouslyFetched));


} catch (e) {
    console.log("couldn't retrieve data");
}
}

function displayOldQueries(){
    let getStorage = localStorage.getItem("previously");
previouslyFetched.push(JSON.parse(getStorage));

    for (let elem of previouslyFetched){
        let element = document.createElement("div");
        element.innerHTML = `name : ${elem.name} <br/>
        age : ${elem.age} <br/>
        country : ${elem.country_id}`;
        document.body.appendChild(element);
    }
}

displayOldQueries();