var firebaseConfig = {
      apiKey: "AIzaSyAemIDiICYou8H__962iNGV4yPJAPx5Jys",
      authDomain: "lets-chat-project-b91da.firebaseapp.com",
      databaseURL: "https://lets-chat-project-b91da-default-rtdb.firebaseio.com",
      projectId: "lets-chat-project-b91da",
      storageBucket: "lets-chat-project-b91da.appspot.com",
      messagingSenderId: "255962041299",
      appId: "1:255962041299:web:a67e9dd8ebf2307e257d26"
    };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
