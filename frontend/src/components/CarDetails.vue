<template>
  <div v-if="car">
    <h2>{{ car.marca }} {{ car.nome }}</h2>
    <p>Tipo: {{ car.tipo }}</p>
    <p>Ano: {{ car.ano }}</p>
    <p>Potência: {{ car.potencia }} CV</p>
    <p>Portas: {{ car.portas }}</p>
    <p>Peso: {{ car.peso }} kg</p>
    <p>Altura: {{ car.altura }} mm</p>
    <p>Largura: {{ car.largura }} mm</p>
    <p>Comprimento: {{ car.comprimento }} mm</p>
    <button @click="toggleFavorite(car.id)">
      {{ isFavorite(car.id) ? '★' : '☆' }} Favorito
    </button>
    <button @click="goBack">Voltar</button>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { isFavorite, toggleFavorite } from "@/utils/localStorage";

export default {
  data() {
    return {
      car: null
    };
  },
  methods: {
    isFavorite,
    toggleFavorite,
    async fetchCar() {
      const response = await axios.get(`http://localhost:8080/cars/${this.$route.params.id}`);
      this.car = response.data;
    },
    goBack() {
      this.$router.push({ name: "Home" });
    }
  },
  mounted() {
    this.fetchCar();
  }
};
</script>
