<template>
  <div>
    <input v-model="search" @input="fetchCars" placeholder="Buscar por nome" />
    <button @click="filterFavorites">Mostrar Favoritos</button>
    <div v-for="car in displayedCars" :key="car.id">
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
      displayedCars: [],
      search: "",
      page: 1,
      limit: 10,
      favoritesOnly: false
    };
  },
  methods: {
    async fetchCars() {
      try {
        const response = await axios.get(`http://localhost:8080/cars`, {
          params: { name: this.search, page: this.page, limit: this.limit }
        });
        console.log('response.data', response.data);
        this.cars = response.data;
        this.updateDisplayedCars();
      } catch (error) {
        console.error("Erro ao buscar carros:", error);
      }
    },
    loadMore() {
      this.page++;
      this.fetchCars();
    },
    filterFavorites() {
      this.favoritesOnly = !this.favoritesOnly;
      this.updateDisplayedCars();
    },
    updateDisplayedCars() {
      if (this.favoritesOnly) {
        // Supondo que os carros favoritos tenham uma propriedade `isFavorite`
        this.displayedCars = this.cars.filter(car => car.isFavorite);
      } else {
        this.displayedCars = this.cars;
      }
    }
  },
  mounted() {
    this.fetchCars();
  }
};
</script>
