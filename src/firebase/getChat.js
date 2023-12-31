import { ref } from "vue";
import { db } from "./firebase";
import 'firebase/firestore';
import { collection, orderBy, onSnapshot, query } from "firebase/firestore";

/**
 * Muestra los chats.
 * @param {{documentSelected: String}} chat
 * @returns {Promise}
*/

function getChat(documentSelected) {
  const formatedDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000)
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const año = date.getFullYear();
    const hora = date.getHours();
    const minutos = date.getMinutes();
    const dateMsg = `${dia}/${mes}/${año} ${hora}:${minutos}`;
    return dateMsg
  }

  const route = `chats/${documentSelected}/messages`;
  const chatData = ref([]);
  onSnapshot(query(collection(db, route), orderBy("uploaded_at")), (querySnapshot) => {
    const newChat = [];
    querySnapshot.forEach((doc) => {
      newChat.push({
        ...doc.data(),
        id: doc.id,
        uploaded_at: formatedDate(doc.data().uploaded_at),
      });
    });
    chatData.value = newChat;
  }, (error) => {
    console.error("Error al obtener el chat:", error);
  });

  return chatData;
}

export default getChat;
