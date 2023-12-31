<script>
import 'firebase/firestore';
import { onMounted, ref } from "vue";

import UsersBase from "./UsersBase.vue"
import getUsers from '../firebase/getUsers'
import getCurrentUser from '../firebase/getCurrentUser'

export default {
  setup() {
    const users = ref([]);
    const currentUser = JSON.parse(localStorage.getItem('user_registered'))

    const updateUsers = (newUsers) => {
      users.value = newUsers;
    };

    onMounted(async () => {
      try {
        const user = await getCurrentUser(currentUser.uid);
        if (user.role === 'user') {
          getUsers({ updateUsers }, 'admin')
        } else {
          getUsers({ updateUsers }, 'user')
        }
      } catch (error) {
        console.error(error);
      }
    });

    return {
      users,
    };
  },
  components: {
    UsersBase,
  },
};
</script>

<template>
  <div>
    <UsersBase :users="users" />
  </div>
</template>