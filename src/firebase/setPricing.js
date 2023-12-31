import { db } from "./firebase";
import 'firebase/firestore';
import { collection, updateDoc, doc } from "firebase/firestore";

/**
 * Actualiza los datos de los "pricings".
 * @param {{id: String, newDataPricing: Object}} pricing
 * @returns {Promise}
*/

function setPricing(id, newDataPricing) {
  updateDoc(doc(collection(db, "pricing"), id), newDataPricing)
  .then(() => {
    console.log("Documento actualizado correctamente");
  })
  .catch((error) => {
    console.error("Error al actualizar el documento: ", error);
  });
}

export default setPricing;
