import { db } from "./firebase";
import 'firebase/firestore';
import { collection, query, where, getDocs } from "firebase/firestore";

/**
 * Muestra los chats existentes.
 * @param {{users: Array}} chats
 * @returns {Promise}
*/

async function getExistingChat(users) {
  const sortedUsers = users.sort()
  const findConnection = query(collection(db, 'chats_by_users'),
    where('users', '==', sortedUsers),
  );
  const querySnapshot = await getDocs(findConnection)
  if (querySnapshot.docs.length > 0) {
    return querySnapshot.docs[0].data()
  } else {
    return null
  }
}

export default getExistingChat
