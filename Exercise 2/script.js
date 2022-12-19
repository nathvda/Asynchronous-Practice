document.getElementById("clickMe").addEventListener('click', ageQuery);

let previouslyFetched = [];
previouslyFetched = JSON.parse(localStorage.getItem("previous"));
if ( previouslyFetched == null) {
    previouslyFetched = [];
}
 
async function ageQuery(){
   
   try { 

    if ( previouslyFetched == null) {
        previouslyFetched = [];
    }
    let whatName = document.getElementById("searchedName").value;
    let whatCountry = document.getElementById("country").selectedIndex;
    let countryIden = document.getElementById("country").querySelectorAll("option")[whatCountry];
    let country = countryIden.value;

    let ageQueried = await fetch(`https://api.agify.io?name=${whatName}&country_id=${country}`);
    let ageQueriedText = await ageQueried.json();

    previouslyFetched.push(ageQueriedText);

    localStorage.setItem("previous", JSON.stringify(previouslyFetched));

    let element = document.createElement("div");
    element.innerHTML = `name : ${ageQueriedText.name} <br/>
    age : ${ageQueriedText.age} <br/>
    country : ${ageQueriedText.country_id}`;
    document.body.appendChild(element);

} catch (e) {
    console.log("couldn't retrieve data");
}

}

function displayOldQueries(){
    for (let elem of previouslyFetched){
        let element = document.createElement("div");
        element.innerHTML = `name : ${elem.name} <br/>
        age : ${elem.age} <br/>
        country : ${elem.country_id}`;
        document.body.appendChild(element);
    }
}

displayOldQueries();