import type { WeatherData, ForecastData } from '../stores/weatherStore';

const API_KEY = '7e038392823156066b0f37407113dac7';

export const fetchWeatherData = async (location: string): Promise<WeatherData> => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
  const data = await response.json();
  return data;
};

export const fetchForecastData = async (location: string): Promise<ForecastData> => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`);
  const data = await response.json();
  return data;
};