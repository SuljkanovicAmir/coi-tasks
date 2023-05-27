
function fetchData() {

    fetch_url = `http://api.ipstack.com/api/check?access_key=d9b6c11693484e825fdeafb4f6ff74f3`
    const resultElement = document.querySelector(".country-name");
    let countryFromSession = sessionStorage.getItem("country")

    if(countryFromSession) {
        resultElement.textContent = `${countryFromSession}`;
        console.log('Country from session:', countryFromSession);
    } else {
        fetch(fetch_url)
            .then((response) => response.json())
            .then((data) => {
                const countryName = data.country_name;
                sessionStorage.setItem("country", countryName);
                console.log('Country name:', countryName);
                resultElement.textContent = `${countryName}`;
            })
            .catch((error) => {
                console.log("Error fetching data", error);
            });
    }
}

fetchData()