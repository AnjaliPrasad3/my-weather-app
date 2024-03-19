<script lang="ts">
  import { weatherStore } from '../stores/weatherStore';
  import SearchInput from '../components/SearchInput.svelte';
  import WeatherDisplay from '../components/WeatherDisplay.svelte';
  import Forecast from '../components/Forecast.svelte';
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-4 text-white">Weather App</h1>
  <SearchInput />
  {#if $weatherStore.weather}
    <WeatherDisplay />
    <Forecast />
  {/if}
</div>
