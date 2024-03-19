<!-- Forecast.svelte -->
<script lang="ts">
  import { weatherStore } from '../stores/weatherStore';

  $: forecast = $weatherStore.forecast;
</script>

{#if forecast}
  <div class="forecast-container bg-gray-100 rounded text-white">
    <h2 class="text-center text-2xl font-bold mb-4">5-Day Forecast</h2>
    <div id="forecast-carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        {#each forecast.list as day, index}
          <div class="carousel-item {index === 0 ? 'active' : ''}">
            <div class="card bg-dark-transparent text-white">
              <div class="card-body">
                <h5 class="card-title">{new Date(day.dt * 1000).toLocaleDateString()}</h5>
                <p class="card-text">{day.weather[0].description}</p>
                <p class="card-text">Temperature: {day.main.temp}°C</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#forecast-carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#forecast-carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
{/if}

<style>
  .forecast-container {
    padding: 20px;
    margin-top: 20px;
  }

  .bg-dark-transparent {
    background-color: rgba(0, 0, 0, 0.5); /* Adjust transparency as needed */
  }

  .carousel-item {
    text-align: center;
  }

  .carousel-control-prev,
  .carousel-control-next {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust transparency as needed */
    width: auto;
  }
</style>
