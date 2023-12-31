import { db } from "./firebase";
import 'firebase/firestore';
import { collection, query, where, limit, onSnapshot } from "firebase/firestore";

/**
 * Muestra los usuarios "admin".
 * @param {{updateUsers: Object, role: String}} users
 * @returns {Promise}
*/

function getAdminUsers({ updateUsers }, role) {
  const usersRef = collection(db, 'users');
  const adminQuery = query(usersRef, where('role', '==', role));

  onSnapshot(adminQuery, (querySnapshot) => {
    const newAdminUsers = [];
    querySnapshot.forEach((doc) => {
      newAdminUsers.push({
        id: doc.id,
        ...doc.data()
      });
    });
    updateUsers(newAdminUsers);
  });
}

export default getAdminUsers;