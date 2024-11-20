<template>
  <div class="car-item">
    <h3>{{ car.marca }} {{ car.nome }}</h3>
    <p>Tipo: {{ car.tipo }}</p>
    <p>Ano: {{ car.ano }}</p>
    <button @click="toggleFavorite(car.id)">
      {{ isFavorite(car.id) ? '★' : '☆' }} Favorito
    </button>
    <button @click="viewDetails(car.id)">Ver Detalhes</button>
  </div>
</template>

<script>
import { isFavorite, toggleFavorite } from "@/utils/localStorage";

export default {
  props: {
    car: Object
  },
  methods: {
    isFavorite,
    toggleFavorite,
    viewDetails(id) {
      this.$router.push({ name: "CarDetails", params: { id } });
    }
  }
};
</script>

<style>
.car-item { margin-bottom: 20px; }
button { margin: 5px; }
</style>
