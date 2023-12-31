<script>
  import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
  import 'firebase/firestore';
  import { collection, addDoc } from "firebase/firestore";
  import { db } from "../firebase/firebase.js";
  import { app } from "../firebase/firebase";

  export default {
    data() {
      return {
        auth: getAuth(app),
        password: '',
        user_obj: {
          uid: '',
          email: '',
          name: '',
          role: 'user',
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
      async registerUser() {
        try {
          const userCredential = await createUserWithEmailAndPassword(this.auth, this.user_obj.email, this.password);
          const user = userCredential.user;

          user && (this.registered = true)

          this.user_obj.uid = this.auth.currentUser.uid

          await addDoc(collection(db, 'users'), this.user_obj);

          await updateProfile(user, { displayName: this.user_obj.name });

          this.user_registered.uid = this.auth.currentUser.uid
          this.user_registered.email = this.auth.currentUser.email
          this.user_registered.name = this.auth.currentUser.displayName

          localStorage.setItem('user_registered', JSON.stringify(this.user_registered))
          this.showError = false
          this.userData = JSON.parse(localStorage.getItem('user_registered'))
          this.$router.push('/');             
        } catch {
          console.log('error')
          this.showError = true
        }
      },
    },
  };
</script>

<template>
  <div>
    <main class='w-screen h-fit flex xl:flex-row flex-col-reverse justify-between'>
      <div class="relative top-[10vh] px-16 xl:ps-40 xl:py-10">
        <div>
          <img src="/icons/creatimoon-logo.svg" alt="creatimoon logo">
        </div>
        <h1 class='font-semibold text-[45px] my-8'>Registrarse</h1>
        <p class='mb-8'>Registrate para crear tu cuenta. Si ya tenés una, <router-link class="text-primary underline" to="/login">iniciá sesión
            acá</router-link>. 😊</p>
        <form class="flex flex-col gap-8" @submit.prevent="registerUser">
          <div class="flex flex-col gap-4">
            <label class="font-semibold text-lg" for="name-input">Nombre de usuario</label>
            <input v-model="user_obj.name" class="bg-background border-2 border-primary rounded-[10px] py-2 px-4" id="name-input" type="text"
              placeholder="Juan Pérez">
          </div>
          <div class="flex flex-col gap-4">
            <label class="font-semibold text-lg" for="email-input">Correo electrónico</label>
            <input v-model="user_obj.email" class="bg-background border-2 border-primary rounded-[10px] py-2 px-4" id="email-input" type="email"
              placeholder="JuanPerez@gmail.com">
          </div>
          <div class="flex flex-col gap-4">
            <label class="font-semibold text-lg" for="password-input">Contraseña</label>
            <input v-model="password" class="bg-background border-2 border-primary rounded-[10px] py-2 px-4" id="password-input"
              type="password" placeholder="Contraseña">
          </div>
          <p v-if='this.showError' class='text-error'>Error al intentar registrarse. Por favor, intentá nuevamente. 😔</p>
          <button class='mt-10 text-paragraph bg-primary border-2 border-primary rounded-[10px] py-2 transition-colors duration-300 hover:bg-background hover:text-primary w-1/2' type="submit">Registrarse</button>
        </form>
      </div>
      <div>
        <img class="hidden xl:block w-[400px] h-screen object-cover" src="/images/illustration-misc.svg" alt="illustration">
        <img class="block xl:hidden w-full h-[200px] object-cover" src="/images/illustration-misc-horizontal.svg" alt="illustration">
      </div>
    </main>
  </div>
</template>