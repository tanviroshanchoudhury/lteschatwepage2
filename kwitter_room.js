
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDvIRIJhtT4Nr6EWRnuC_1pLaWEIO8rOsA",
      authDomain: "kwitter-c7aee.firebaseapp.com",
      databaseURL: "https://kwitter-c7aee-default-rtdb.firebaseio.com",
      projectId: "kwitter-c7aee",
      storageBucket: "kwitter-c7aee.appspot.com",
      messagingSenderId: "17914802546",
      appId: "1:17914802546:web:432c6269842b0c821bedeb",
      measurementId: "G-7FGQHXG52F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
