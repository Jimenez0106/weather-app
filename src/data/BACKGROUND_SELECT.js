const getBackground = (weather) => {
  const currentWeather = weather.current.condition.text;
  switch (currentWeather) {
    case "Sunny":
      return "BackgroundSunny";
    case "Clear":
      return "BackgroundClear";
    case "Partly cloudy":
    case "Cloudy":
      return "BackgroundCloudy";
    case "Mist":
    case "Freezing fog":
    case "Fog":
      return "BackgroundFog";
    case "Rain":
    case "Light rain shower":
    case "Moderate or heavy rain shower":
    case "Torrential rain shower":
    case "Light sleet showers":
    case "Moderate or heavy sleet showers":
    case "Patchy light drizzle":
    case "Light drizzle":
    case "Freezing drizzle":
    case "Heavy freezing drizzle":
    case "Patchy light rain":
    case "Light rain":
    case "Moderate rain at times":
    case "Moderate rain":
    case "Heavy rain at times":
    case "Heavy rain":
    case "Light freezing rain":
    case "Moderate or heavy freezing rain":
    case "Light sleet":
    case "Moderate or heavy sleet":
      return "BackgroundRain";
    case "Patchy rain possible":
    case "Patchy snow possible":
    case "Patchy sleet possible":
    case "Patchy freezing drizzle possible":
    case "Overcast":
      return "BackgroundDarkClouds";
    case "Blizzard":
    case "Patchy light snow":
    case "Light snow showers":
    case "Moderate or heavy snow showers":
    case "Light showers of ice pellets":
    case "Moderate or heavy showers of ice pellets":
    case "Light snow":
    case "Patchy moderate snow":
    case "Moderate snow":
    case "Patchy heavy snow":
    case "Heavy snow":
    case "Ice pellets":
      return "BackgroundSnow";
    case "Patchy light rain with thunder":
    case "Moderate or heavy rain with thunder":
    case "Patchy light snow with thunder":
    case "Moderate or heavy snow with thunder":
      return "BackgroundThunder";
    default:
      return "BackgroundDefault";
  }
};

export default getBackground;
