import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-SDavc52F-AP-bj7g5gCpWs8Pq-UJbow",
  authDomain: "nsm-project-4977f.firebaseapp.com",
  projectId: "nsm-project-4977f",
  storageBucket: "nsm-project-4977f.appspot.com",
  messagingSenderId: "1046205700890",
  appId: "1:1046205700890:web:212baeb208035a2f942aa3",
  measurementId: "G-XS33D9K17Z",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
