var firebaseConfig = {
      apiKey: "AIzaSyCtVGOCos6kuk7zULQXrritK74KP-5Blik",
      authDomain: "letschatreal-94155.firebaseapp.com",
      databaseURL: "https://letschatreal-94155-default-rtdb.firebaseio.com",
      projectId: "letschatreal-94155",
      storageBucket: "letschatreal-94155.appspot.com",
      messagingSenderId: "242550480867",
      appId: "1:242550480867:web:e2e2c4af13462e8c2b4ad6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom () {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", room_name);
      window.location = "letschat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}     
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "letschat_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location = "index.html";
}