<!-- WeatherDisplay.svelte -->
<script lang="ts">
  import { weatherStore } from '../stores/weatherStore';

  $: weather = $weatherStore.weather;
</script>

{#if weather}
  <div class="weather-container">
    <div class="weather-content bg-gray-100 rounded text-white">
      <h2 class="text-2xl font-bold mb-2">{weather.name}</h2>
      <p class="text-lg mb-2">{weather.weather[0].description}</p>
      <p class="text-lg mb-2">Temperature: {weather.main.temp}°C</p>
      <p class="text-lg mb-2">Wind Speed: {weather.wind.speed} m/s</p>
      <p class="text-lg mb-2">Humidity: {weather.main.humidity}%</p>
    </div>
  </div>
{/if}

<style>
  .weather-container {
    display: flex;
    justify-content: center; /* Center content horizontally */
    margin-top: 20px; /* Adjust margin top as needed */
  }

  .weather-content {
    padding: 20px; /* Add padding to the content */
    background-color: rgba(255, 255, 255, 0.1); /* Transparent background */
    border: 2px solid white; /* White border */
    border-radius: 10px; /* Rounded corners */
    width: fit-content; /* Adjust width to fit content */
  }
</style>
