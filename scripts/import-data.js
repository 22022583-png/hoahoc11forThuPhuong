const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, setDoc, doc } = require('firebase/firestore');
const data = require('../lib/firebase-data.json');

const firebaseConfig = {
  // Use your config here or from env
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "demo",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "demo.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "demo-project",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function importData() {
  try {
    // Import questions
    for (const question of data.questions) {
      await addDoc(collection(db, 'questions'), question);
    }

    // Import users
    for (const [userId, userData] of Object.entries(data.users)) {
      await setDoc(doc(db, 'users', userId), userData);
    }

    // Import tests
    for (const [testId, testData] of Object.entries(data.tests)) {
      await setDoc(doc(db, 'tests', testId), testData);
    }

    console.log('Data imported successfully!');
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

importData();