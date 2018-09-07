import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDUVUEWt1Iw4rZ0UPu71xxCKnk74xWnit8',
  authDomain: 'my-blog-system.firebaseapp.com',
  databaseURL: 'https://my-blog-system.firebaseio.com',
  projectId: 'my-blog-system',
  storageBucket: '',
  messagingSenderId: '621774557089'
}
const fire = firebase.initializeApp(config)

export { fire }
