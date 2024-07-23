import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA3-zdG2X6ODaI8soCcwPWiT1liG-ujeOE',
  authDomain: 'property-601e5.firebaseapp.com',
  projectId: 'property-601e5',
  storageBucket: 'property-601e5.appspot.com',
  messagingSenderId: '188460163249',
  appId: '1:188460163249:web:a9bdf1d4998fcd5c8d8290',
  measurementId: 'G-GLP1VSCVS0',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
