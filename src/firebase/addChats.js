import { db } from "./firebase";
import 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore";

/**
 * Crea un chat.
 * @param {{uuid: String, chat: Object}} chat
 * @returns {Promise}
 */

const addChats = async (uuid, chat) => {
  const route = `chats/${uuid}/messages`;
  const newChat = await addDoc(collection(db, route), chat);
  return newChat
}

export default addChats;