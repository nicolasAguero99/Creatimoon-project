<template>
  <section class='fixed bottom-0 right-10 w-[550px] flex flex-col border-2 border-primary rounded-[20px] bg-background'>
    <div class='flex justify-between border-b-2 px-6 py-2 font-semibold text-lg'>
      <h6>Atención al cliente</h6>
      <button @click='showChats'>X</button>
    </div>
    <div class='flex'>
      <ul class='flex flex-col border-e-2 px-6 py-4 divide-y divide-tertiary min-h-[400px]'>
        <li v-for="(user, index) in users" :key="user.email" ref='eachUser'><button @click='enterChat(user.uid, index)' v-html="user.name" class='hover:opacity-40 w-full text-left py-4 pe-4'></button></li>
      </ul>
      <div class='flex flex-col flex-1'>
        <div v-if="loading" class='flex justify-center items-center h-full'>
          <Loader />
        </div>
        <p v-if='noChatsSelected' class='h-full flex justify-center items-center opacity-50'>Ningún chat seleccionado</p>
        <ul v-if='this.chat.length > 0' class='flex flex-col gap-4 p-4 flex-1'>
          <li v-for="(chat, index) in this.chat" :key="chat.id" :class="currentUser.uid == chat.user ? MSG_SENDER : MSG_RECEIVER">
            <p v-html="chat.text"></p>
            <small v-html="chat.uploaded_at"></small>
          </li>
        </ul>
        <div v-if='showInput' class='m-auto flex gap-2 items-center pb-4'>
          <input v-model='this.custom_msg.text' class='bg-background px-4 py-1 border-2 border-primary rounded-full' type="text" placeholder='Escribí un mensaje...'>
          <button class='bg-primary p-2 rounded-full [&>img]:w-5' @click="sendMessage"><img src="/icons/send-icon.svg" alt="send message"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import addChatsByUsers from '../firebase/addChatsByUsers.js'
import addChats from '../firebase/addChats.js'
import getExistingChat from '../firebase/getExistingChat.js'
import getChat from '../firebase/getChat.js'
import addData from '../firebase/addData.js'
import { v4 as uuidv4 } from 'uuid';
import { ref } from 'vue';
import Loader from './Loader.vue'
import getCurrentUser from '../firebase/getCurrentUser'

  export default {
    inject: ['isShowChatsContext'],
    setup() {
      return {
        currentUser: JSON.parse(localStorage.getItem('user_registered')),
      }
    },
    data() {
      return {
        noChatsSelected: true,
        loading: false,
        chat: [],
        showInput: false,
        idCollection: null,
        custom_msg: {
          text: '',
          uploaded_at: new Date(),
          user: this.currentUser.uid,
        },
        default_msg: {
          text: 'Hola',
          user: this.currentUser.uid,
          uploaded_at: new Date(),
        },
        users_connection: {
          id_chat: uuidv4(),
          users: [this.currentUser.uid],
        }
      }
    },
    computed: {
      MSG_RECEIVER() {
        return 'bg-primary rounded-full rounded-ss-none py-1 px-4 text-background text-sm self-start';
      },
      MSG_SENDER() {
        return 'bg-paragraph rounded-full rounded-se-none py-1 px-4 text-sm self-end';
      }
    },
    props: {
      users: {
        type: Array,
        required: true
      },
    },
    methods: {
      sendMessage () {
        addData(this.idCollection, this.custom_msg)
        this.custom_msg = {
          text: '',
          uploaded_at: new Date(),
          user: this.currentUser.uid,
        }
      },
      showChats () {
        this.isShowChatsContext = false
      },
      async enterChat (uid, index) {
        const user = await getCurrentUser(this.currentUser.uid);
        const text = user?.role !== 'admin' ? '¡Hola, tengo una duda!' : 'Hola, ¿en qué puedo ayudarte?';
        this.default_msg.text = text,
        this.noChatsSelected = false
        this.loading = true
        this.$refs.eachUser.forEach(user => user?.classList?.remove('text-primary'))
        this.$refs.eachUser[index].classList.add('text-primary')
        this.showInput = true
        this.chat = []
        this.users_connection.users.push(uid)
        const isChatExist = await getExistingChat(this.users_connection.users)
        if (isChatExist) {
          this.chat = getChat(isChatExist.id_chat)
          this.idCollection = isChatExist.id_chat
        } else {
          await addChats(this.users_connection.id_chat, this.default_msg)
          await addChatsByUsers(this.users_connection)
          this.chat = getChat(this.users_connection.id_chat)
          this.idCollection = this.users_connection.id_chat
        }
        this.default_msg = {
          text: '¡Hola, tengo una duda!',
          user: this.currentUser.uid,
          uploaded_at: new Date(),
        },
        this.users_connection = {
          id_chat: uuidv4(),
          users: [this.currentUser.uid],
        },
        this.loading = false
      }
    },
    components: {
      Loader,
    }
  };
</script>