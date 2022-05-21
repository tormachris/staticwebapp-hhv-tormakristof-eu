<script lang="ts">
import { defineComponent } from "vue";
import HHVDataService from "@/services/HHVDataService";
import type HHV from "@/types/HHV";
import type ResponseData from "@/types/ResponseData";

export default defineComponent({
  data() {
    return {
      weeknumber: {} as HHV,
    };
  },
  methods: {
    retrieveWeekNumber() {
        HHVDataService.getWeekNumber()
          .then((response: ResponseData) => {
            this.weeknumber = response.data;
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.retrieveWeekNumber();
  },
});
</script>

<template>
  <div>
    <h1 class="text-center">
      {{weeknumber}}
    </h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 5rem;
}
</style>
