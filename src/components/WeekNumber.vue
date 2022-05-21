<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      weeknumber: 0,
    };
  },
  
  async created() {
    try {
      const res = await axios.get("https://hanyadikhetvan.tormakristof.eu/");
      this.weeknumber = res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<template>
  <div>
    <h1>
      {{weeknumber}}
    </h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 5rem;
  top: -10px;
}
</style>
