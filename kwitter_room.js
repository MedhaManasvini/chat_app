//ADD YOUR FIREBASE LINKS HERE

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log(Room_names);



            //End code
        });
    });
}
getData();

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref('/').child(room_name).update({
        purpose: "adding_room_name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html"
}
