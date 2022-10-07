import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA12yucKVkw-Dr3ts759PKyBWViP9jacYA",
    authDomain: "agbanla-recipe.firebaseapp.com",
    projectId: "agbanla-recipe",
    storageBucket: "agbanla-recipe.appspot.com",
    messagingSenderId: "812529599140",
    appId: "1:812529599140:web:b0811cc99d82c4c993dc31"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()

export { projectFirestore }
