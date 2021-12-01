import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6x0KtezzAwsRdWanSV2NOK0_TNKfC_ws",
  authDomain: "viajando-ecommerce.firebaseapp.com",
  projectId: "viajando-ecommerce",
  storageBucket: "viajando-ecommerce.appspot.com",
  messagingSenderId: "430944486640",
  appId: "1:430944486640:web:f7e295d3d221de1d056e35",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export const getFirebase = () => app;

export { getFirestore };
