// firebase.js

// Import Firebase core and services
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-storage.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhxUl24YEGUHy72Dr7bKjET9661FQucHI",
  authDomain: "namaztime-6d6f8.firebaseapp.com",
  projectId: "namaztime-6d6f8",
  storageBucket: "namaztime-6d6f8.firebasestorage.app",
  messagingSenderId: "898678440277",
  appId: "1:898678440277:web:30e05c9e329987015a2fdc",
  measurementId: "G-43KRESJ9B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export services
export { app, analytics, auth, db, storage };
