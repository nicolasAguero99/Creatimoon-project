<template>
  <div v-if="loading" class="fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-paragraph z-50">
    <Loader />
  </div>
  
  <div class='max-w-[1040px] px-12 xl:px-0 m-auto'>
    <main class='mt-20'>
      <h1 class='text-center font-semibold text-[45px] mb-6'>Editar las <span class='text-secondary'>ofertas</span></h1>
      <p class='m-auto text-center'>Los cambios realizados se verán públicamente en la página</p>
      <div class='flex flex-col lg:flex-row gap-6 justify-center mt-20'>
        <div v-for='(pricing, index) in pricing_data' :key='pricing.id'
          class='flex-1 flex flex-col gap-4 border-2 border-secondary rounded-[20px] py-6'>
          <input type='text' class='bg-adminInput text-secondary font-semibold text-2xl text-center py-2' v-model='pricing.title'>
          <div class='flex gap-4 justify-center items-center font-semibold'>
            <span class='flex-1 text-end'>$</span>
            <input type='text' class='bg-adminInput font-semibold text-xl text-center w-1/2 py-1 rounded-full' v-model='pricing.price'>
            <span class='flex-1'>USD</span>
          </div>
          <textarea class='bg-adminInput resize-y px-8 py-4 mx-4 rounded-xl' rows="10" v-model='pricing.features'></textarea>
          <button @click='saveChanges(index, pricing.id)'
            class='text-paragraph bg-secondary border-2 border-secondary rounded-full px-4 py-1 mx-8 text-sm transition-colors duration-300 hover:bg-background hover:text-secondary'>Guardar
            cambios</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import 'firebase/firestore';
import getPricing from "../../firebase/getPricing";
import setPricing from '../../firebase/setPricing';

import Loader from '../../components/Loader.vue';

export default {
  data() {
    return {
      loading: true,
      pricing_data: [],
    };
  },
  async created() {
    try {
      this.pricing_data = await getPricing();
      this.loading = false;
      this.pricing_data.forEach(pricing => {
        pricing.features = pricing.features.toString().replace(/,/g, '\n');
      });
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    saveChanges(index, id) {
      const pricing = this.pricing_data[index];

      const newDataPricing = {
        title: pricing.title,
        price: pricing.price,
        features: pricing.features.trim().split('\n'),
      };

      setPricing(id, newDataPricing);
    },
  },
  components: {
    Loader,
  }
};
</script>
