import { db } from "./firebase";
import 'firebase/firestore';
import { collection, getDocs } from "firebase/firestore";

/**
 * Muestra los "pricings".
 * @returns {Promise}
*/

async function getPricing() {
  const newPricing = [];
  const pricingCollection = collection(db, 'pricing');

  try {
    const querySnapshot = await getDocs(pricingCollection);

    querySnapshot.forEach((doc) => {
      newPricing.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return newPricing;
  } catch (error) {
    throw error;
  }
}

export default getPricing;
