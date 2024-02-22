// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBPyqrfaKawLny3O5X4wSrAn-5pAU07Q0",
  authDomain: "squechuleumss.firebaseapp.com",
  databaseURL: "https://squechuleumss-default-rtdb.firebaseio.com",
  projectId: "squechuleumss",
  storageBucket: "squechuleumss.appspot.com",
  messagingSenderId: "179895921134",
  appId: "1:179895921134:web:bca8435a4f27a72a5946ff",
  measurementId: "G-5WRZ4KNT3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getCarreras(db){
    const citiesCol = collection(db, 'LICAE', "grupos");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList)
  return cityList;
}

getCarreras(db);