import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';


// We will need to connect our seed data here

const config = {
    apiKey: "AIzaSyCQROZsxk_ftOLlxlYWAZq6-k5kDJQBOz4",
    authDomain: "ig-clone-3ad42.firebaseapp.com",
    projectId: "ig-clone-3ad42",
    storageBucket: "ig-clone-3ad42.appspot.com",
    messagingSenderId: "700537075904",
    appId: "1:700537075904:web:51bd7d8e5e081c11865525"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// WIll rub the seedData function here when ready
// seedDatabase(firebase);
export { firebase, FieldValue };