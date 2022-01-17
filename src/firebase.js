import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAWIx4hzbnvI0Nxv8KhCto4KvqyAFIgYN8',
  authDomain: 'wz-db-ed1ca.firebaseapp.com',
  projectId: 'wz-db-ed1ca',
  storageBucket: 'wz-db-ed1ca.appspot.com',
  messagingSenderId: '825395959123',
  appId: '1:825395959123:web:07d5bee83e6db4b250fda6',
  measurementId: 'G-JR5WBB2E5N'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
