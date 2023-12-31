import { db } from "./firebase";
import 'firebase/firestore';
import { collection, orderBy, onSnapshot, query } from "firebase/firestore";

/**
 * Muestra los mensajes de un chat.
 * @param {{updateChat: Object}} messages
 * @returns {Promise}
*/

function getData({ updateChat }) {
  onSnapshot(query(collection(db, 'chat'), orderBy("uploaded_at")), (querySnapshot) => {
    const newChat = [];
    querySnapshot.forEach((doc) => {
      newChat.push({
        id: doc.id,
        ...doc.data()
      });
    });
    updateChat(newChat);
  });
}

export default getData;
