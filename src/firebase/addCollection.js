import { db } from "./firebase";
import 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore";

/**
 * Crea una cuenta de usuario.
 * @param {{item: Object}} collection
 * @returns {Promise}
*/

const addCollection = async (item) => {
  const chatCollectionRef = collection(db, 'chat');
  await addDoc(chatCollectionRef, item);
}

export default addCollection;