<script>
  import 'firebase/firestore';

  export default {
    setup() {
      return {
        currentUser: JSON.parse(localStorage.getItem('user_registered')),
      }
    },
    methods: {
      logOut() {
        localStorage.removeItem('user_registered')
        this.$router.push('/')
      },
    }
  }
</script>

<template>
  <div>
    <main class='w-screen flex flex-col items-center px-16 mb-36'>
      <h1 class='font-semibold text-[45px] my-8 mb-16'>Editar tu <span class='text-primary'>perfil</span></h1>
      <div class='w-full min-h-[400px] bg-tertiary rounded-[30px] flex flex-col justify-center items-center gap-6 px-12 py-8'>
        <h2 class='text-primary font-semibold text-3xl'>Tu información</h2>
        <div class='flex flex-col items-center gap-2'>
          <span class='text-sm opacity-50'>Nombre de usuario</span>
          <h3 class='text-xl'>{{ currentUser.name }}</h3>
        </div>
        <div class='flex flex-col items-center gap-2'>
          <span class='text-sm opacity-50'>Tu mail</span>
          <h3 class='text-xl'>{{ currentUser.email }}</h3>
        </div>
        <!-- <div class='flex flex-col items-center gap-2'>
          <router-link class='text-primary text-xl' to='/reset-user'>Reestablecer datos</router-link>
        </div> -->
        <hr class='text-background w-full'>
        <button @click='logOut' class='bg-error border-2 border-error rounded-[10px] py-2 transition-colors duration-300 hover:bg-background hover:text-error w-1/2' type="button">Cerrar sesión</button>
      </div>
    </main>
  </div>
</template>