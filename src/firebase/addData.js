import { db } from "./firebase";
import 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore";

/**
 * Agrega mensajes a los chats.
 * @param {{collectionSelected: String, item: Object}} messages
 * @returns {Promise}
*/

const addData = async (collectionSelected, item) => {
  const chatCollectionRef = collection(db, 'chats', collectionSelected, 'messages');
  await addDoc(chatCollectionRef, item);
}

export default addData;