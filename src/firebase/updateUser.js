import { db } from "./firebase";
import 'firebase/firestore';
import { getAuth, updateProfile } from 'firebase/auth';
import { doc, updateDoc } from "firebase/firestore";

async function updateUser (uid, newName) {
  try {
    await updateProfile(getAuth().currentUser, { displayName: newName });
    await updateDoc(doc(db, 'users', uid), { name: newName });
    return true;
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    return false;
  }
};

export default updateUser;
