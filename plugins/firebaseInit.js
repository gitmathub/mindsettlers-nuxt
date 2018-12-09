import firebase from "firebase/app"
import "firebase/firestore"
import {
  confDev,
  confProd
} from "../.firebase-server-credentials"
const os = require("os")

const hostname = os.hostname()

let envProject = process.env.GCLOUD_PROJECT

if (!envProject) {
  if (process.env.NODE_ENV === "production" || hostname === "app.mindsettlers.com") {
    envProject = "agility-scales"
  } else {
    envProject = "as-playground"
  }
}

export const fireDb = initFirebase(envProject)

// project = "as-playground" or project = "agilitys-scales"
export function initFirebase(project) {
  if (!firebase.apps.length) {
    if (project === "as-playground") {
      console.log("init firebase DEV")
      firebase.initializeApp(confDev)
    } else if (project === "agility-scales") {
      console.log("init firebase PRODUCTION")
      firebase.initializeApp(confProd)
    } else {
      throw new Error("missing env: GCLOUD_PROJECT=as-playground -- see package.json")
    }
  }

  const fireDb = firebase.firestore()
  fireDb.settings({ timestampsInSnapshots: true })
  return fireDb
}
