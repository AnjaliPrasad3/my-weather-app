<!-- SearchInput.svelte -->
<script lang="ts">
  import { weatherStore } from '../stores/weatherStore';
  import { fetchWeatherData, fetchForecastData } from '../utils/fetchWeatherData';

  let location = '';

  const searchWeather = async () => {
    weatherStore.setLoading(true);
    try {
      const weatherData = await fetchWeatherData(location);
      const forecastData = await fetchForecastData(location);
      weatherStore.setWeather(weatherData);
      weatherStore.setForecast(forecastData);
    } catch (error) {
      console.error(error);
      weatherStore.setError('Error fetching weather data');
    } finally {
      weatherStore.setLoading(false);
    }
  };
</script>

<div class="search-container">
  <input
    class="search-input"
    type="text"
    placeholder="Search for a city or zip code..."
    bind:value={location}
    on:keydown={(e) => e.key === 'Enter' && searchWeather()}
  />
  <button
    class="search-button"
    on:click={searchWeather}
  >
    Search
  </button>
</div>

<style>
  .search-container {
    position: relative; /* Position relative for absolute positioning */
    display: flex;
    align-items: center;
    max-width: 400px; /* Adjust max-width as needed */
    margin: 0 auto; /* Center the container horizontally */
    padding: 10px; /* Add padding to the container */
    background-color: rgba(255, 255, 255, 0.1); /* Transparent background */
    border: 2px solid white; /* White border */
    border-radius: 20px; /* Rounded corners */
  }

  .search-input {
    flex: 1;
    border: none;
    background: none;
    color: white;
    padding: 8px;
  }

  .search-input::placeholder {
    color: rgba(255, 255, 255, 0.5); /* Faded white placeholder text */
  }

  .search-button {
    background-color: transparent;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
  }

  /* Add hover effect for button */
  .search-button:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
</style>
