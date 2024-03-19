import { writable, derived } from 'svelte/store';

export interface WeatherData {
  name: string;
  weather: { description: string }[];
  main: { temp: number; humidity: number };
  wind: { speed: number };
}

export interface ForecastData {
  list: {
    dt: number;
    weather: { description: string }[];
    main: { temp: number };
  }[];
}

const createWeatherStore = () => {
  const { subscribe, set, update } = writable<{
    weather: WeatherData | null;
    forecast: ForecastData | null;
    loading: boolean;
    error: string | null;
  }>({
    weather: null,
    forecast: null,
    loading: false,
    error: null,
  });

  const setWeather = (data: WeatherData) => {
    update((state) => ({ ...state, weather: data }));
  };

  const setForecast = (data: ForecastData) => {
    update((state) => ({ ...state, forecast: data }));
  };

  const setLoading = (loading: boolean) => {
    update((state) => ({ ...state, loading }));
  };

  const setError = (error: string | null) => {
    update((state) => ({ ...state, error }));
  };

  return {
    subscribe,
    setWeather,
    setForecast,
    setLoading,
    setError,
  };
};

export const weatherStore = createWeatherStore();