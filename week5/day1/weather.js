const getWeatherData = async ()=> {
    const userInput = document.querySelector(".zip").value
    if (userInput.length < 5 || !validateNumber(userInput)) {
        let warningText = document.querySelector(".warningText")
        warningText.innerHTML = "Please enter a valid 5-digit zip code."
    } else if (validateNumber(userInput)) {
        const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${userInput}&units=imperial&appid=61f08dbce05a9d082a63a4d31c5044ba`)
        const formattedJson  = await data.json()
        console.log(formattedJson)
        let cityName = document.querySelector(".cityName")
        cityName.innerHTML = `City: ${formattedJson.name}`
        let current = document.querySelector(".current")
        current.innerHTML = `Current: ${formattedJson.main.temp} (F)`
        let high = document.querySelector(".high")
        high.innerHTML = `High: ${formattedJson.main.temp_max} (F)`
        let low = document.querySelector(".low")
        low.innerHTML = `Low: ${formattedJson.main.temp_min} (F)`
        let humidity = document.querySelector(".humidity")
        humidity.innerHTML = `Humidity: ${formattedJson.main.humidity}%`
}}

const validateNumber = (number) => {
    myRegex = /^[0-9]+$/;
    return myRegex.test(number);
};

const submitBtn = document.querySelector(".submit")

submitBtn.addEventListener('click', function(){
    getWeatherData();
})

const enterInpt = document.querySelector(".zip")

enterInpt.addEventListener('keydown', function(e){
    if (e.keyCode === 13){
        getWeatherData();
    }
})

