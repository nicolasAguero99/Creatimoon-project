<template>
  <nav v-if="showElemnet" class='hidden md:flex justify-between items-center px-8 py-6 mb-10 z-20'>
    <div>
      <img src="/icons/creatimoon-full-logo.svg" alt="creatimoon logo">
    </div>
    <ul class='flex gap-8 text-sm items-center'>
      <li v-if='currentUserRole?.role === "admin"'><router-link class='text-secondary hover:opacity-50' to="/admin">Admin</router-link></li>
      <li><router-link class='hover:text-primary' to="/">Inicio</router-link></li>
      <li><router-link class='hover:text-primary' to="/pricing">Precios</router-link></li>
      <li v-if='!this.currentUser' class='flex gap-4 text-sm items-center'>
        <router-link class='text-paragraph bg-primary border-2 border-primary rounded-full px-4 py-1 transition-colors duration-300 hover:bg-background hover:text-primary' to="/login">Iniciar sesión</router-link>
        <router-link class='bg-background border-2 text-primary border-primary rounded-full px-4 py-1 transition-colors duration-300 hover:bg-primary hover:text-paragraph' to="/register">Registrar</router-link>
      </li>
      <li v-else class='flex gap-4 text-sm items-center'>
        <router-link class='bg-background border-2 text-primary border-primary rounded-full px-4 py-1 transition-colors duration-300 hover:bg-primary hover:text-paragraph' to="/profile">{{this.currentUser.name}}</router-link>
      </li>
    </ul>
  </nav>
  <nav v-if="showElemnet" class='flex md:hidden justify-between items-center px-8 py-6 mb-10 z-20'>
    <div>
      <img src="/icons/creatimoon-logo.svg" alt="creatimoon logo">
    </div>
    <div v-if='!navMobile'>
      <button @click="showNavMobile"><img class="w-8" src="/icons/menu-mobile.svg" alt="open menu"></button>
    </div>
    <ul v-if='navMobile' class='bg-background w-full py-6 absolute top-1  m-auto flex flex-col gap-4 text-sm items-center'>
      <li v-if='currentUserRole?.role === "admin"'><router-link class='text-secondary hover:opacity-50' to="/admin">Admin</router-link></li>
      <li><button @click="showNavMobile" class="text-2xl">x</button></li>
      <li><router-link class='hover:text-primary' to="/">Inicio</router-link></li>
      <li><router-link class='hover:text-primary' to="/pricing">Precios</router-link></li>
      <li v-if='!this.currentUser' class='flex flex-col gap-4 text-sm items-center'>
        <router-link class='w-full text-center text-paragraph bg-primary border-2 border-primary rounded-full px-4 py-1 transition-colors duration-300 hover:bg-background hover:text-primary' to="/login">Iniciar sesión</router-link>
        <router-link class='w-full text-center bg-background border-2 text-primary border-primary rounded-full px-4 py-1 transition-colors duration-300 hover:bg-primary hover:text-paragraph' to="/register">Registrar</router-link>
      </li>
      <li v-else class='flex gap-4 text-sm items-center'>
        <router-link class='bg-background border-2 text-primary border-primary rounded-full px-4 py-1 transition-colors duration-300 hover:bg-primary hover:text-paragraph' to="/profile">{{this.currentUser.name}}</router-link>
      </li>
    </ul>
  </nav>
  <Chat />
  <router-view></router-view>

  <footer v-if="showElemnet" class='relative m-auto mt-10 flex justify-between items-center bg-primary w-[98vw] py-6 px-12 z-20'>
    <div>
      <img src="icons/creatimoon-dark-logo.svg" alt="creatimoon logo">
    </div>
    <div>
      <ul class='flex gap-4 text-paragraph'>
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/pricing">Precios</router-link></li>
        <li>
          <ul class='flex gap-2 items-center'>
            <li><a href="#"><img src="/icons/instagram-logo.svg" alt="instagram icon"></a></li>
            <li><a href="#"><img src="/icons/behance-logo.svg" alt="behance icon"></a></li>
            <li><a href="#"><img src="/icons/youtube-logo.svg" alt="youtube icon"></a></li>
          </ul>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
  import Chat from './components/Chat.vue'
  import getCurrentUser from './firebase/getCurrentUser'

  export default {
    data() {
      return {
        navMobile: false,
        showElemnet: true,
        currentUser: null,
        currentUserRole: null,
      };
    },
    async created() {
      this.currentUser = JSON.parse(localStorage.getItem('user_registered'));
      this.updateCurrentUserRole();
    },
    methods: {
      async updateCurrentUserRole() {
        if (this.currentUser) {
          this.currentUserRole = await getCurrentUser(this.currentUser.uid);
        } else {
          this.currentUserRole = null;
        }
      },
      showNavMobile() {
        this.navMobile = !this.navMobile;
      },
    },
    watch: {
      $route(to) {
        this.showElemnet = !(to.path.includes('/register')) && !(to.path.includes('/login')) && !(to.path.includes('/reset-user'));
        this.currentUser = JSON.parse(localStorage.getItem('user_registered'));
        this.updateCurrentUserRole();
      },
    },
    components: {
      Chat,
    },
  };
</script>