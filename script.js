
// GET languages that are supported by the API
async function fetchData() {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", "k cha khabar");
    
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': ''
        },
        body: encodedParams
    };
    
    const res = await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', options)

    
    const responseData = await res.json();

    console.log(responseData);

    let test = responseData.data.languages[0].name;
    console.log(test);


    document.getElementById('supportedLanguage').innerHTML = responseData.data.map(response => `<li>${response}</li>`).join('');


}

fetchData();

