<img src="https://github.com/Jimenez0106/weather-app/blob/master/src/images/README/Dripdrop.png" alt="App Logo"/>

# Weather App with ReactJS :cloud:

This project is a [ReactJS](https://reactjs.org/) Weather Forecast Application utilizing [WeatherAPI](https://www.weatherapi.com/) and [MapquestAPI](https://developer.mapquest.com/). Styling was done with [React Bootstrap](https://react-bootstrap.github.io/). This app allows you to search for locations utilizing city/state/country/zip-code or find your own location through the use of Reverse Geocoding. Get the latest weather updates and alerts in your area!

# Live Demo :cloud_with_rain:

[Hosted on Vercel](https://weather-app-theta-sooty.vercel.app/)

# Setup :hammer_and_wrench:

### Prerequisites
Install Node and npm using `npm install` command on your command line.

### Setup & Install
Clone the repository, navigate to the project directory, and run `npm install`.<br />
Create a `.env` file which will contain the API keys as `Environmental Variables`. This is required for the project to function.

As per the [Create React App](https://create-react-app.dev/docs/adding-custom-environment-variables/) docs, custom environment variables need to begin with `REACT_APP_`.<br />
For Example:

> REACT_APP_WEATHER_KEY=YOUR_KEY <br /> <br />

To access this variable, use the `process.env` object.<br />

> process.env.REACT_APP_WEATHER_KEY

`REACT_APP_WEATHER_KEY` requires a key from [WeatherAPI's 16 day forecast API](https://openweathermap.org/forecast16).<br />
`REACT_APP_MAP_KEY` requires a key from [Mapquest's Geocoding API](https://developer.mapquest.com/documentation/geocoding-api/).

# Disclaimer :warning:

`WARNING:` Do not store any secrets (such as private API keys) in your React app!

Environment variables are embedded into the build, meaning anyone can view them by inspecting your app's files.

# Features :clipboard:

- Get current and 3 day Weather Forecasts for anywhere around the globe.
- Latest weather alerts in the area.
- Dynamic background changing based on weather conditions and time.
- Toggle between Celsius and Fahrenheit.
- Reverse Geocaching finds your current location.

# Screenshots :camera:

<img src="https://github.com/Jimenez0106/weather-app/blob/master/src/images/README/Screenshot_1.png?raw=true" alt="Screenshot 1">
<img src="https://github.com/Jimenez0106/weather-app/blob/master/src/images/README/Screenshot_2.png?raw=true" alt="Screenshot 2">
<img src="https://github.com/Jimenez0106/weather-app/blob/master/src/images/README/Screenshot_3.png?raw=true" alt="Screenshot 3">

# Author :raising_hand_man:

Ryan Jimenez

- [Github](https://github.com/Jimenez0106)
- [LinkedIn](https://www.linkedin.com/in/ryan-l-jimenez/)
