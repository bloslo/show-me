import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB-mIWDNN5Hx5Sj0BV1cq72hqauyrxwmQY",
    authDomain: "showme-ab504.firebaseapp.com",
    databaseURL: "https://showme-ab504.firebaseio.com",
    projectId: "showme-ab504",
    storageBucket: "",
    messagingSenderId: "739964765682"
  };

export const firebaseApp = firebase.initializeApp(config)
