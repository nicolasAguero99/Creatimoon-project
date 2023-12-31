import { db } from "./firebase";
import 'firebase/firestore';
import { getDocs, collection, where, query } from "firebase/firestore";

/**
 * Muestra el usuario logeado actual.
 * @param {{uid: String}} currentUser
 * @returns {Promise}
*/

async function getCurrentUser(uid) {
  const querySnapshot = await getDocs(query(collection(db, "users"), where("uid", "==", uid)));

  if (querySnapshot.size === 1) {
    let users = {};
    querySnapshot.forEach((doc) => {
      users = { id: doc.id, ...doc.data() };
    });
    return users;
  } else {
    return null;
  }
}

export default getCurrentUser;
