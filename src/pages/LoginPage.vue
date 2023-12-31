<script>
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import 'firebase/firestore';
  import { app } from "../firebase/firebase";

  export default {
    data() {
      return {
        auth: getAuth(app),
        user_obj: {
          email: '',
          name: '',
          password: '',
        },
        user_registered: {
          uid: '',
          email: '',
          name: '',
        },
        registered: false,
        userData: null,
        showError: false,
      };
    },
    created() {
      if (localStorage.getItem('user_registered')) {
        this.userData = JSON.parse(localStorage.getItem('user_registered'))
        this.user_registered = { ...this.userData }
        this.registered = true
      }
    },
    methods: {
      async loginUser() {
        try {
          const userCredential = await signInWithEmailAndPassword(this.auth, this.user_obj.email, this.user_obj.password);
          const user = userCredential.user;
          user && (this.registered = true)
          this.user_registered.uid = user.uid
          this.user_registered.email = user.email
          this.user_registered.name = user.displayName
          this.showError = false
          localStorage.setItem('user_registered', JSON.stringify(this.user_registered))
          this.userData = JSON.parse(localStorage.getItem('user_registered'))
          this.$router.push('/');
        } catch {
          console.log('error')
          this.showError = true
        }
      },
    }
  }
</script>

<template>
  <div>
    <main class='w-screen h-fit flex xl:flex-row flex-col-reverse justify-between'>
      <div class="relative top-[10vh] px-16 xl:ps-40 xl:py-10">
        <div>
          <img src="icons/creatimoon-logo.svg" alt="creatimoon logo">
        </div>
        <h1 class='font-semibold text-[45px] my-8'>Iniciar sesión</h1>
        <p class='mb-8'>Iniciá sesión para acceder. Si no tenés cuenta todavía, <router-link class="text-primary underline" to="/register">registrate acá</router-link>, es gratis. 😊</p>
        <form class="flex flex-col gap-8" @submit.prevent="loginUser">

          <div class="flex flex-col gap-4">
            <label class="font-semibold text-lg" for="email-input">Correo electrónico</label>
            <input v-model="user_obj.email" class="bg-background border-2 border-primary rounded-[10px] py-2 px-4" id="email-input" type="email"
              placeholder="JuanPerez@gmail.com">
          </div>

          <div class="flex flex-col gap-4">
            <label class="font-semibold text-lg" for="password-input">Contraseña</label>
            <input v-model="user_obj.password" class="bg-background border-2 border-primary rounded-[10px] py-2 px-4" id="password-input"
              type="password" placeholder="Contraseña">
          </div>

            <p v-if='this.showError' class='text-error'>Error al intentar iniciar sesión. Por favor, intentá nuevamente. 😔</p>

            <button class='mt-10 text-paragraph bg-primary border-2 border-primary rounded-[10px] py-2 transition-colors duration-300 hover:bg-background hover:text-primary w-1/2' type="submit">Iniciar sesión</button>

        </form>
      </div>
      <div>
        <img class="hidden xl:block w-[400px] h-screen object-cover" src="/images/illustration-misc.svg" alt="illustration">
        <img class="block xl:hidden w-full h-[200px] object-cover" src="/images/illustration-misc-horizontal.svg" alt="illustration">
      </div>
    </main>
  </div>
</template>