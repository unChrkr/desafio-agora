<template>
  <div>
    <CarDetails :id="$route.params.id" />
  </div>
</template>

<script>
import CarDetails from "@/components/CarDetails";

export default {
  components: { CarDetails }
};
</script>
