import {getApp,getApps,initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBodaQ0kBnk4UNSzcw0ogQB_MIRWTJrEtA",
    authDomain: "restaurantapp-1b046.firebaseapp.com",
    databaseURL: "https://restaurantapp-1b046-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-1b046",
    storageBucket: "restaurantapp-1b046.appspot.com",
    messagingSenderId: "500281487939",
    appId: "1:500281487939:web:2c788da40c7e5446b6daf6",
    measurementId: "G-JPNS3FV4KD"
  };

  const app= getApps.length >0 ? getApp() : initializeApp(firebaseConfig);

  const firestore=getFirestore(app)
  const storage=getStorage(app)

  export { app,firestore,storage};
