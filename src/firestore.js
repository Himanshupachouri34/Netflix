import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDtW_YEITqGFKyywxqc6pwzIdDbEJBnL6I",
  authDomain: "netflix-93bca.firebaseapp.com",
  projectId: "netflix-93bca",
  storageBucket: "netflix-93bca.appspot.com",
  messagingSenderId: "89583006465",
  appId: "1:89583006465:web:c887f6da63a93265fa6100"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db  = app.firestore()
const authentication = getAuth(app);

export { authentication };
// export default db;