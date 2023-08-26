/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { config } from "./config";
import { getFirestore, addDoc, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(config);

const database = getFirestore(app);

export const saveTitle = async (name) => {
  try {
    console.log("guardando title");
    const nameColeccion = collection(database, "Mi-coleccion");
    const documentGuardado = await addDoc(nameColeccion, {
      name,
    });
    console.log("Guardando Titutlo");
    console.log(documentGuardado);
  } catch (error) {
    console.log(error);
  }
};
