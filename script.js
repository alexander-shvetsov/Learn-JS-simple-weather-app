"use strict";

const param = {
	url: "https://api.openweathermap.org/data/2.5/",
	appid: "352ca37464e6a969cc202608add56234",
};

function getWeather() {
	const cityId = document.querySelector("#city").value;

	fetch(`${param.url}weather?id=${cityId}&lang=ru&units=metric&APPID=${param.appid}`)
		.then((weather) => {
			return weather.json();
		})
		.then(showWeather);

	document.querySelector("#city").onchange = getWeather;
}

getWeather();

function showWeather(data) {
	const city = document.querySelector(".weather-city"),
		temperature = document.querySelector(".weather-temperature"),
		icon = document.querySelector(".weather-icon"),
		descr = document.querySelector(".weather-description");

	temperature.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
	city.textContent = data.name;
	icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
	descr.textContent = data.weather[0].description;
}
