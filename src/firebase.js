import { initializeApp } from "firebase/app"

import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBqYeY566m-1TgE2mXhaWCvMhBoL0o2ZTI",
  authDomain: "outfitly-e7c71.firebaseapp.com",
  projectId: "outfitly-e7c71",
  storageBucket: "outfitly-e7c71.firebasestorage.app",
  messagingSenderId: "651941004288",
  appId: "1:651941004288:web:1ff9db171d037fc4b884e5",
  measurementId: "G-2XMX3WLQSH"
};


const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)