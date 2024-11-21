<template>
  <div>
    <CarDetails :id="$route.params.id" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CarDetails from '@/components/CarDetails.vue';

export default defineComponent({
  components: { CarDetails }
});
</script>
