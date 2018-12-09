import firebase from "firebase/app"
import "firebase/firestore"

if (firebase && firebase.apps && !firebase.apps.length) {
  console.log("init firebase")
  firebase.initializeApp({
    apiKey: "AIzaSyAW31C7xCkK8wHwEYlGx5MAfk9o-PEzaKA",
    authDomain: "as-playground.firebaseapp.com",
    databaseURL: "https://as-playground.firebaseio.com",
    projectId: "as-playground",
    storageBucket: "as-playground.appspot.com",
    messagingSenderId: "148398358732"
  })

  firebase.firestore().settings({ timestampsInSnapshots: true })
}

export const fireDb = firebase.firestore()
