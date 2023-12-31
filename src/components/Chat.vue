<script>
import 'firebase/firestore';
import { onMounted, onUnmounted, ref, provide } from "vue";
import Users from "./Users.vue";
import getData from "../firebase/getData";

export default {
  setup() {
    const chat = ref([]);
    const isShowChats = ref(false);

    const updateChat = (newChat) => {
      chat.value = newChat;
    };

    const getDataFromFirebase = () => {
      getData({ updateChat });
    };

    onMounted(getDataFromFirebase);
    onUnmounted(getDataFromFirebase);

    const showChats = () => {
      isShowChats.value = !isShowChats.value;
    };

    provide('isShowChatsContext', isShowChats);

    return {
      chat,
      isShowChats,
      showChats,
    };
  },
  data() {
    return {
      isLogged: false,
    }
  },
  created() {
    this.isLogged = JSON.parse(localStorage.getItem('user_registered')) ? true : false;
  },
  watch: {
    $route() {
      this.isLogged = JSON.parse(localStorage.getItem('user_registered')) ? true : false;
    },
  },
  components: {
    Users,
  },
};
</script>

<template>
  <button @click='showChats' :class='(isLogged ? "hover:bg-background [&>img]:hover:invert " : "opacity-30 ") + "fixed bottom-8 right-10 bg-primary border-2 border-primary rounded-full w-fit p-3 shadow-md transition-colors duration-300 z-20"' :disabled='!isLogged ? true : false'>
    <img class='w-8' src="/icons/support-icon.svg" alt="support icon">
  </button>
  <div v-if='isShowChats' class='relative z-30'>
    <Users />
  </div>
</template>