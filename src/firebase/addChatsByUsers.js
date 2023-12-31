import { db } from "./firebase";
import 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore";

/**
 * Crea la conexión entre los usuarios y su chat en común.
 * @param {{chatsByUsers: Object}} chatsByUsers
 * @returns {Promise}
 */

const addChatsByUsers = async (chatsByUsers) => {
  await addDoc(collection(db, 'chats_by_users'), chatsByUsers);
}

export default addChatsByUsers;