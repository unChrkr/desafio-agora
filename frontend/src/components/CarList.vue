<template>
  <div>
    <input v-model="search" @input="fetchCars" placeholder="Buscar por nome">
    <button @click="filterFavorites">Mostrar Favoritos</button>
    <div v-for="car in cars" :key="car.id">
      <CarItem :car="car" />
    </div>
    <button @click="loadMore">Carregar mais</button>
  </div>
</template>

<script>
import CarItem from "./CarItem";
import axios from "axios";

export default {
  components: { CarItem },
  data() {
    return {
      cars: [],
      search: "",
      page: 1,
      limit: 10,
      favoritesOnly: false
    };
  },
  methods: {
    async fetchCars() {
      const response = await axios.get(`http://localhost:8080/cars`, {
        params: { name: this.search, page: this.page, limit: this.limit }
      });
      this.cars = response.data;
    },
    loadMore() {
      this.page++;
      this.fetchCars();
    },
    filterFavorites() {
      this.favoritesOnly = !this.favoritesOnly;
      this.fetchCars();
    }
  },
  mounted() {
    this.fetchCars();
  }
};
</script>
