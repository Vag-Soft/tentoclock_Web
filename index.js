const firebaseConfig = {
    apiKey: "AIzaSyBy7h8RIf1eWUPcqqt0Z5D6s-KY9FPltqI",
    authDomain: "tentoclock-ce1b1.firebaseapp.com",
    databaseURL: "https://tentoclock-ce1b1-default-rtdb.firebaseio.com",
    projectId: "tentoclock-ce1b1",
    storageBucket: "tentoclock-ce1b1.appspot.com",
    messagingSenderId: "979571765348",
    appId: "1:979571765348:web:f0f62f54cdaeba211fef71"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = app.database();

function send_request() {
    // Check if the form is valid
    var form = document.getElementById("form");
    if (!form.checkValidity()) {
        return;
    }

    // Get form data
    var address = document.getElementById("address").value;
    var doorbell = document.getElementById("doorbell").value;
    var email = document.getElementById("email").value;
    var firstname = document.getElementById("firstname").value;
    var floor = document.getElementById("floor").value;
    var lastname = document.getElementById("lastname").value;
    var phone = document.getElementById("phone").value;
    var postcode = document.getElementById("postcode").value;
    var regionArea = document.getElementById("regionArea").value;

    // Get a key for a new customer
    var newPostKey = database.ref().child('customers').push().key;

    // Write the new customer's data simultaneously in the customerCards list and the customers list
    database.ref('customerCards/' + newPostKey).set({
        email: email,
        firstname: firstname,
        lastname: lastname,
        regionArea: regionArea
    })

    database.ref('customers/' + newPostKey).set({
        address: address,
        doorbell: doorbell,
        email: email,
        firstname: firstname,
        floor: floor,
        lastname: lastname,
        phone: phone,
        postcode: postcode,
        regionArea: regionArea
    })


    alert("Submitted");

    
    //window.location.replace = "egguhsh.html";
}