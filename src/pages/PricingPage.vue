<template>
  <div v-if="loading" class="fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-paragraph z-50">
    <Loader />
  </div>
  <div class='max-w-[1040px] px-12 xl:px-0 m-auto'>
    <main class='mt-20'>
      <h1 class='text-center font-semibold text-[45px] mb-6'>¿Listo para <span class='text-primary'>empezar a crear?</span></h1>
      <p class='m-auto text-center'>Elegí el paquete que más se adecúe a tus necesidades</p>
      <div class='flex flex-col lg:flex-row gap-6 justify-center mt-20'>
        <div v-for='(pricing, index) in pricing_data' :key='pricing.id' class='flex-1 flex flex-col gap-4 border-2 border-primary rounded-[20px] py-6 [&:nth-child(2)]:bg-primary [&:nth-child(2)]:text-paragraph [&:nth-child(2)>h4]:text-paragraph [&:nth-child(2)>button]:bg-background [&:nth-child(2)>button]:text-primary'>
          <h4 class='text-primary font-semibold text-2xl text-center'>{{ pricing.title }}</h4>
          <span class='font-semibold text-xl text-center' v-html='"$ " + pricing.price + " USD"'></span>
          <ul style="list-style-image: url(/icons/check-icon.svg)" class='max-w-[220px] flex flex-col gap-4 m-auto [&>li]:ps-4'>
            <li v-for='(feature, index) in pricing.features' :key='index' v-html='feature'></li>
          </ul>
          <button class='text-paragraph bg-primary border-2 border-primary rounded-full px-4 py-1 mx-8 text-sm transition-colors duration-300 hover:bg-background hover:text-primary'>¡Creemos juntos!</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import 'firebase/firestore';
import getPricing from "../firebase/getPricing";

import Loader from "../components/Loader.vue";

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
      this.loading = false
    } catch (error) {
      console.error(error);
    }
  },
  components: {
    Loader,
  },
};
</script>
